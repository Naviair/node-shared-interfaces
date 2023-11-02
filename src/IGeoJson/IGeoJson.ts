export type TGeoPolygon = [number, number, number?];

export interface IGeoJSONFeaturePolygon {
	type: 'Polygon';
	coordinates: TGeoPolygon[][];
	//properties?: { [key: string]: string|Object }
}

export interface IGeoJSONFeaturePoint {
	type: 'Point';
	coordinates: TGeoPolygon;
	//properties?: { [key: string]: string|Object }
}

export interface IGeoJSONFeatureCollection {
	type: 'FeatureCollection';
	features: (IGeoJSONFeaturePoint | IGeoJSONFeaturePolygon)[];
}
