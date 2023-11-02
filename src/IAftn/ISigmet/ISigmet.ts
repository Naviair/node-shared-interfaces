
export interface ISigmet extends ICancelSigmet {
  /** Required. This is an identifier of the series of sigmets. Will (usually) be one of the letters from the phonetic alphabet, eg. "ROMEO" or just the letter, eg. "U" */
  series: string;
  /** A four letter identifier of the Meteorological Watch Office */
  mwo: string;
  /** The body of the sigmet containing the actual information */
  body: string;
  /** If this sigmet cancels another one */
  cancelSigmet?: ICancelSigmet;
}

export interface ICancelSigmet {
  /** Optional. Series is optional as if only the index is provided, the sigmet cancels a previous sigmet in the same series */
  series?: string;
  /** This sigmet's index in the series */
  seriesIndex: number;
}
