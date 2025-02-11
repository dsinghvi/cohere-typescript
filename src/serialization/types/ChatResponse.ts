/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Cohere from "../../api";
import * as core from "../../core";

export const ChatResponse: core.serialization.Schema<serializers.ChatResponse.Raw, Cohere.ChatResponse> =
    core.serialization.undiscriminatedUnion([
        core.serialization.lazyObject(async () => (await import("..")).NonStreamedChatResponse),
        core.serialization.lazy(async () => (await import("..")).StreamedChatResponse),
        core.serialization.lazyObject(async () => (await import("..")).SearchQueriesOnlyResponse),
    ]);

export declare namespace ChatResponse {
    type Raw =
        | serializers.NonStreamedChatResponse.Raw
        | serializers.StreamedChatResponse.Raw
        | serializers.SearchQueriesOnlyResponse.Raw;
}
