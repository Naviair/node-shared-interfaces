/** The types of AFTN content. */
export type TAftnContentType =
	| 'FPL'
	| 'NOTAMN'
	| 'NOTAMR'
	| 'NOTAMC'
	| 'SNOWTAM'
	| 'TAF COR'
	| 'TAF AMD'
	| 'TAF'
	| 'METAR COR'
	| 'METAR'
	| 'SIGMET'
	| 'AIREP SPECIAL'
	| 'AIREP'
	| 'SPECI COR'
	| 'SPECI'
	| 'UNKNOWN';

export interface IAftnContent {
	type?: TAftnContentType;
	contentHeader?: IContentHeader;
	content?: string;
	error?: string;
}

// This is the header found in METAR, TAF, SPECI, SIGMET and other messages. Found on the 4th line of the message.
export interface IContentHeader {
	/** The two-letter type of the message. See ICAO Doc 4444 chapter 11 */
	type: string,
	/** The content type derived from the 'type' proterty */
	contentType: TAftnContentType,
	/** The country that the message is relevant for (DN = Denmark, GL = Greenland, US = USA) */
	country: string,
	/** The list number that the message was received from. Consists of two individual numbers */
	list: number,
	/** The location of the sender office. Often the same place for the whole country. Eg. always EKCH for Denmark */
	senderLocation: string 
}