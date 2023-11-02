import { IGeoJSONFeatureCollection } from '../IGeoJson';

export interface IBriefingNotamZones {
	active: IGeoJSONFeatureCollection;
	inactive: IGeoJSONFeatureCollection;
	awareness: IGeoJSONFeatureCollection;
	lighting: IGeoJSONFeatureCollection;
	obstacle: IGeoJSONFeatureCollection;
	uncategorized: IGeoJSONFeatureCollection;
}
