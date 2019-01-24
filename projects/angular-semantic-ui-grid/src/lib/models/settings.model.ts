import { Header } from "./header.model";

/**
 * The settings for the grid.
 *
 * @export
 */
export class Settings {
    /**
     * True if the grid allows the user to select a row.
     *
     * @memberof Settings
     */
    isSelectable: boolean;

    /**
     * True if the grid is able to be sorted.
     *
     * @memberof Settings
     */
    isSortable: boolean;

    /**
     * The maximum number of records to show per page.
     *
     * @memberof Settings
     */
    pageSize: number;

    /**
     * The page to display.
     *
     * @memberof Settings
     */
    page: number;

    /**
     * The total number of records based on the filters.
     *
     * @memberof Settings
     */
    maxCollectionSize: number;

    /**
     * The headers for each column.
     *
     * @memberof Settings
     */
    headers: Array<Header>;
}