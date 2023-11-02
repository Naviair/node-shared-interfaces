import { IconName } from '@fortawesome/fontawesome-svg-core';
import { ITranslation, IPage } from './';
import { IDocument } from './IDocument';

export type TDomain = {
	hostname: string;
	createdAt: number;
	updatedAt?: number;
	deleted?: number;
};

export type TSettingsMapType = {
	index: number;
	url: string;
	translation: string;
};

export type TSettingsMapTileset = {
	id: string;
	layer: string;
	clickable?: boolean;
	visible?: boolean;
	layerType?: string;
	fill?: boolean;
};

export type TSettingsMapLayer = {
	index: number;
	name: string;
	img: string;
	tilesetGroups: TSettingsMapLayerGroup[];
};

type TSettingsMapLayerGroup = {
	name: string;
	iconType: 'circle' | 'line';
	color: string;
	border: string;
	fill: boolean;
	description: {
		[key: string]: string;
	};
	tilesets: { id: string; toggleable: boolean }[];
};

export type TSettingsMapTilesets = {
	[key: string]: {
		[key: string]: TSettingsMapTileset;
	};
};

export type TSettingsAppCookie = {
	name: string;
	type: 'necessary' | 'functionality' | 'statistics' | 'marketing';
	sender: string;
	description: string;
	expire: {
		number?: number;
		type: 'session' | 'months' | 'days' | 'minutes';
	};
};

/**
 * This interface is generic. Can be implemented as custom types to limit the possible icon types.
 */
export type TSettingsAppMenu = {
	name: string;
	title: string;
	/**
	 * May be a string reference or extended to a custom type such as IconName from fontawesome.
	 * @default string
	 */
	icon: IconName;
	tooltip?: string;
	link: string;
	external: boolean;
};

export type TSettings = {
	mapbox: {
		apiKey: string;
		defaultGeolocation: {
			latitude: number;
			longitude: number;
		};
		searchCountries: string[];
		bounds?: mapboxgl.LngLatBoundsLike;
		center?: mapboxgl.LngLatLike;
		zoom?: number;
	};
	map: {
		types: TSettingsMapType[];
		tilesets: TSettingsMapTilesets;
		layers: TSettingsMapLayer[];
	};
	app: {
		documents: {
			[key: string]: {
				disclaimer: string;
				acceptTerms: string;
				cookieTerms: string;
				userTerms: string;
				dataSources: string;
				cookiesNecessary: string;
				cookiesMarketing: string;
				cookiesStatistical: string;
				cookiesFunctional: string;
			};
		};
		cookies: TSettingsAppCookie[];
		menu: TSettingsAppMenu[];
		startupNotification?: TStartupNotification;
	};
};

export type TStartupNotification = {
	/** Title in notification POPUP */
	title: string;
	/** Detailed text shown as description in POPUP, this should be as HTML */
	description: string;
	/** Duration of how long the information will be shown in second, when set to 0 it will never close automaticly */
	duration: number;
	/** Active flag, set to true/false */
	active: boolean;
	/** Unix timestamp when the current notification should not be shown anymore */
	expire?: number;
};

export type TMaintenence = {
	active: boolean;
	title: string;
	subtitle: string | string[];
};

export interface IConfiguration {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	_id: string;
	name: string;
	active: boolean;
	maintenence?: TMaintenence;
	description: string;
	domains: TDomain[];
	languages: string[];
	settings: TSettings;
	translations: {
		[key: string]: ITranslation;
	};
	pages: {
		[key: string]: {
			[key: string]: IPage;
		};
	};
	documents: {
		[key: string]: IDocument;
	};
}
