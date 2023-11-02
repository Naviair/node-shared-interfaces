export type TPriorityIndicator = 'SS' | 'DD' | 'FF' | 'GG' | 'KK';

/**
 * The header of an AFTN message is 3 lines before the message body in the TAC format.
 */
export interface IAftnHeader {
	/** Non-unique identifier including the connection and an incrementing number, eg. "EWX001". Rolls over after 999. */
	transmissionIdentification?: string;
	/** The timestamp where the DCG system delivered the message to us. Expressed in the format DDHHMM. */
	dayTimeReceivedUTC?: string;
	/** The priority of the message. Standard is GG. @see TPriorityIndicator */
	priorityIndicator?: TPriorityIndicator;
	/** A list of addressees of the message with a 8 letter code */
	addresseeOfMessage?: string[];
	/** The time of origin of the message expressed in the DDHHMM format. This field is independent of crashes and delays! */
	dayTimeOfMessageUTC?: string;
	/** The address from where the message was sent. */
	originatorOfMessage?: string;
	error?: string;
}
