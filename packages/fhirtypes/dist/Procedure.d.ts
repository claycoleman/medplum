/*
 * Generated by @medplum/generator
 * Do not edit manually.
 */

import { Age } from './Age';
import { Annotation } from './Annotation';
import { CarePlan } from './CarePlan';
import { CodeableConcept } from './CodeableConcept';
import { Composition } from './Composition';
import { Condition } from './Condition';
import { Device } from './Device';
import { DiagnosticReport } from './DiagnosticReport';
import { DocumentReference } from './DocumentReference';
import { Encounter } from './Encounter';
import { Extension } from './Extension';
import { Group } from './Group';
import { Identifier } from './Identifier';
import { Location } from './Location';
import { Medication } from './Medication';
import { MedicationAdministration } from './MedicationAdministration';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Observation } from './Observation';
import { Organization } from './Organization';
import { Patient } from './Patient';
import { Period } from './Period';
import { Practitioner } from './Practitioner';
import { PractitionerRole } from './PractitionerRole';
import { Range } from './Range';
import { Reference } from './Reference';
import { RelatedPerson } from './RelatedPerson';
import { Resource } from './Resource';
import { ServiceRequest } from './ServiceRequest';
import { Substance } from './Substance';

/**
 * An action that is or was performed on or for a patient. This can be a
 * physical intervention like an operation, or less invasive like long
 * term services, counseling, or hypnotherapy.
 */
export interface Procedure {

  /**
   * This is a Procedure resource
   */
  readonly resourceType: 'Procedure';

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by
   * the infrastructure. Changes to the content might not always be
   * associated with version changes to the resource.
   */
  meta?: Meta;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  implicitRules?: string;

  /**
   * The base language in which the resource is written.
   */
  language?: string;

  /**
   * A human-readable narrative that contains a summary of the resource and
   * can be used to represent the content of the resource to a human. The
   * narrative need not encode all the structured data, but is required to
   * contain sufficient detail to make it &quot;clinically safe&quot; for a human to
   * just read the narrative. Resource definitions may define what content
   * should be represented in the narrative to ensure clinical safety.
   */
  text?: Narrative;

