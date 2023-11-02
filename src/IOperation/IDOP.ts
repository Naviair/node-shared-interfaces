import { TEquipment, EEquipmentOperatorCertificate } from '../IEquipment/IDOPEquipment';

export interface IOperation {
	_id: string;
	status: EOperationStatus;
	created: Date;
	deleted?: Date;
	description: IOperationDescription;
	timetable: ITimeTable[];
	equipment: TEquipment[];
	operator: IOperationOperator;
	areaPlan: IOperationPlanArea;
	approval?: IOperationApprovalState;
}

export interface IExecutingPhase {
	status: EExecutingPhaseStatus;
	lastUpdate: Date;
	telemetry: IExecutingEvent[];
}

export interface IExecutingEvent<T = Object> {
	type: EExecutingEventTypes;
	time: Date;
	message: string;
	details?: string;
	data?: T;
}

export enum EExecutingEventTypes {
	TELEMETRY_EVENT = 'TELEMETRY_EVENT',
	AIRCRAFT_EVENT = 'AIRCRAFT_EVENT',
	ATM_EVENT = 'ATM_EVENT',
	DRONE_EVENTS = 'DRONE_EVENTS',
	DRONE_PILOT_EVENT = 'DRONE_PILOT_EVENT',
}

export enum EExecutingPhaseStatus {
	PENDING = 'PENDING',
	LANDING = 'LANDING',
	GROUNDED = 'GROUNDED',
	AIRBORNE = 'AIRBORNE',
	OPERATION_END = 'OPERATION_END',
}

export interface IOperationApprovalState {
	condition?: string;
	approvalStatus: EOperationApprovalStatus;
	authorities: IApprovalAuthority[];
}

export enum EOperationApprovalStatus {
	PENDING = 'PENDING',
	REVIEW = 'REVIEW',
	APPROVED = 'APPROVED',
	REJECTED = 'REJECTED',
}

export interface IApprovalAuthority {
	name: string;
	contact: IContactDetails;
	sla: Date;
	status: EOperationApprovalStatus;
	feedback: IAuthorityFeedback[];
}

export interface IAuthorityFeedback {
	date: Date;
	message: string;
}

export interface IContactDetails {
	firstName: string;
	lastName: string;
	address: string;
	zip: number;
	phoneNumber: number;
	email: string;
}

export interface IOperationOperator {
	pilots: IOperationPilot[];
	contact: IOperationOperatorContact;
}

export interface IOperationOperatorContact extends IContactDetails {
	cvr?: number;
	insurance?: string;
}

export interface IOperationPilot {
	contact: IContactDetails;
	certificateId: string;
	certificates?: EEquipmentOperatorCertificate[];
}

export enum EOperationStatus {
	DRAFT = 'DRAFT',
	READY_FOR_REVIEW = 'READY_FOR_REVIEW',
	IN_REVIEW = 'IN_REVIEW',
	APPROVED = 'APPROVED',
	REJECTED = 'REJECTED',
	HISTORIC = 'HISTORIC',
}

export interface IOperationDescription {
	name: string;
	purpose: TOperationPurpose;
	type: EOperationType;
	permits?: IPermits[];
	notes?: string;
	priority?: string;
}

// todo - change to interface and move all props to db
export type TOperationPurpose =
	| 'Aerial Photography'
	| 'Agriculture & Farming'
	| 'Commercial, Industrial & Construction'
	| 'Drone Racing & Sports'
	| 'Entertainment & Light Shows'
	| 'Aerial Delivery & Shipping'
	| 'Filming & Movies'
	| 'Hunting Support'
	| 'Inspection'
	| 'News & Journalism'
	| 'Military & Armed Forces'
	| 'Mapping Applications'
	| 'Medical & Emergency'
	| 'Police & Law Enforcement'
	| 'Human Passenger Carrying'
	| 'Real Estate Photography'
	| 'Hobby & Fun'
	| 'Land Surveying'
	| 'Surveillance & Monitoring'
	| 'Search & Rescue Operation'
	| 'Sports Aerial Coverage'
	| 'Weather Forecasting & Monitoring'
	| 'Wildlife Monitoring';

export interface IPermits {
	title: string;
	author: IContactDetails;
	date: {
		issued: Date;
		expiration: Date;
	};
	note: string;
}

export enum EOperationType {
	VLOS = 'VLOS',
	BVLOS = 'BVLOS',
	EVLOS = 'EVLOS',
}

export interface ITimeTable {
	startDate: Date;
	endDate: Date;
	executingPhase?: IExecutingPhase;
}

export interface IOperationPlanArea {
	areas: IOperationAreas;
	flightPlan: IOperationFlightPath;
}

export interface IOperationAreas extends GeoJSON.FeatureCollection {
	type: 'FeatureCollection';
	features: IOperationGeoDataFeature[];
}

/**
 * Operation Flight Path.
 * Is a GeoJSON Feature Collection consisting of 3 GeoJSON Features types:
 * - START_POSITION: GeoJSON Point
 * - END_POSITION: GeoJSON Point
 * - FLIGHT_PATH: GeoJSON Multiline String
 */
interface IOperationFlightPath extends Omit<GeoJSON.FeatureCollection, 'features'> {
	type: 'FeatureCollection';
	features: [
		{
			type: 'Feature';
			geometry: GeoJSON.Point;
			properties: {
				type: 'START_POSITION';
			};
		},
		{
			type: 'Feature';
			geometry: GeoJSON.Point;
			properties: {
				type: 'END_POSITION';
			};
		},
		{
			type: 'Feature';
			geometry: GeoJSON.LineString;
			properties: {
				type: 'FLIGHT_PATH';
			};
		}
	];
}

export interface IOperationGeoDataFeature extends GeoJSON.Feature {
	properties: IOperationGeoDataFeatureProperties;
}

export interface IOperationGeoDataFeatureProperties {
	name?: string;
	type: EOperationGeoDataFeatureType;
	altitude?: {
		minHeightValue?: number;
		minHeightType?: EHeightType;
		maxHeightValue?: number;
		maxHeightType?: EHeightType;
	};
	notes?: string;
}

export enum EOperationGeoDataFeatureType {
	FLIGHT_ZONE = 'FLIGHT_ZONE',
	BUFFER = 'BUFFER',
	TAKEOFF_LANDING = 'TAKEOFF_LANDING',
	EMERGENCY = 'EMERGENCY',
	GROUND_RISK = 'GROUND_RISK',
	OTHER = 'OTHER',
}

export enum EHeightType {
	AMSL = 'Height Above Mean Sea Level',
	AGL = 'Height Above Ground Level',
}
