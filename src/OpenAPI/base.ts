/* tslint:disable */
/* eslint-disable */
/**
 * ChatDaddy Shop Integration Spec
 * This is the OpenAPI specification for the ChatDaddy Shop Integration. When integrating with ChatDaddy, implement a spec that follows this specification. Then, provide the URL to your hosted implementation on ChatDaddy.  The job of every integration will be to: 1. define parameters for authentication & a JSON schema spec for the data points (orders) that will be sent to the EasySend service 2. handle authentication when easysend service requests a new \"tracking\" for an integration 3. handle polling or receiving webhooks from the provider to get new orders, and then send them to the Shop service via the `dataPatch` operation. 4. the implementation must also let the Shop service know if the tracking\'s authentication has failed, and new data cannot be fetched via the `trackingUpdateErrorState` operation. 5. optionally, handle retreiving product listing from the provider  It is recommended to use the [ChatDaddy client](https://github.com/chatdaddy/typescript-client) to make the API calls. 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from "./configuration";
// Some imports not used depending on template conditions
// @ts-ignore
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';



/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface RequestArgs
 */
export interface RequestArgs {
    url: string;
    options: AxiosRequestConfig;
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {

	static DEFAULT_AXIOS: AxiosInstance = globalAxios;
    protected configuration: Configuration | undefined;

    constructor(configuration?: Configuration, protected basePath: string = undefined, protected axios: AxiosInstance = BaseAPI.DEFAULT_AXIOS) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
};

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError" = "RequiredError";
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}
