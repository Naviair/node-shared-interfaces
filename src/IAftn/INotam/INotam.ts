import { TAftnContentType } from '../IAftn';

export type TLatLong = number[]
export type TNotamTypeDesc = {
    code: string,
    description: string
}

export type TNotamCoordinates = {latLng: TLatLong, radius?: number }
export interface INotam {
    header?: INotamHeader,
    qualification?: INotamQualification,
    schedule?: INotamSchedule,
    content?: INotamContent,
    limits?: INotamLimits,
    rawFields?: INotamSimple,
    geojson?: GeoJSON.Polygon | GeoJSON.Point
}

export interface INotamHeader {
    id?: string,
    series?: string,
    number?: string,
    year?: string,
    type?: TAftnContentType,
    typeDesc?: string,
    idToCancel?: string,
    idToReplace?: string,
    multiPartLetter?: string, // If this is a multi part notam, then the index of this notam is a letter (B = 2) out of total
    multiPartIndex?: number, // The index as a number (A = 1) 
    multiPartTotal?: number // The total number of messages this notam is divided into. Will be a number with leading zero
}

export interface INotamContent {
    text: string,
    area?: TNotamCoordinates[]
}

export interface INotamSchedule {
    activityStart: string | null,
    validityEnd: string | null,
    activityEstimated?: boolean,
    permanent?: boolean,
    estimated?: boolean,
    elements: string[],
    exceptions: string[]
}


export interface INotamQualification {
    line?: string,
    location?: string,
    code?: {
        code: string,
        entity?: string,
        status?: string,
        area?: string,
        subArea?: string,
        subject?: string,
        condition?: string,
        modifier?: string
    },
    traffic?: TNotamTypeDesc[],
    purpose?: TNotamTypeDesc[],
    scope?: TNotamTypeDesc[],
    coordinates?: TNotamCoordinates,
    limits?: {
        lower?: INotamLimitsDetails,
        upper?: INotamLimitsDetails
    }
}

export enum EAltitudeType {
    SFC = 'SFC',
    GND = 'GND',
    UNL = 'UNL',
    AGL = 'AGL',
    AMSL = 'AMSL'
}

export enum EAltitudeUnits {
    FT = 'FT',
    M = 'M',
    FL = 'FL'
}

export interface INotamLimitsDetails {
    type?: EAltitudeType,
    units?: EAltitudeUnits,
    altitude?: number
}

export interface INotamLimits {
    upper?: INotamLimitsDetails,
    lower?: INotamLimitsDetails
}


export enum ENotamFields {
    'q' = 'q',
    'a' = 'a',
    'b' = 'b',
    'c' = 'c',
    'd' = 'd',
    'e' = 'e',
    'f' = 'f',
    'g' = 'g' 
}

export interface INotamSimple {
    [key:string]: string
}
