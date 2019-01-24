import { SortDirection } from "../enums/sortDirection.enum";

/**
 * The sort model.
 *
 * @export
 */
export class Sort {
    /**
     * The field being sorted.
     *
     * @memberof Sort
     */
    field: string;

    /**
     * The direction of the sort.
     *
     * @memberof Sort
     */
    direction: SortDirection
}