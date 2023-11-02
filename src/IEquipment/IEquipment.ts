
export enum EEquipmentType {
    DRONE = 'DRONE',
    TRACKER = 'TRACKER',
    CONTROLLER = 'CONTROLLER',
    OPERATOR = 'OPERATOR'
    //RELATION
}

export enum EEquipmentDroneType {
    MULTI_ROTOR = 'MULTI_ROTOR',
    FIXED_WING = 'FIXED_WING',
    SINGLE_ROTOR = 'SINGLE_ROTOR',
    FIXED_WING_HYBRID = 'FIXED_WING_HYBRID'
}

export enum EEquipmentDroneWeight {
    LEGACY_000_005 = 'LEGACY_00_05',
    LEGACY_005_020 = 'LEGACY_05_20',
    LEGACY_020_250 = 'LEGACY_020_250',
    C0 = 'C0',
    C1 = 'C1',
    C2 = 'C2',
    C3 = 'C3'
}

export enum EEquipmentOperatorCertificate {
    A1_A3 = 'A1_A3',
    A2 = 'A2',
    STS_01 = 'STS_01',
    STS_02 = 'STS_02',
    DK_STS_03 = 'DK_STS_03'
}


export type TEquiment<T = IEquipmentDrone | IEquipmentController | IEquipmentTracker | IEquipmentOperator> = T; 

export interface IEquipment {
    _id?: string,
    name: string,
    type: EEquipmentType,
    created: Date
    lastUpdated?: Date // If undefined, object was not updated.
    deleted?: Date // If undefined, object is not deleted.
    //relationId?: string, //'673246237862634~7382974398247'
    sn?: string,
    manufacturer?: string,
    model?: string,
    notes?: string,
    /*
    permissions?: [
        {uid: string, permission: 'READ', 'WRITE'}
    ]*/
}

export interface IEquipmentDrone extends IEquipment {
    droneType: EEquipmentDroneType,
    droneWeight: EEquipmentDroneWeight
}

export enum EEquipmentTrackerType {
    ADS_B = 'ADS_B',
    FLARM_OGN = 'FLARM_OGN',
    REMOTE_ID = 'REMOTE_ID',
    OTHER = 'OTHER'
}

export interface IEquipmentTracker extends IEquipment {
    trackerType: EEquipmentTrackerType,
    trackerId?: string,
    icaoAddress?: string,
    callSign?: string
}

export interface IEquipmentOperator extends Omit<IEquipment, 'sn' | 'manufacturer' | 'model'> {
    phone?: string,
    certificateId?: string,
    certificates?: EEquipmentOperatorCertificate[],

}

export type IEquipmentController = IEquipment