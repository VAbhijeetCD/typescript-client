const BASE_PATH = "https://api-education.chatdaddy.tech".replace(/\/+$/, "");

/* tslint:disable */
/* eslint-disable */
/**
 * ChatDaddy Education Service
 * Access Notion Chatdaddy Education Content
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
import type { RequestArgs } from '../base';
// @ts-ignore
import { COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Content
 */
export interface Content {
    /**
     * 
     * @type {string}
     * @memberof Content
     */
    'label': string;
    /**
     * 
     * @type {string}
     * @memberof Content
     */
    'language': string;
    /**
     * 
     * @type {string}
     * @memberof Content
     */
    'previewImage'?: string;
    /**
     * 
     * @type {string}
     * @memberof Content
     */
    'notionLink': string;
    /**
     * 
     * @type {string}
     * @memberof Content
     */
    'type': ContentTypeEnum;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Content
     */
    'notionPageRecord': { [key: string]: any; };
}

export const ContentTypeEnum = {
    Faq: 'faq',
    CaseStudy: 'case-study',
    Video: 'video'
} as const;

export type ContentTypeEnum = typeof ContentTypeEnum[keyof typeof ContentTypeEnum];

/**
 * 
 * @export
 * @interface HelpContent200Response
 */
export interface HelpContent200Response {
    /**
     * 
     * @type {Array<Content>}
     * @memberof HelpContent200Response
     */
    'content': Array<Content>;
}

/**
 * HelpContentApi - axios parameter creator
 * @export
 */
export const HelpContentApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {'broadcast' | 'keywordReply' | 'messageFlow' | 'inbox' | 'easysend' | 'products' | 'payments' | 'offlineBot'} section which section faq content to retrieve
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        helpContent: async (section: 'broadcast' | 'keywordReply' | 'messageFlow' | 'inbox' | 'easysend' | 'products' | 'payments' | 'offlineBot', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'section' is not null or undefined
            assertParamExists('helpContent', 'section', section)
            const localVarPath = `/help-content/{section}`
                .replace(`{${"section"}}`, encodeURIComponent(String(section)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication chatdaddy required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "chatdaddy", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * HelpContentApi - functional programming interface
 * @export
 */
export const HelpContentApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = HelpContentApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {'broadcast' | 'keywordReply' | 'messageFlow' | 'inbox' | 'easysend' | 'products' | 'payments' | 'offlineBot'} section which section faq content to retrieve
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async helpContent(section: 'broadcast' | 'keywordReply' | 'messageFlow' | 'inbox' | 'easysend' | 'products' | 'payments' | 'offlineBot', options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HelpContent200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.helpContent(section, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * HelpContentApi - factory interface
 * @export
 */
export const HelpContentApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = HelpContentApiFp(configuration)
    return {
        /**
         * 
         * @param {HelpContentApiHelpContentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        helpContent(requestParameters: HelpContentApiHelpContentRequest, options?: AxiosRequestConfig): AxiosPromise<HelpContent200Response> {
            return localVarFp.helpContent(requestParameters.section, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for helpContent operation in HelpContentApi.
 * @export
 * @interface HelpContentApiHelpContentRequest
 */
export interface HelpContentApiHelpContentRequest {
    /**
     * which section faq content to retrieve
     * @type {'broadcast' | 'keywordReply' | 'messageFlow' | 'inbox' | 'easysend' | 'products' | 'payments' | 'offlineBot'}
     * @memberof HelpContentApiHelpContent
     */
    readonly section: 'broadcast' | 'keywordReply' | 'messageFlow' | 'inbox' | 'easysend' | 'products' | 'payments' | 'offlineBot'
}

/**
 * HelpContentApi - object-oriented interface
 * @export
 * @class HelpContentApi
 * @extends {BaseAPI}
 */
export class HelpContentApi extends BaseAPI {
    /**
     * 
     * @param {HelpContentApiHelpContentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HelpContentApi
     */
    public helpContent(requestParameters: HelpContentApiHelpContentRequest, options?: AxiosRequestConfig) {
        return HelpContentApiFp(this.configuration).helpContent(requestParameters.section, options).then((request) => request(this.axios, this.basePath));
    }
}


