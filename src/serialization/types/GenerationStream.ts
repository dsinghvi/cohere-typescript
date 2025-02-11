/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Cohere from "../../api";
import * as core from "../../core";

export const GenerationStream: core.serialization.ObjectSchema<
    serializers.GenerationStream.Raw,
    Cohere.GenerationStream
> = core.serialization.object({
    text: core.serialization.string(),
    index: core.serialization.number().optional(),
    isFinished: core.serialization.property("is_finished", core.serialization.boolean()),
});

export declare namespace GenerationStream {
    interface Raw {
        text: string;
        index?: number | null;
        is_finished: boolean;
    }
}
