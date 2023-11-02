import { EGribAzfunErrors } from './codes/EGribAzfunErrors';
import { EGribNodeErrors } from './codes/EGribDockerErrors';
import { ESystem } from './ESystems';

/**
 * Generate an error code from a system and a message. Returned in the format: E-xx-xxxx
 * Should only be used with messages sent through the SNMP protocol.
 * There is no correlation check between provided code and system, which is problematic, but TS does not support a smart way of implementing this.
 * @param system The system, eg. Azfun for GRIB
 * @param code The error code specific for the system
 * @returns
 */
export const errorCode = (system: ESystem, code: TErrorCodes): string => {
	const systemNum = String(system).padStart(2, '0');
	const errorNum = String(code).padStart(4, '0');
	return `E${systemNum}-${errorNum}`;
};

// The type is generated from the list of systems and their associated codes
export type TErrorCodes = EGribAzfunErrors | EGribNodeErrors;
