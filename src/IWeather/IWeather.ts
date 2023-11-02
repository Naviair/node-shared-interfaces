
export enum EWeatherIcon {
    '01d' = 'sun', //Clear sky day
	'01n' = 'moon-stars', //Clear sky night
	'02d' = 'cloud-sun', //Few clouds day
	'02n' = 'cloud-moon', //Few clouds night
	'03n' = 'cloud', //Scattered clouds day
	'03d' = 'cloud', //Scattered clouds night
	'04d' = 'clouds', //Broken clouds day
	'04n' = 'clouds', //Broken clouds night
	'09d' = 'cloud-showers-heavy', //Shower rain day
	'09n' = 'cloud-showers-heavy', //Shower rain night
	'10d' = 'cloud-sun-rain', //Rain  day
	'10n' = 'cloud-moon-rain', //Rain  night
	'11d' = 'thunderstorm', //Thunderstorm day
	'11n' = 'thunderstorm', //Thunderstorm night
	'13d' = 'cloud-snow', //Snow day
	'13n' = 'cloud-snow', //Snow night
	'50d' = 'smog', //Fog/mist day
	'50n' = 'smog', //Fog/mist night
}

export enum EMonth {
    'januar' = 0,
    'februar' = 1,
    'marts' = 2,
    'april' = 3,
    'maj' = 4,
    'juni' = 5,
    'juli' = 6,
    'august' = 7,
    'september' = 8,
    'oktober' = 9,
    'november' = 10,
    'december' = 11
}

type TWeather = {
    id: number,
    main: string,
    description: string,
    icon: keyof typeof EWeatherIcon,
}

type TTemp = {
    day: number,
    night: number,
    eve: number,
    morn: number
}

export interface IDailyWeather extends IGeneralWeather {
    sunrise: number,
    sunset: number,
    moonrise: number,
    moonset: number,
    moon_phase: number,
    temp: TTemp & { min: number, max: number},
    feels_like: TTemp,
    pop: number,
    rain: number,
}

interface IGeneralWeather {
    dt: number,
    pressure: number,
    humidity: number,
    dew_point: number,
    uvi: number,
    clouds: number,
    visibility: number,
    wind_speed: number,
    wind_deg: number,
    wind_gust: number,
    weather: TWeather[]
}

interface ICurrentWeather extends IGeneralWeather {
    feels_like: number,
    temp: number,
    sunrise: number,
    sunset: number,
}

interface IHourlyWeather extends IGeneralWeather {
    feels_like: number,
    temp: number,
    pop: number,
    rain?: {'1h': number},
}

// Weather for 7 day API
export interface IWeatherWeek {
    lat: number,
    lon: number,
    timezone: string,
    timezone_offset: number,
    current: ICurrentWeather,
    minutely: {dt: number, precipitation: number}[],
    hourly: IHourlyWeather[],
    daily: IDailyWeather[]
}


// Weather for 1 day API
export interface IWeather {
    base: string,
    clouds: {all: number},
    cod: number,
    coord: {lon: number, lat: number}
    dt: number
    id: number
    main:{
        feels_like: number,
        humidity: number
        pressure: number,
        temp: number,
        temp_max: number,
        temp_min: number,
    }
    name: string,
    sys: {
        type: number,
        id: number,
        country: string,
        sunrise: number,
        sunset: number,
    },
    timezone: number,
    visibility: number,
    weather: TWeather[],
    wind: {
        speed: number,
        deg: number
    }
}