/**
 * This interface is generic. Can be implemented as custom types to limit the possible icon types.
 */
export interface IPageData<TypeIcon = string> {
  /**
   * May be a string reference or extended to a custom type such as IconName from fontawesome.
   * @default string
   */
  icon?: TypeIcon;
  title?: string;
  documentId: string;
}

/**
 * This interface is generic for the `data` field, leading to {@link IPageData.icon}.
 *
 * May have a reference type like IconName from fontawesome.
 *
 * @param {string} TypeIPageDataIcon
 * @template {string} TypeIPageDataIcon
 */
export interface IPage<TypeIPageDataIcon = string> {
  _id: string;
  configurations: string[];
  name: string;
  language: string;
  data: IPageData<TypeIPageDataIcon>[];
}
