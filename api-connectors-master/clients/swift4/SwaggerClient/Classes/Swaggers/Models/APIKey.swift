//
// APIKey.swift
//
// Generated by swagger-codegen
// https://github.com/swagger-api/swagger-codegen
//

import Foundation


/** Persistent API Keys for Developers */

open class APIKey: Codable {

    public var id: String
    public var secret: String
    public var name: String
    public var nonce: Double
    public var cidr: String?
    public var permissions: [XAny]?
    public var enabled: Bool?
    public var userId: Double
    public var created: Date?


    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {

        var container = encoder.container(keyedBy: String.self)

        try container.encode(id, forKey: "id")
        try container.encode(secret, forKey: "secret")
        try container.encode(name, forKey: "name")
        try container.encode(nonce, forKey: "nonce")
        try container.encodeIfPresent(cidr, forKey: "cidr")
        try container.encodeArrayIfPresent(permissions, forKey: "permissions")
        try container.encodeIfPresent(enabled, forKey: "enabled")
        try container.encode(userId, forKey: "userId")
        try container.encodeIfPresent(created, forKey: "created")
    }

    // Decodable protocol methods
    
    public required init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: String.self)

        id = try container.decode(String.self, forKey: "id")
        secret = try container.decode(String.self, forKey: "secret")
        name = try container.decode(String.self, forKey: "name")
        nonce = try container.decode(Double.self, forKey: "nonce")
        cidr = try container.decodeIfPresent(String.self, forKey: "cidr")
        permissions = try container.decodeArrayIfPresent(XAny.self, forKey: "permissions")
        enabled = try container.decodeIfPresent(Bool.self, forKey: "enabled")
        userId = try container.decode(Double.self, forKey: "userId")
        created = try container.decodeIfPresent(Date.self, forKey: "created")
    }
}

