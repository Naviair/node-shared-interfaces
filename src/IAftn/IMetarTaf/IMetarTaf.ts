import { IValidity } from '../IAftnCommonInterfaces';

export interface IMetar extends ICommonForecastProperties {
  	/** true/false (If the METAR is generated automatically or not) */
  	auto?: boolean;
  	/** 0-99 (celsius degrees) */
  	temp?: number;
  	/** 0-99 (celsius degrees) */
  	dewPoint?: number;
  	/** An array of the visual range of the runways */
  	rwysVisualRange?: IRwy[];
  	/** The weather right now */
  	currentWeather?: IMetarForecast;
  	/** The trend forecast */
  	trendForecast?: IMetarForecast;
  	/** 0-9999 (pressure in hectopascal) */
  	qnh?: number;
  	/** true/false (if the METAR has been corrected) */
  	corrected?: boolean;
}
export interface ITaf extends ICommonForecastProperties {
	/** An array of forecast periods in this taf */
  forecasts: ITafForecast[];
  /** The number of hours this taf forecast is valid for */
  validityPeriod: number;
  /** The date at which the forecast was issued (not necessarily the validity period) */
  forecastIssued?: Date;
}

export interface ICommonForecastProperties {
  /** Wind conditions */
  wind?: IWind;
  /** 0-9999 (Visibility in meters) or statue miles, i.e. P6SM */
  visibility?: string;
  /** true/false (if the visibility is valid for all directions or not. NDV = non directional visibility) */
  ndv?: boolean;
  /** Can be "TEMPO" og "BECMG" if this forecast is a change from earlier forecasts in the report */
  changeIndicator?: string;
  /** Array of clouds */
  clouds?: ICloud[];
  /** Vertical visibility in metar and taf */
  verticalVisibility?: number | ENA;
  /** The weather phenomenon */
  weather?: IWeatherDesc[];
  /** CAVOK means >10km visibility and no clouds of concern */
  cavok?: boolean;
  /** If NSW is reported, no severe weather  */
  nsw?: boolean;
  /** If NSC is reported, no significant clouds */
  nsc?: boolean;
}
export interface IMetarForecast extends ICommonForecastProperties {
  /** FMxxxx, TLxxxx and ATxxxx */
  periodType?: string;
}
export interface ITafForecast extends ICommonForecastProperties {
  /** Start and end date/time of this forecast expressed in same format as the general validity */
  validity: IValidity
  /** Can be "PROB30" or "PROB40" */
  prob?: EProb;
  /** If temperature ranges has been provided */
  temp?: ITemp[];
}

export interface IWeatherDesc {
  /** Array of 2 character strings (see MetarTafAbbreviations.ts) */
  abbreviation: string[];
  /** Array of strings for human-readable words of the abbreviations above */
  description: string[];
  /** + or - */
  intensitySymbol?: string;
  /** Description of the above symbol */
  intensityDescription?: string;
}

export interface ICloud {
  /** The three character code */
  cloudAmount: ECloudAmount | ENA;
  /** The description of the code */
  cloudAmountDescription: string;
  /** The code translated to a description */
  cloudAbbreviation: string;
  /** 0-999 The altitude of the cloud (multiply by 100 to get feet). Enum if slashes are used in observation to indicate the info is not available */
  cloudAltitude: number | ENA;
  /** The cloud type, 'CB' or 'TCU' or '/' */
  type?: ECloudTypes | ENA;
}

export interface IWind {
  /** 0-350 (Wind direction in either degrees (3 digits) or "VRB" variable) */
  dir?: number | string;
  /** 0-99 (Wind speed) */
  speed?: number;
  /** 0-99 (knots) */
  gusts?: number;
  /** If the wind direction is between two directions, this is the minimum angle */
  varDirMin?: number;
  /** The maximum angle */
  varDirMax?: number;
}

export interface IRwy {
  /** The runway identifier, eg. "21" or "12L" */
  identifier: string;
  /** The visual range of the rwy */
  visualRange?: number;
  /** If the visual range is more or less than specified above (caused by instruments) */
  plusMinus?: EPlusMinus;
  /** The trend ins visual range (U, D or V) */
  trend?: ERvrTrend;
  /** The trend described  */
  trendDescription?: string;
}

export interface ITemp {
  /** The temperature in degrees celsius */
  temp: number;
  /** Whether the temperature is a minimum or maximum */
  minMax: EMinMax;
  /** The hour this temperature is expected */
  hour?: number;
  /** The minute this temperature is expected */
  minute?: number;
}

export enum EMinMax {
  MIN,
  MAX,
}

export enum EProb {
  PROB30 = 30,
  PROB40 = 40,
}

export enum EPlusMinus {
  PLUS,
  MINUS,
}

export enum ERvrTrend {
  U = 'Upgoing',
  D = 'Downgoing',
  V = 'No distinct tendency',
}

export enum ECloudTypes {
  CB = 'Cumulonimbus',
  TCU = 'Towering Cumulus',
}

export enum ECloudAmount {
  FEW,
  SCT,
  BKN,
  OVC,
  SKC,
  CLR,
  NCD,
  NSC,
}

/*
  This enum is used where the report indicates that something cannot be measured. 
  It is NOT for lack of information from the report or errors in code, ONLY when the 
  report itself states that something is missing, eg. when "///" is used.

*/
export enum ENA {
  NA = 'Not available',
}
