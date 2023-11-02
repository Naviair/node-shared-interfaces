import { INotam, IMetar, ITaf, ISigmet, ISnowtam, IAirep, TAftnContentType } from '../';
import { FeatureCollection } from 'geojson';
/*
    This interface is for common interfaces used by the aftn-message-parser. 
    It is common components like IDateTime and other trivial components. 
    These interfaces are intended to be used by IAirep, INotam, IMetar, ITaf, ISigmet and ISnowtam
*/
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface IAftnMessage<T = INotam | IMetar | ITaf | IAirep | ISigmet | ISnowtam> {
	type: TAftnContentType;
	receivedDateTime?: Date /** Is set by dcg-broker so shall not be set by parsers */;
	rawInput: string;
	icao?: string;
	fir?: string;
	parsedMessage: T;
	validity?: IValidity;
	errors?: string[] /** An array of errors */;
}

export interface IValidity {
	start?: Date;
	end?: Date;
}

// A type containing all types of Aftn messages eg. for use in dcg-broker for responses
export type TAftnTypes = INotam | IMetar | ITaf | IAirep | ISigmet | ISnowtam;

/**
 * An object of notam zones separated into active, inactive, awareness and disabled.
 * Active: The zone is active right now
 * Inactive: The zone will get active during this day
 * Awareness: The zone is active and does require attention while flying, but does not restrict flying
 * Disabled: The zone is not active nor will get this day (often EK D and EK R areas)
 */
export interface INotamReturnZones {
	[key: string]: FeatureCollection;
	active: FeatureCollection;
	inactive: FeatureCollection;
	awareness: FeatureCollection;
	disabled: FeatureCollection;
}
