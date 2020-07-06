/**
 * Enum with router URL parameters.
 * @readonly
 * @enum {string}
 */
export enum RouterParameters {
  ID = ":id?",
  ITEM_ID = "/:itemId",
  CREATE = "/create",
  EDIT = "/edit",
  PERMISSION = "/permission",
}

/**
 * Tab params
 */
export type TabParams<T> = {
  id: string;
  tab: T;
  itemId: string;
};

/**
 * Details params
 */
export type DetailsParams = {
  id: string;
  itemId?: string;
};
