import { GeocodeFeature } from '@mapbox/mapbox-sdk/services/geocoding';
import { IWeather, IWeatherWeek } from '../IWeather';

export type TGeoAddress = GeocodeFeature;
export type TGeoFlag = 'current' | 'forecast'

export interface IGeo<T = IWeather | IWeatherWeek> {
  address?: TGeoAddress | undefined;
  distance?: number | undefined;
  dsm?: number | undefined; //overflade højde
  dtm?: number | undefined; //terræn højde
  weather?: T;
  //zone: 'land' | 'city'
}
