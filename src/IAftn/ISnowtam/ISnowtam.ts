
export interface ISnowtam {
  /** An array of runway conditions */
  runways: ISnowtamRwy[];
  /** Plain language remarks on taxi ways and gate conditions */
  apron?: string;
  /** Month, day, hour, minute of next observation in UTC. */
  nextPlannedObservation?: Date;
  /** Any remarks in plain language */
  remarks?: string;
}

export interface ISnowtamRwy {
  /** The runway identifier like "23L" */
  identifier?: string;
  /** The month, day, hour and minute this snowtam was issued in UTC. */
  dayTime?: Date;
  /** Cleared runway length if less than normal */
  clearedLength?: number;
  /** Cleared runway width if less than normal */
  clearedWidth?: number;
  /** Deposits (code: F and G) */
  deposits?: IDeposit;
  /** Will be of type IFriction */
  friction?: IFriction;
  /** If there are any snowbanks */
  snowbanks?: string;
  /** If any lights are affected  */
  rwyLights?: string;
  /** Format is loose so will just parse for a string */
  clearingStart?: string;
  /** Format is like clearingStart */
  clearingEnd?: string;
  /** Format is loose so will be parsed as string */
  taxiWays?: string;
  /** (GRF format only) */
  contaminantGroups?: IContaminantGroup[];
}

export interface IFriction {
  /** List of friction for each 1/3 of the runway */
  friction?: (number | string)[];
  /** Friction is single digit = estimated, double digit = measured */
  frictionMeasured?: boolean;
  /** A 3 letter abbreviation for the instrument */
  instrumentAbbreviation?: string;
  /** The 3 letter abbreviation translated */
  instrumentDescription?: string;
}

/** These are arrays as there will be 3 values - one for each 1/3 of the runway */
export interface IDeposit {
  /** The contamination code - either 'NIL' or 0-9 */
  code?: (number | string)[];
  /** The depth in mm or 'XX' if impossible to measure */
  depth?: (number | string)[];
  /** The code translated */
  description?: string[];
}

export interface IContaminantGroup {
  rwyConditionCode?: number;
  /** Percent coverage and NR if not reported */
  percentCoverages?: string | number;
  /** Depth of contaminent reported in rwyConditionCodes */
  depth?: string | number;
  description?: string;
}
