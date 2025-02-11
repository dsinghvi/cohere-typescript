/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Cohere from "../../api";
import * as core from "../../core";

export const GenerationFinalResponseResponse: core.serialization.ObjectSchema<
    serializers.GenerationFinalResponseResponse.Raw,
    Cohere.GenerationFinalResponseResponse
> = core.serialization.object({
    id: core.serialization.string(),
    generations: core.serialization.lazyObject(async () => (await import("..")).SingleGenerationInStream).optional(),
});

export declare namespace GenerationFinalResponseResponse {
    interface Raw {
        id: string;
        generations?: serializers.SingleGenerationInStream.Raw | null;
    }
}
