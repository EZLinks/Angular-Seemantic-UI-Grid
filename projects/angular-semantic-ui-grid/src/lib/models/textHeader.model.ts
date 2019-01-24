import { Header } from "./header.model";

/**
 * Information needed for a header with text box.
 *
 * @export
 */
export class TextHeader extends Header {
    /**
     * The text to display when the user has not populated the text box with text.
     *
     * @memberof TextHeader
     */
    placeholder: string;
}