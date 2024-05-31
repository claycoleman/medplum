import { Logger, normalizeErrorString } from '@medplum/core';
import { execSync } from 'node:child_process';
import { createWriteStream, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { downloadRelease, fetchLatestVersionString, getOsString, getReleaseBinPath } from './upgrader-utils';

const UPGRADER_LOG_PATH = resolve(__dirname, `upgrader-logs-${new Date().toISOString().replace(/:\s*/g, '-')}.txt`);

export async function upgraderMain(argv: string[]): Promise<void> {
  // TODO: Remove this when Linux auto-update is supported
  if (getOsString() === 'linux') {
    throw new Error('Auto-upgrading is not currently supported for Linux');
  }

  // NOTE: Windows past this point, for now

  const logStream = createWriteStream(UPGRADER_LOG_PATH, { flags: 'w+' });
  logStream.setDefaultEncoding('utf-8');
  const globalLogger = new Logger((msg) => logStream.write(`${msg}\n`));

  if (!process.send) {
    globalLogger.error('Upgrader not started as a child process with Node IPC enabled. Aborting...');
    process.exit(1);
  }

  process.send({ type: 'STARTED' });

  // Make sure if version is given, it matches semver
  if (argv[3] && !/\d+\.\d+\.\d+/.test(argv[3])) {
    throw new Error('Invalid version specified');
  }
  const version = argv[3] ?? (await fetchLatestVersionString());
  const binPath = getReleaseBinPath(version);

  // If release in not locally downloaded, download it first
  if (!existsSync(binPath)) {
    // Download release
    globalLogger.info(`Could not find binary at "${binPath}". Downloading release from GitHub...`);
    await downloadRelease(version, binPath);
    globalLogger.info('Release successfully downloaded');
  }

  try {
    // Stop service
    globalLogger.info('Stopping running agent service...');
    execSync('net stop "Medplum Agent"');
    globalLogger.info('Agent service stopped succesfully');
    // Run installer
    globalLogger.info('Running installer silently', { binPath });
    execSync(`${binPath} -S`);
    globalLogger.info(`Agent version ${version} successfully installed`);
  } catch (err: unknown) {
    // Try to restart Agent service if anything goes wrong
    globalLogger.error(`Error while attempting to run installer: ${normalizeErrorString(err)}`);
    globalLogger.error('Failed to run installer, attempting to restart agent service...');
    execSync('net start "Medplum Agent"');
    globalLogger.info('Successfully restarted agent service');
  }

  // Make sure to flush log stream
  logStream.end();
}
