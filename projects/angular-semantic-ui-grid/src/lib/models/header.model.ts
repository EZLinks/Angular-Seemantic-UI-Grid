import { HeaderType } from "../enums/headerType.enum";
import { SortDirection } from "../enums/sortDirection.enum";

/**
 * The header for a column
 *
 * @export
 */
export class Header {
    /**
     * The friendly name to display in the column's header.
     *
     * @memberof Header
     */
    label: string;

    /**
     * The name of the property in grid's data.
     *
     * @memberof Header
     */
    field: string;

    /**
     * The type of header.
     *
     * @memberof Header
     */
    type: HeaderType;

    /**
     * The direction to sort column in.
     *
     * @memberof Header
     */
    sortDirection: SortDirection;

    /**
     * True if the column can be sorted on. 
     * Sorting must be enabled for the grid for this to be considered.
     *
     * @memberof Header
     * @default true
     */
    canSort: boolean = true;
}