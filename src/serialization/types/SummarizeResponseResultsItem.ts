/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Cohere from "../../api";
import * as core from "../../core";

export const SummarizeResponseResultsItem: core.serialization.ObjectSchema<
    serializers.SummarizeResponseResultsItem.Raw,
    Cohere.SummarizeResponseResultsItem
> = core.serialization.object({
    id: core.serialization.string().optional(),
    summary: core.serialization.string().optional(),
});

export declare namespace SummarizeResponseResultsItem {
    interface Raw {
        id?: string | null;
        summary?: string | null;
    }
}
