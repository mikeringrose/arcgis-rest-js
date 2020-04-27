import { HTTPMethods } from "./HTTPMethods";
import { IParams } from "./IParams";
import { IAuthenticationManager } from "./IAuthenticationManager";
import { FetchMode } from './FetchMode';

/**
 * Options for the `request()` method.
 */
export interface IRequestOptions {
  /**
   * Additional parameters to pass in the request.
   */
  params?: IParams;
  /**
   * The HTTP method to send the request with.
   */
  httpMethod?: HTTPMethods;
  /**
   * The fetch mode to send the request with.
   */
  fetchMode?: FetchMode;
  /**
   * Return the raw [response](https://developer.mozilla.org/en-US/docs/Web/API/Response)
   */
  rawResponse?: boolean;
  /**
   * The instance of `IAuthenticationManager` to use to authenticate this request.
   */
  authentication?: IAuthenticationManager;
  /**
   * Prevents the token from being passed in a URL Query param that is saved in browser history.
   * Instead, the token will be passed in POST request body or through X-ESRI-AUTHORIZATION header
   */
  secureToken?: boolean;
  /**
   * Base url for the portal you want to make the request to. Defaults to 'https://www.arcgis.com/sharing/rest'.
   */
  portal?: string;
  /**
   * The implementation of `fetch` to use. Defaults to a global `fetch`.
   */
  fetch?: (input: RequestInfo, init?: RequestInit) => Promise<Response>;
  /**
   * If the length of a GET request's URL exceeds `maxUrlLength` the request will use POST instead.
   */
  maxUrlLength?: number;
  /**
   * Additional [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers) to pass into the request.
   */
  headers?: {
    [key: string]: any;
  };
}
