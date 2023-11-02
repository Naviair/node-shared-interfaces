import { IGeoJSONFeaturePolygon } from '../IGeoJson';
import { IAddress, IContact, ILatLng } from '../';

export interface ITile {
    _id: string,
    title: string,
    description?: string,
    address?: IAddress,
    url?: string,
    notamId?: string,
    typeId: string,
    contacts?: string[], //Array of contacts
    geoData?: IGeoJSONFeaturePolygon,
    geoGenerateData?: ILatLng
}

export interface ITileExt extends ITile {
    contactsData: IContact[]
}