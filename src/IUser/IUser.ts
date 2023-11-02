import { IEquipment, IOperation } from '../';

export interface IUser {
    _id: string,
    name: string,
    email: string,
    /**
     * Country code
     */
    phoneExt?: string,
    phone?: string,
    equipment?: IEquipment[],
    operations?: IOperation[]
}