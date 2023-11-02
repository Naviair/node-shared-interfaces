export interface IEquipment<T extends EEquipmentType> {
	_id?: string;
	type: T;
	name: string;
	created: Date;
	lastUpdated?: Date; // If undefined, object was not updated.
	deleted?: Date; // If undefined, object is not deleted.
	serialNumber?: string;
	manufacturer?: string;
	model?: string;
	notes?: string;
}

export enum EEquipmentType {
	DRONE = 'DRONE',
	TRACKER = 'TRACKER',
	CONTROLLER = 'CONTROLLER',
}

export interface IEquipmentDrone extends IEquipment<EEquipmentType.DRONE> {
	droneType: EEquipmentDroneType;
	droneWeight: EEquipmentDroneWeight;
}

export interface IEquipmentTracker extends IEquipment<EEquipmentType.TRACKER> {
	trackerType: EEquipmentTrackerType;
	trackerId?: string;
	icaoAddress?: string;
	callSign?: string;
}

export interface IEquipmentController extends IEquipment<EEquipmentType.CONTROLLER> {}

export enum EEquipmentDroneType {
	MULTI_ROTOR = 'MULTI_ROTOR',
	FIXED_WING = 'FIXED_WING',
	SINGLE_ROTOR = 'SINGLE_ROTOR',
	FIXED_WING_HYBRID = 'FIXED_WING_HYBRID',
}

export enum EEquipmentDroneWeight {
	LEGACY_000_005 = 'LEGACY_00_05',
	LEGACY_005_020 = 'LEGACY_05_20',
	LEGACY_020_250 = 'LEGACY_020_250',
	C0 = 'C0',
	C1 = 'C1',
	C2 = 'C2',
	C3 = 'C3',
}

export enum EEquipmentTrackerType {
	ADS_B = 'ADS_B',
	FLARM_OGN = 'FLARM_OGN',
	REMOTE_ID = 'REMOTE_ID',
	OTHER = 'OTHER',
}

export enum EEquipmentOperatorCertificate {
	A1_A3 = 'A1_A3',
	A2 = 'A2',
	STS_01 = 'STS_01',
	STS_02 = 'STS_02',
	DK_STS_03 = 'DK_STS_03',
}

/**
 * Primary Equipment Type used to describe operator equipment.
 * Use generic <T extends EEquipmentType> to describe the equipment type.
 */
export type TEquipment = IEquipmentDrone | IEquipmentTracker | IEquipmentController;
