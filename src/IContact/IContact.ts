import { IAddress } from '../';
export interface IContact {
    _id: string,
    name: string,
    address?: IAddress,
    phone?: { number: string, countryCode: string }[],
    mail?: string[],
    url?: string[]
}