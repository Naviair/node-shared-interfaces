
import { INotam, ISigmet, IAirep, ISnowtam, ITaf, IMetar, IAftnMessage } from '../../';

// eslint-disable-next-line @typescript-eslint/naming-convention
export type TAftnReponseType<T> = {type: string, data: IAftnMessage<T>[]};

export type TAftnResponse = [
	TAftnReponseType<IAirep>,
	TAftnReponseType<ITaf>,
	TAftnReponseType<IMetar>,
	TAftnReponseType<INotam>,
	TAftnReponseType<ISnowtam>,
	TAftnReponseType<ISigmet>,
]

export enum EAftnReponse {
	AIREP = 0,
	TAF = 1,
	METAR = 2,
	NOTAM = 3,
	SNOWTAM = 4,
	SIGMET = 5
}