import { Header } from "./header.model";

/**
 * Information needed for a select header.
 *
 * @export
 */
export class SelectHeader extends Header {
    /**
     * The options in the drop down on the header.
     *
     * @memberof SelectHeader
     */
    options: Array<any>;

    /**
     * The field to be used as the label in the drop down.
     *
     * @memberof SelectHeader
     */
    optionLabel: string;

    /**
     * The field to be used as the id in the drop down.
     *
     * @memberof SelectHeader
     */
    optionId: string;

    /**
     * The text to display if no option has been selected.
     *
     * @memberof SelectHeader
     */
    placeholder: string;
}