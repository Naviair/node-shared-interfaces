import { IEquipment } from '../';

export enum EOperationStatus {
  DRAFT = 'DRAFT',
  PLANNED = 'PLANNED',
  HISTORIC = 'HISTORIC',
}

export interface IOperationDetails {
  name: string;
  status: EOperationStatus;
  created: Date
  lastUpdated?: Date // If undefined, object was not updated.
  deleted?: Date // If undefined, object is not deleted.
  period: {
    startDate: Date;
    endDate: Date;
  };
  purpose: string,
  equipment: IEquipment[];
  notes?: string;
}

export interface IOperation extends IOperationDetails {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  _id?: string;
  geoData?: IOperationGeoData;
}

export interface IOperationGeoData extends GeoJSON.FeatureCollection {
  features: IOperationGeoDataFeature[];
}

export enum EOperationGeoDataFeatureType {
  FLIGHTZONE = 'FLIGHTZONE',
  BUFFER = 'BUFFER',
  TAKEOFF_LANDING = 'TAKEOFF_LANDING',
  EMERGENCY = 'EMERGENCY',
  GROUND_RISK = 'GROUND_RISK',
  OTHER = 'OTHER',
}

export enum EHeightType {
  AMSL = 'AMSL',
  AGL = 'AGL',
}

export type THeight = {
  height: number;
  type: EHeightType;
};

export interface IOperationGeoDataFeature extends GeoJSON.Feature {
  properties: IOperationGeoDataFeatureProperties;
}

export interface IOperationGeoDataFeatureProperties {
  name?: string;
  type?: EOperationGeoDataFeatureType;
  color?: string;
  minHeightValue?: number,
  minHeightType?: EHeightType,
  maxHeightValue?: number,
  maxHeightType?: EHeightType,
  notes?: string;
  circleRadius?: number;
}
