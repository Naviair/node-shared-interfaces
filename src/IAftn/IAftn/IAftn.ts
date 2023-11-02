import { IAftnContent, IAftnHeader } from './';

export interface IAftn {
	header?: IAftnHeader;
	content?: IAftnContent;
	errors?: string[];
}
