//
// UserCommission.swift
//
// Generated by swagger-codegen
// https://github.com/swagger-api/swagger-codegen
//

import Foundation



open class UserCommission: Codable {

    public var makerFee: Double?
    public var takerFee: Double?
    public var settlementFee: Double?
    public var maxFee: Double?


    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {

        var container = encoder.container(keyedBy: String.self)

        try container.encodeIfPresent(makerFee, forKey: "makerFee")
        try container.encodeIfPresent(takerFee, forKey: "takerFee")
        try container.encodeIfPresent(settlementFee, forKey: "settlementFee")
        try container.encodeIfPresent(maxFee, forKey: "maxFee")
    }

    // Decodable protocol methods
    
    public required init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: String.self)

        makerFee = try container.decodeIfPresent(Double.self, forKey: "makerFee")
        takerFee = try container.decodeIfPresent(Double.self, forKey: "takerFee")
        settlementFee = try container.decodeIfPresent(Double.self, forKey: "settlementFee")
        maxFee = try container.decodeIfPresent(Double.self, forKey: "maxFee")
    }
}

