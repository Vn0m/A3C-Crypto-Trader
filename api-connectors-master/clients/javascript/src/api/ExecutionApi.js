/**
 * BitMEX API
 * ## REST API for the BitMEX Trading Platform  [View Changelog](/app/apiChangelog)    #### Getting Started   ##### Fetching Data  All REST endpoints are documented below. You can try out any query right from this interface.  Most table queries accept `count`, `start`, and `reverse` params. Set `reverse=true` to get rows newest-first.  Additional documentation regarding filters, timestamps, and authentication is available in [the main API documentation](https://www.bitmex.com/app/restAPI).  *All* table data is available via the [Websocket](/app/wsAPI). We highly recommend using the socket if you want to have the quickest possible data without being subject to ratelimits.  ##### Return Types  By default, all data is returned as JSON. Send `?_format=csv` to get CSV data or `?_format=xml` to get XML data.  ##### Trade Data Queries  *This is only a small subset of what is available, to get you started.*  Fill in the parameters and click the `Try it out!` button to try any of these queries.  * [Pricing Data](#!/Quote/Quote_get)  * [Trade Data](#!/Trade/Trade_get)  * [OrderBook Data](#!/OrderBook/OrderBook_getL2)  * [Settlement Data](#!/Settlement/Settlement_get)  * [Exchange Statistics](#!/Stats/Stats_history)  Every function of the BitMEX.com platform is exposed here and documented. Many more functions are available.  ##### Swagger Specification  [⇩ Download Swagger JSON](swagger.json)    ## All API Endpoints  Click to expand a section. 
 *
 * OpenAPI spec version: 1.2.0
 * Contact: support@bitmex.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import Execution from '../model/Execution';

/**
* Execution service.
* @module api/ExecutionApi
* @version 1.2.0
*/
export default class ExecutionApi {

    /**
    * Constructs a new ExecutionApi. 
    * @alias module:api/ExecutionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the executionGet operation.
     * @callback module:api/ExecutionApi~executionGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Execution>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all raw executions for your account.
     * This returns all raw transactions, which includes order opening and cancelation, and order status changes. It can be quite noisy. More focused information is available at &#x60;/execution/tradeHistory&#x60;.  You may also use the &#x60;filter&#x60; param to target your query. Specify an array as a filter value, such as &#x60;{\&quot;execType\&quot;: [\&quot;Settlement\&quot;, \&quot;Trade\&quot;]}&#x60; to filter on multiple values.  See [the FIX Spec](http://www.onixs.biz/fix-dictionary/5.0.SP2/msgType_8_8.html) for explanations of these fields. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.symbol Instrument symbol. Send a bare series (e.g. XBU) to get data for the nearest expiring contract in that series.  You can also send a timeframe, e.g. &#x60;XBU:monthly&#x60;. Timeframes are &#x60;daily&#x60;, &#x60;weekly&#x60;, &#x60;monthly&#x60;, &#x60;quarterly&#x60;, and &#x60;biquarterly&#x60;.
     * @param {String} opts.filter Generic table filter. Send JSON key/value pairs, such as &#x60;{\&quot;key\&quot;: \&quot;value\&quot;}&#x60;. You can key on individual fields, and do more advanced querying on timestamps. See the [Timestamp Docs](https://www.bitmex.com/app/restAPI#timestamp-filters) for more details.
     * @param {String} opts.columns Array of column names to fetch. If omitted, will return all columns.  Note that this method will always return item keys, even when not specified, so you may receive more columns that you expect.
     * @param {Number} opts.count Number of results to fetch. (default to 100)
     * @param {Number} opts.start Starting point for results. (default to 0)
     * @param {Boolean} opts.reverse If true, will sort results newest first. (default to false)
     * @param {Date} opts.startTime Starting date filter for results.
     * @param {Date} opts.endTime Ending date filter for results.
     * @param {module:api/ExecutionApi~executionGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Execution>}
     */
    executionGet(opts, callback) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'symbol': opts['symbol'],
        'filter': opts['filter'],
        'columns': opts['columns'],
        'count': opts['count'],
        'start': opts['start'],
        'reverse': opts['reverse'],
        'startTime': opts['startTime'],
        'endTime': opts['endTime']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'apiNonce', 'apiSignature'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = [Execution];

      return this.apiClient.callApi(
        '/execution', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the executionGetTradeHistory operation.
     * @callback module:api/ExecutionApi~executionGetTradeHistoryCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Execution>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all balance-affecting executions. This includes each trade, insurance charge, and settlement.
     * @param {Object} opts Optional parameters
     * @param {String} opts.symbol Instrument symbol. Send a bare series (e.g. XBU) to get data for the nearest expiring contract in that series.  You can also send a timeframe, e.g. &#x60;XBU:monthly&#x60;. Timeframes are &#x60;daily&#x60;, &#x60;weekly&#x60;, &#x60;monthly&#x60;, &#x60;quarterly&#x60;, and &#x60;biquarterly&#x60;.
     * @param {String} opts.filter Generic table filter. Send JSON key/value pairs, such as &#x60;{\&quot;key\&quot;: \&quot;value\&quot;}&#x60;. You can key on individual fields, and do more advanced querying on timestamps. See the [Timestamp Docs](https://www.bitmex.com/app/restAPI#timestamp-filters) for more details.
     * @param {String} opts.columns Array of column names to fetch. If omitted, will return all columns.  Note that this method will always return item keys, even when not specified, so you may receive more columns that you expect.
     * @param {Number} opts.count Number of results to fetch. (default to 100)
     * @param {Number} opts.start Starting point for results. (default to 0)
     * @param {Boolean} opts.reverse If true, will sort results newest first. (default to false)
     * @param {Date} opts.startTime Starting date filter for results.
     * @param {Date} opts.endTime Ending date filter for results.
     * @param {module:api/ExecutionApi~executionGetTradeHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Execution>}
     */
    executionGetTradeHistory(opts, callback) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'symbol': opts['symbol'],
        'filter': opts['filter'],
        'columns': opts['columns'],
        'count': opts['count'],
        'start': opts['start'],
        'reverse': opts['reverse'],
        'startTime': opts['startTime'],
        'endTime': opts['endTime']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'apiNonce', 'apiSignature'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = [Execution];

      return this.apiClient.callApi(
        '/execution/tradeHistory', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}
