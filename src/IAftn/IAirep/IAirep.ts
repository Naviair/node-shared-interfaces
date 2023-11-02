export interface IAirep {
  airepType: EAirepType;
  /**Hour and minute of observation */
  timeObserved: Date;
  /**The flight level when observed */
  flightLevel?: IFlightLevel;
  /**The body of the airep (the last line) */
  body: string;
}

export interface IFlightLevel {
  /**Set if only one height is specified */
  level?: number;
  /**Lower number of the two heights */
  levelMin?: number;
  /** Higher number of the two heights */
  levelMax?: number;
}

export enum EAirepType {
  AIREP = 'AIREP',
  AIREP_SPECIAL = 'AIREP SPECIAL',
}
