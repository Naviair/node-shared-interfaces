import { IGeoJSONFeaturePoint, IGeoJSONFeaturePolygon } from '../IGeoJson';

export interface INotamZone {
	_id?: string;
	name: string;
	description?: string;
	searchstring?: string;
	type: 'RESTRICTED' | 'DANGER' | 'PROHIBITED';
	geoData: IGeoJSONFeaturePolygon;
	geoCenter: IGeoJSONFeaturePoint;
}
