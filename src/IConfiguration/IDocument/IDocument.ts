import { IconName } from '@fortawesome/fontawesome-svg-core';

export interface IDocumentHtml {
	title?: string;
	data: string;
}

export interface IDocumentPdf {
	/** Any additional title different from the one defined in IDocument*/
	title?: string;
	/**
	 * Binary string representation of PDF data, starts with "JVBER"...
	 */
	data: string;
}

type TDocumentTableColumn = {
	index: string;
	title: string;
	textAlign?: 'left' | 'center' | 'right';
};

export type TDocumentTableRow = {
	[index: string]: number | string;
};

export interface IDocumentTable {
	title?: string;
	columns: TDocumentTableColumn[];
	rows: TDocumentTableRow[];
}

type TDocumentCollapseData = {
	title: string;
	details: string;
};

export interface IDocumentCollapse {
	title?: string;
	data: TDocumentCollapseData[];
}

/**
 * ## IFormInput
 */
export interface IFormInput {
	/* Set field required */
	required: boolean;
	/* The inputID of the element. Will also serve as the property ID in the resulting object. */
	inputId: string;
	/* Placeholder string for the input field */
	placeholder: string;
	/* Prefix icon to display for input field. Should be manually added to library. */
	prefixIcon?: IconName;
	/* The error message to display when field is not correctly defined */
	onInputErrorMessage?: string;
	/* Set autofocus on particular input field once accessible */
	autoFocus?: boolean;
	/* The input type. Currently only supported is email. For anything else should be undefined. Can be extended */
	inputType?: 'string' | 'number' | 'boolean' | 'method' | 'regexp' | 'integer' | 'float' | 'object' | 'enum' | 'date' | 'url' | 'hex' | 'email';
	/* Active prefix string to be displayed at beginning of the input field. */
	addonBefore?: string;
}

/**
 *  ## IDocumentForm
 */
export interface IDocumentForm {
	/* The application form title */
	title: string;
	/* Email information object. Optional, if email should be supported as form submit result. */
	email?: {
		/* Send email to */
		to: string;
		/* Send email from */
		from: string;
		/* Email subject */
		subject: string;
		/* Optional field with email to replyTo */
		replyTo?: string;
	};
	/* SubmitButton Text */
	submitButtonText: string;
	/* Input fields for application form */
	input: IFormInput[];
	/* Success message text field, on success when application form is successfully processed. Subtitle optional */
	onFormSuccessMessage: { title: string; subtitle?: string };
	/* Error message text field, on error when application form is not successfully processed. Subtitle optional */
	onFormErrorMessage: { title: string; subtitle?: string };
}

/**
 * This interface is generic. Can be implemented as custom types to limit the possible icon types.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface IDocument<TypeIcon = string> {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	_id: string;
	title: string;
	/**
	 * May be a string reference or extended to a custom type such as IconName from fontawesome.
	 * @default string
	 */
	icon?: TypeIcon;
	lastUpdated: number;
	language: string;
	configurations: string[];
	content: { html?: IDocumentHtml; table?: IDocumentTable; collapse?: IDocumentCollapse; form?: IDocumentForm; pdf?: IDocumentPdf }[];
}
