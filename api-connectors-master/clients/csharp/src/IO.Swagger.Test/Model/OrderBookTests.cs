/* 
 * BitMEX API
 *
 * ## REST API for the BitMEX Trading Platform  [View Changelog](/app/apiChangelog)    #### Getting Started   ##### Fetching Data  All REST endpoints are documented below. You can try out any query right from this interface.  Most table queries accept `count`, `start`, and `reverse` params. Set `reverse=true` to get rows newest-first.  Additional documentation regarding filters, timestamps, and authentication is available in [the main API documentation](https://www.bitmex.com/app/restAPI).  *All* table data is available via the [Websocket](/app/wsAPI). We highly recommend using the socket if you want to have the quickest possible data without being subject to ratelimits.  ##### Return Types  By default, all data is returned as JSON. Send `?_format=csv` to get CSV data or `?_format=xml` to get XML data.  ##### Trade Data Queries  *This is only a small subset of what is available, to get you started.*  Fill in the parameters and click the `Try it out!` button to try any of these queries.  * [Pricing Data](#!/Quote/Quote_get)  * [Trade Data](#!/Trade/Trade_get)  * [OrderBook Data](#!/OrderBook/OrderBook_getL2)  * [Settlement Data](#!/Settlement/Settlement_get)  * [Exchange Statistics](#!/Stats/Stats_history)  Every function of the BitMEX.com platform is exposed here and documented. Many more functions are available.  ##### Swagger Specification  [⇩ Download Swagger JSON](swagger.json)    ## All API Endpoints  Click to expand a section. 
 *
 * OpenAPI spec version: 1.2.0
 * Contact: support@bitmex.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */


using NUnit.Framework;

using System;
using System.Linq;
using System.IO;
using System.Collections.Generic;
using IO.Swagger.Api;
using IO.Swagger.Model;
using IO.Swagger.Client;
using System.Reflection;
using Newtonsoft.Json;

namespace IO.Swagger.Test
{
    /// <summary>
    ///  Class for testing OrderBook
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by Swagger Codegen.
    /// Please update the test case below to test the model.
    /// </remarks>
    [TestFixture]
    public class OrderBookTests
    {
        // TODO uncomment below to declare an instance variable for OrderBook
        //private OrderBook instance;

        /// <summary>
        /// Setup before each test
        /// </summary>
        [SetUp]
        public void Init()
        {
            // TODO uncomment below to create an instance of OrderBook
            //instance = new OrderBook();
        }

        /// <summary>
        /// Clean up after each test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of OrderBook
        /// </summary>
        [Test]
        public void OrderBookInstanceTest()
        {
            // TODO uncomment below to test "IsInstanceOfType" OrderBook
            //Assert.IsInstanceOfType<OrderBook> (instance, "variable 'instance' is a OrderBook");
        }


        /// <summary>
        /// Test the property 'Symbol'
        /// </summary>
        [Test]
        public void SymbolTest()
        {
            // TODO unit test for the property 'Symbol'
        }
        /// <summary>
        /// Test the property 'Level'
        /// </summary>
        [Test]
        public void LevelTest()
        {
            // TODO unit test for the property 'Level'
        }
        /// <summary>
        /// Test the property 'BidSize'
        /// </summary>
        [Test]
        public void BidSizeTest()
        {
            // TODO unit test for the property 'BidSize'
        }
        /// <summary>
        /// Test the property 'BidPrice'
        /// </summary>
        [Test]
        public void BidPriceTest()
        {
            // TODO unit test for the property 'BidPrice'
        }
        /// <summary>
        /// Test the property 'AskPrice'
        /// </summary>
        [Test]
        public void AskPriceTest()
        {
            // TODO unit test for the property 'AskPrice'
        }
        /// <summary>
        /// Test the property 'AskSize'
        /// </summary>
        [Test]
        public void AskSizeTest()
        {
            // TODO unit test for the property 'AskSize'
        }
        /// <summary>
        /// Test the property 'Timestamp'
        /// </summary>
        [Test]
        public void TimestampTest()
        {
            // TODO unit test for the property 'Timestamp'
        }

    }

}
