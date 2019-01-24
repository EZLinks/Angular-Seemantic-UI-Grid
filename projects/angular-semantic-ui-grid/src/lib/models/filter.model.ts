import { Header } from "./header.model";
import { SortDirection } from "../enums/sortDirection.enum";

/**
 * A header filter
 */
export class Filter {
    /**
     * The header being filtered.
     *
     * @memberof Filter
     */
    header: Header;

    /**
     * The direction to sort in.
     *
     * @memberof Filter
     */
    direction: SortDirection;

    /**
     * The value to filter by.
     *
     * @memberof Filter
     */
    value: any;
}