  /**
   * These resources do not have an independent existence apart from the
   * resource that contains them - they cannot be identified independently,
   * and nor can they have their own independent transaction scope.
   */
  contained?: Resource[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource and that modifies the
   * understanding of the element that contains it and/or the understanding
   * of the containing element's descendants. Usually modifier elements
   * provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the
   * definition and use of extensions. Though any implementer is allowed to
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension. Applications processing a
   * resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Business identifiers assigned to this procedure by the performer or
   * other systems which remain constant as the resource is updated and is
   * propagated from server to server.
   */
  identifier?: Identifier[];

  /**
   * The URL pointing to a FHIR-defined protocol, guideline, order set or
   * other definition that is adhered to in whole or in part by this
   * Procedure.
   */
  instantiatesCanonical?: string[];

  /**
   * The URL pointing to an externally maintained protocol, guideline,
   * order set or other definition that is adhered to in whole or in part
   * by this Procedure.
   */
  instantiatesUri?: string[];

  /**
   * A reference to a resource that contains details of the request for
   * this procedure.
   */
  basedOn?: Reference<CarePlan | ServiceRequest>[];

  /**
   * A larger event of which this particular procedure is a component or
   * step.
   */
  partOf?: Reference<Procedure | Observation | MedicationAdministration>[];

  /**
   * A code specifying the state of the procedure. Generally, this will be
   * the in-progress or completed state.
   */
  status: 'preparation' | 'in-progress' | 'not-done' | 'on-hold' | 'stopped' | 'completed' | 'entered-in-error' | 'unknown';

  /**
   * Captures the reason for the current state of the procedure.
   */
  statusReason?: CodeableConcept;

  /**
   * A code that classifies the procedure for searching, sorting and
   * display purposes (e.g. &quot;Surgical Procedure&quot;).
   */
  category?: CodeableConcept;

  /**
   * The specific procedure that is performed. Use text if the exact nature
   * of the procedure cannot be coded (e.g. &quot;Laparoscopic Appendectomy&quot;).
   */
  code?: CodeableConcept;

  /**
   * The person, animal or group on which the procedure was performed.
   */
  subject: Reference<Patient | Group>;

  /**
   * The Encounter during which this Procedure was created or performed or
   * to which the creation of this record is tightly associated.
   */
  encounter?: Reference<Encounter>;

  /**
   * Estimated or actual date, date-time, period, or age when the procedure
   * was performed.  Allows a period to support complex procedures that
   * span more than one date, and also allows for the length of the
   * procedure to be captured.
   */
  performedDateTime?: string;

  /**
   * Estimated or actual date, date-time, period, or age when the procedure
   * was performed.  Allows a period to support complex procedures that
   * span more than one date, and also allows for the length of the
   * procedure to be captured.
   */
  performedPeriod?: Period;

  /**
   * Estimated or actual date, date-time, period, or age when the procedure
   * was performed.  Allows a period to support complex procedures that
   * span more than one date, and also allows for the length of the
   * procedure to be captured.
   */
  performedString?: string;

  /**
   * Estimated or actual date, date-time, period, or age when the procedure
   * was performed.  Allows a period to support complex procedures that
   * span more than one date, and also allows for the length of the
   * procedure to be captured.
   */
  performedAge?: Age;

  /**
   * Estimated or actual date, date-time, period, or age when the procedure
   * was performed.  Allows a period to support complex procedures that
   * span more than one date, and also allows for the length of the
   * procedure to be captured.
   */
  performedRange?: Range;

  /**
   * Individual who recorded the record and takes responsibility for its
   * content.
   */
  recorder?: Reference<Patient | RelatedPerson | Practitioner | PractitionerRole>;

  /**
   * Individual who is making the procedure statement.
   */
  asserter?: Reference<Patient | RelatedPerson | Practitioner | PractitionerRole>;

  /**
   * Limited to &quot;real&quot; people rather than equipment.
   */
  performer?: ProcedurePerformer[];

  /**
   * The location where the procedure actually happened.  E.g. a newborn at
   * home, a tracheostomy at a restaurant.
   */
  location?: Reference<Location>;

  /**
   * The coded reason why the procedure was performed. This may be a coded
   * entity of some type, or may simply be present as text.
   */
  reasonCode?: CodeableConcept[];

  /**
   * The justification of why the procedure was performed.
   */
  reasonReference?: Reference<Condition | Observation | Procedure | DiagnosticReport | DocumentReference>[];

  /**
   * Detailed and structured anatomical location information. Multiple
   * locations are allowed - e.g. multiple punch biopsies of a lesion.
   */
  bodySite?: CodeableConcept[];

  /**
   * The outcome of the procedure - did it resolve the reasons for the
   * procedure being performed?
   */
  outcome?: CodeableConcept;

  /**
   * This could be a histology result, pathology report, surgical report,
   * etc.
   */
  report?: Reference<DiagnosticReport | DocumentReference | Composition>[];

  /**
   * Any complications that occurred during the procedure, or in the
   * immediate post-performance period. These are generally tracked
   * separately from the notes, which will typically describe the procedure
   * itself rather than any 'post procedure' issues.
   */
  complication?: CodeableConcept[];

  /**
   * Any complications that occurred during the procedure, or in the
   * immediate post-performance period.
   */
  complicationDetail?: Reference<Condition>[];

  /**
   * If the procedure required specific follow up - e.g. removal of
   * sutures. The follow up may be represented as a simple note or could
   * potentially be more complex, in which case the CarePlan resource can
   * be used.
   */
  followUp?: CodeableConcept[];

  /**
   * Any other notes and comments about the procedure.
   */
  note?: Annotation[];

  /**
   * A device that is implanted, removed or otherwise manipulated
   * (calibration, battery replacement, fitting a prosthesis, attaching a
   * wound-vac, etc.) as a focal portion of the Procedure.
   */
  focalDevice?: ProcedureFocalDevice[];

  /**
   * Identifies medications, devices and any other substance used as part
   * of the procedure.
   */
  usedReference?: Reference<Device | Medication | Substance>[];

  /**
   * Identifies coded items that were used as part of the procedure.
   */
  usedCode?: CodeableConcept[];
}

/**
 * Estimated or actual date, date-time, period, or age when the procedure
 * was performed.  Allows a period to support complex procedures that
 * span more than one date, and also allows for the length of the
 * procedure to be captured.
 */
export type ProcedurePerformed = Age | Period | Range | string;

/**
 * A device that is implanted, removed or otherwise manipulated
 * (calibration, battery replacement, fitting a prosthesis, attaching a
 * wound-vac, etc.) as a focal portion of the Procedure.
 */
export interface ProcedureFocalDevice {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * The kind of change that happened to the device during the procedure.
   */
  action?: CodeableConcept;

  /**
   * The device that was manipulated (changed) during the procedure.
   */
  manipulated: Reference<Device>;
}

/**
 * Limited to &quot;real&quot; people rather than equipment.
 */
export interface ProcedurePerformer {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Distinguishes the type of involvement of the performer in the
   * procedure. For example, surgeon, anaesthetist, endoscopist.
   */
  function?: CodeableConcept;

  /**
   * The practitioner who was involved in the procedure.
   */
  actor: Reference<Practitioner | PractitionerRole | Organization | Patient | RelatedPerson | Device>;

  /**
   * The organization the device or practitioner was acting on behalf of.
   */
  onBehalfOf?: Reference<Organization>;
}
