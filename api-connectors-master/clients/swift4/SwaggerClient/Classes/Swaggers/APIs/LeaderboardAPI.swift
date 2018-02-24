//
// LeaderboardAPI.swift
//
// Generated by swagger-codegen
// https://github.com/swagger-api/swagger-codegen
//

import Foundation
import Alamofire



open class LeaderboardAPI {
    /**
     Get current leaderboard.
     
     - parameter method: (query) Ranking type. Options: \&quot;notional\&quot;, \&quot;ROE\&quot; (optional, default to notional)
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func leaderboardGet(method: String? = nil, completion: @escaping ((_ data: [Leaderboard]?,_ error: Error?) -> Void)) {
        leaderboardGetWithRequestBuilder(method: method).execute { (response, error) -> Void in
            completion(response?.body, error);
        }
    }


    /**
     Get current leaderboard.
     - GET /leaderboard
     - examples: [{contentType=application/json, example=[ {
  "isMe" : true,
  "name" : "name",
  "isRealName" : true,
  "profit" : 0.8008281904610115
}, {
  "isMe" : true,
  "name" : "name",
  "isRealName" : true,
  "profit" : 0.8008281904610115
} ]}]
     
     - parameter method: (query) Ranking type. Options: \&quot;notional\&quot;, \&quot;ROE\&quot; (optional, default to notional)

     - returns: RequestBuilder<[Leaderboard]> 
     */
    open class func leaderboardGetWithRequestBuilder(method: String? = nil) -> RequestBuilder<[Leaderboard]> {
        let path = "/leaderboard"
        let URLString = SwaggerClientAPI.basePath + path
        let parameters: [String:Any]? = nil

        let url = NSURLComponents(string: URLString)
        url?.queryItems = APIHelper.mapValuesToQueryItems(values:[
            "method": method
        ])
        

        let requestBuilder: RequestBuilder<[Leaderboard]>.Type = SwaggerClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "GET", URLString: (url?.string ?? URLString), parameters: parameters, isBody: false)
    }

}
