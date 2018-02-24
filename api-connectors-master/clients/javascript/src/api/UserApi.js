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
import AccessToken from '../model/AccessToken';
import Affiliate from '../model/Affiliate';
import Margin from '../model/Margin';
import Transaction from '../model/Transaction';
import User from '../model/User';
import UserCommission from '../model/UserCommission';
import Wallet from '../model/Wallet';

/**
* User service.
* @module api/UserApi
* @version 1.2.0
*/
export default class UserApi {

    /**
    * Constructs a new UserApi. 
    * @alias module:api/UserApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the userCancelWithdrawal operation.
     * @callback module:api/UserApi~userCancelWithdrawalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Transaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel a withdrawal.
     * @param {String} token 
     * @param {module:api/UserApi~userCancelWithdrawalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Transaction}
     */
    userCancelWithdrawal(token, callback) {
      let postBody = null;

      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling userCancelWithdrawal");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'token': token
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = Transaction;

      return this.apiClient.callApi(
        '/user/cancelWithdrawal', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userCheckReferralCode operation.
     * @callback module:api/UserApi~userCheckReferralCodeCallback
     * @param {String} error Error message, if any.
     * @param {'Number'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check if a referral code is valid.
     * If the code is valid, responds with the referral code&#39;s discount (e.g. &#x60;0.1&#x60; for 10%). Otherwise, will return a 404.
     * @param {Object} opts Optional parameters
     * @param {String} opts.referralCode 
     * @param {module:api/UserApi~userCheckReferralCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Number'}
     */
    userCheckReferralCode(opts, callback) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'referralCode': opts['referralCode']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = 'Number';

      return this.apiClient.callApi(
        '/user/checkReferralCode', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userConfirm operation.
     * @callback module:api/UserApi~userConfirmCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccessToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Confirm your email address with a token.
     * @param {String} token 
     * @param {module:api/UserApi~userConfirmCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccessToken}
     */
    userConfirm(token, callback) {
      let postBody = null;

      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling userConfirm");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'token': token
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = AccessToken;

      return this.apiClient.callApi(
        '/user/confirmEmail', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userConfirmEnableTFA operation.
     * @callback module:api/UserApi~userConfirmEnableTFACallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Confirm two-factor auth for this account. If using a Yubikey, simply send a token to this endpoint.
     * @param {String} token Token from your selected TFA type.
     * @param {Object} opts Optional parameters
     * @param {String} opts.type Two-factor auth type. Supported types: &#39;GA&#39; (Google Authenticator), &#39;Yubikey&#39;
     * @param {module:api/UserApi~userConfirmEnableTFACallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    userConfirmEnableTFA(token, opts, callback) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling userConfirmEnableTFA");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'type': opts['type'],
        'token': token
      };

      let authNames = ['apiKey', 'apiNonce', 'apiSignature'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = 'Boolean';

      return this.apiClient.callApi(
        '/user/confirmEnableTFA', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userConfirmWithdrawal operation.
     * @callback module:api/UserApi~userConfirmWithdrawalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Transaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Confirm a withdrawal.
     * @param {String} token 
     * @param {module:api/UserApi~userConfirmWithdrawalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Transaction}
     */
    userConfirmWithdrawal(token, callback) {
      let postBody = null;

      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling userConfirmWithdrawal");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'token': token
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = Transaction;

      return this.apiClient.callApi(
        '/user/confirmWithdrawal', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userDisableTFA operation.
     * @callback module:api/UserApi~userDisableTFACallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Disable two-factor auth for this account.
     * @param {String} token Token from your selected TFA type.
     * @param {Object} opts Optional parameters
     * @param {String} opts.type Two-factor auth type. Supported types: &#39;GA&#39; (Google Authenticator)
     * @param {module:api/UserApi~userDisableTFACallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    userDisableTFA(token, opts, callback) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling userDisableTFA");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'type': opts['type'],
        'token': token
      };

      let authNames = ['apiKey', 'apiNonce', 'apiSignature'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = 'Boolean';

      return this.apiClient.callApi(
        '/user/disableTFA', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userGet operation.
     * @callback module:api/UserApi~userGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get your user model.
     * @param {module:api/UserApi~userGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    userGet(callback) {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'apiNonce', 'apiSignature'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = User;

      return this.apiClient.callApi(
        '/user', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userGetAffiliateStatus operation.
     * @callback module:api/UserApi~userGetAffiliateStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Affiliate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get your current affiliate/referral status.
     * @param {module:api/UserApi~userGetAffiliateStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Affiliate}
     */
    userGetAffiliateStatus(callback) {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'apiNonce', 'apiSignature'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = Affiliate;

      return this.apiClient.callApi(
        '/user/affiliateStatus', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userGetCommission operation.
     * @callback module:api/UserApi~userGetCommissionCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/UserCommission>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get your account&#39;s commission status.
     * @param {module:api/UserApi~userGetCommissionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/UserCommission>}
     */
    userGetCommission(callback) {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'apiNonce', 'apiSignature'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = [UserCommission];

      return this.apiClient.callApi(
        '/user/commission', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userGetDepositAddress operation.
     * @callback module:api/UserApi~userGetDepositAddressCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a deposit address.
     * @param {Object} opts Optional parameters
     * @param {String} opts.currency  (default to XBt)
     * @param {module:api/UserApi~userGetDepositAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    userGetDepositAddress(opts, callback) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'currency': opts['currency']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'apiNonce', 'apiSignature'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = 'String';

      return this.apiClient.callApi(
        '/user/depositAddress', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userGetMargin operation.
     * @callback module:api/UserApi~userGetMarginCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Margin} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get your account&#39;s margin status. Send a currency of \&quot;all\&quot; to receive an array of all supported currencies.
     * @param {Object} opts Optional parameters
     * @param {String} opts.currency  (default to XBt)
     * @param {module:api/UserApi~userGetMarginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Margin}
     */
    userGetMargin(opts, callback) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'currency': opts['currency']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'apiNonce', 'apiSignature'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = Margin;

      return this.apiClient.callApi(
        '/user/margin', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userGetWallet operation.
     * @callback module:api/UserApi~userGetWalletCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Wallet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get your current wallet information.
     * @param {Object} opts Optional parameters
     * @param {String} opts.currency  (default to XBt)
     * @param {module:api/UserApi~userGetWalletCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Wallet}
     */
    userGetWallet(opts, callback) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'currency': opts['currency']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'apiNonce', 'apiSignature'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = Wallet;

      return this.apiClient.callApi(
        '/user/wallet', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userGetWalletHistory operation.
     * @callback module:api/UserApi~userGetWalletHistoryCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Transaction>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a history of all of your wallet transactions (deposits, withdrawals, PNL).
     * @param {Object} opts Optional parameters
     * @param {String} opts.currency  (default to XBt)
     * @param {module:api/UserApi~userGetWalletHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Transaction>}
     */
    userGetWalletHistory(opts, callback) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'currency': opts['currency']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'apiNonce', 'apiSignature'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = [Transaction];

      return this.apiClient.callApi(
        '/user/walletHistory', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userGetWalletSummary operation.
     * @callback module:api/UserApi~userGetWalletSummaryCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Transaction>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a summary of all of your wallet transactions (deposits, withdrawals, PNL).
     * @param {Object} opts Optional parameters
     * @param {String} opts.currency  (default to XBt)
     * @param {module:api/UserApi~userGetWalletSummaryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Transaction>}
     */
    userGetWalletSummary(opts, callback) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'currency': opts['currency']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'apiNonce', 'apiSignature'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = [Transaction];

      return this.apiClient.callApi(
        '/user/walletSummary', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userLogout operation.
     * @callback module:api/UserApi~userLogoutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Log out of BitMEX.
     * @param {module:api/UserApi~userLogoutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    userLogout(callback) {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = null;

      return this.apiClient.callApi(
        '/user/logout', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userLogoutAll operation.
     * @callback module:api/UserApi~userLogoutAllCallback
     * @param {String} error Error message, if any.
     * @param {'Number'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Log all systems out of BitMEX. This will revoke all of your account&#39;s access tokens, logging you out on all devices.
     * @param {module:api/UserApi~userLogoutAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Number'}
     */
    userLogoutAll(callback) {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey', 'apiNonce', 'apiSignature'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = 'Number';

      return this.apiClient.callApi(
        '/user/logoutAll', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userMinWithdrawalFee operation.
     * @callback module:api/UserApi~userMinWithdrawalFeeCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the minimum withdrawal fee for a currency.
     * This is changed based on network conditions to ensure timely withdrawals. During network congestion, this may be high. The fee is returned in the same currency.
     * @param {Object} opts Optional parameters
     * @param {String} opts.currency  (default to XBt)
     * @param {module:api/UserApi~userMinWithdrawalFeeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    userMinWithdrawalFee(opts, callback) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'currency': opts['currency']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/user/minWithdrawalFee', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userRequestEnableTFA operation.
     * @callback module:api/UserApi~userRequestEnableTFACallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get secret key for setting up two-factor auth.
     * Use /confirmEnableTFA directly for Yubikeys. This fails if TFA is already enabled.
     * @param {Object} opts Optional parameters
     * @param {String} opts.type Two-factor auth type. Supported types: &#39;GA&#39; (Google Authenticator)
     * @param {module:api/UserApi~userRequestEnableTFACallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Boolean'}
     */
    userRequestEnableTFA(opts, callback) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'type': opts['type']
      };

      let authNames = ['apiKey', 'apiNonce', 'apiSignature'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = 'Boolean';

      return this.apiClient.callApi(
        '/user/requestEnableTFA', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userRequestWithdrawal operation.
     * @callback module:api/UserApi~userRequestWithdrawalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Transaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request a withdrawal to an external wallet.
     * This will send a confirmation email to the email address on record, unless requested via an API Key with the &#x60;withdraw&#x60; permission.
     * @param {String} currency Currency you&#39;re withdrawing. Options: &#x60;XBt&#x60;
     * @param {Number} amount Amount of withdrawal currency.
     * @param {String} address Destination Address.
     * @param {Object} opts Optional parameters
     * @param {String} opts.otpToken 2FA token. Required if 2FA is enabled on your account.
     * @param {Number} opts.fee Network fee for Bitcoin withdrawals. If not specified, a default value will be calculated based on Bitcoin network conditions. You will have a chance to confirm this via email.
     * @param {module:api/UserApi~userRequestWithdrawalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Transaction}
     */
    userRequestWithdrawal(currency, amount, address, opts, callback) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'currency' is set
      if (currency === undefined || currency === null) {
        throw new Error("Missing the required parameter 'currency' when calling userRequestWithdrawal");
      }

      // verify the required parameter 'amount' is set
      if (amount === undefined || amount === null) {
        throw new Error("Missing the required parameter 'amount' when calling userRequestWithdrawal");
      }

      // verify the required parameter 'address' is set
      if (address === undefined || address === null) {
        throw new Error("Missing the required parameter 'address' when calling userRequestWithdrawal");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'otpToken': opts['otpToken'],
        'currency': currency,
        'amount': amount,
        'address': address,
        'fee': opts['fee']
      };

      let authNames = ['apiKey', 'apiNonce', 'apiSignature'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = Transaction;

      return this.apiClient.callApi(
        '/user/requestWithdrawal', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userSavePreferences operation.
     * @callback module:api/UserApi~userSavePreferencesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save user preferences.
     * @param {String} prefs 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overwrite If true, will overwrite all existing preferences. (default to false)
     * @param {module:api/UserApi~userSavePreferencesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    userSavePreferences(prefs, opts, callback) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'prefs' is set
      if (prefs === undefined || prefs === null) {
        throw new Error("Missing the required parameter 'prefs' when calling userSavePreferences");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'prefs': prefs,
        'overwrite': opts['overwrite']
      };

      let authNames = ['apiKey', 'apiNonce', 'apiSignature'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = User;

      return this.apiClient.callApi(
        '/user/preferences', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userUpdate operation.
     * @callback module:api/UserApi~userUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update your password, name, and other attributes.
     * @param {Object} opts Optional parameters
     * @param {String} opts.firstname 
     * @param {String} opts.lastname 
     * @param {String} opts.oldPassword 
     * @param {String} opts.newPassword 
     * @param {String} opts.newPasswordConfirm 
     * @param {String} opts.username Username can only be set once. To reset, email support.
     * @param {String} opts.country Country of residence.
     * @param {String} opts.pgpPubKey PGP Public Key. If specified, automated emails will be sentwith this key.
     * @param {module:api/UserApi~userUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    userUpdate(opts, callback) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'firstname': opts['firstname'],
        'lastname': opts['lastname'],
        'oldPassword': opts['oldPassword'],
        'newPassword': opts['newPassword'],
        'newPasswordConfirm': opts['newPasswordConfirm'],
        'username': opts['username'],
        'country': opts['country'],
        'pgpPubKey': opts['pgpPubKey']
      };

      let authNames = ['apiKey', 'apiNonce', 'apiSignature'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'application/xml', 'text/xml', 'application/javascript', 'text/javascript'];
      let returnType = User;

      return this.apiClient.callApi(
        '/user', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}
