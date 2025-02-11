/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Cohere from "../../api";
import * as core from "../../core";

export const DetectLanguageResponseResultsItem: core.serialization.ObjectSchema<
    serializers.DetectLanguageResponseResultsItem.Raw,
    Cohere.DetectLanguageResponseResultsItem
> = core.serialization.object({
    languageName: core.serialization.property("language_name", core.serialization.string().optional()),
    languageCode: core.serialization.property("language_code", core.serialization.string().optional()),
});

export declare namespace DetectLanguageResponseResultsItem {
    interface Raw {
        language_name?: string | null;
        language_code?: string | null;
    }
}
