export enum EGribNodeErrors {
	UNKNOWN = 1,
	CONNECT_EVENTHUB,
	DOWNLOAD_BLOB,
	SEND_TO_EVENTHUB,
	SEND_SNMP_MESSAGE,
	EVENTHUB_ERROR_EMITTER,
	EVENTHUB_CONSUMER_START,
	FAILED_UPLOADING_LAST_FILES_UPDATE_TXT,
	PRODUCER_START,
}
