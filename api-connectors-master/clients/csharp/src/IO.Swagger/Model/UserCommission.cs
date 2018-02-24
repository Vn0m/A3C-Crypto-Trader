/* 
 * BitMEX API
 *
 * ## REST API for the BitMEX Trading Platform  [View Changelog](/app/apiChangelog)    #### Getting Started   ##### Fetching Data  All REST endpoints are documented below. You can try out any query right from this interface.  Most table queries accept `count`, `start`, and `reverse` params. Set `reverse=true` to get rows newest-first.  Additional documentation regarding filters, timestamps, and authentication is available in [the main API documentation](https://www.bitmex.com/app/restAPI).  *All* table data is available via the [Websocket](/app/wsAPI). We highly recommend using the socket if you want to have the quickest possible data without being subject to ratelimits.  ##### Return Types  By default, all data is returned as JSON. Send `?_format=csv` to get CSV data or `?_format=xml` to get XML data.  ##### Trade Data Queries  *This is only a small subset of what is available, to get you started.*  Fill in the parameters and click the `Try it out!` button to try any of these queries.  * [Pricing Data](#!/Quote/Quote_get)  * [Trade Data](#!/Trade/Trade_get)  * [OrderBook Data](#!/OrderBook/OrderBook_getL2)  * [Settlement Data](#!/Settlement/Settlement_get)  * [Exchange Statistics](#!/Stats/Stats_history)  Every function of the BitMEX.com platform is exposed here and documented. Many more functions are available.  ##### Swagger Specification  [⇩ Download Swagger JSON](swagger.json)    ## All API Endpoints  Click to expand a section. 
 *
 * OpenAPI spec version: 1.2.0
 * Contact: support@bitmex.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using SwaggerDateConverter = IO.Swagger.Client.SwaggerDateConverter;

namespace IO.Swagger.Model
{
    /// <summary>
    /// UserCommission
    /// </summary>
    [DataContract]
    public partial class UserCommission :  IEquatable<UserCommission>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UserCommission" /> class.
        /// </summary>
        /// <param name="MakerFee">MakerFee.</param>
        /// <param name="TakerFee">TakerFee.</param>
        /// <param name="SettlementFee">SettlementFee.</param>
        /// <param name="MaxFee">MaxFee.</param>
        public UserCommission(double? MakerFee = default(double?), double? TakerFee = default(double?), double? SettlementFee = default(double?), double? MaxFee = default(double?))
        {
            this.MakerFee = MakerFee;
            this.TakerFee = TakerFee;
            this.SettlementFee = SettlementFee;
            this.MaxFee = MaxFee;
        }
        
        /// <summary>
        /// Gets or Sets MakerFee
        /// </summary>
        [DataMember(Name="makerFee", EmitDefaultValue=false)]
        public double? MakerFee { get; set; }

        /// <summary>
        /// Gets or Sets TakerFee
        /// </summary>
        [DataMember(Name="takerFee", EmitDefaultValue=false)]
        public double? TakerFee { get; set; }

        /// <summary>
        /// Gets or Sets SettlementFee
        /// </summary>
        [DataMember(Name="settlementFee", EmitDefaultValue=false)]
        public double? SettlementFee { get; set; }

        /// <summary>
        /// Gets or Sets MaxFee
        /// </summary>
        [DataMember(Name="maxFee", EmitDefaultValue=false)]
        public double? MaxFee { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class UserCommission {\n");
            sb.Append("  MakerFee: ").Append(MakerFee).Append("\n");
            sb.Append("  TakerFee: ").Append(TakerFee).Append("\n");
            sb.Append("  SettlementFee: ").Append(SettlementFee).Append("\n");
            sb.Append("  MaxFee: ").Append(MaxFee).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as UserCommission);
        }

        /// <summary>
        /// Returns true if UserCommission instances are equal
        /// </summary>
        /// <param name="input">Instance of UserCommission to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(UserCommission input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.MakerFee == input.MakerFee ||
                    (this.MakerFee != null &&
                    this.MakerFee.Equals(input.MakerFee))
                ) && 
                (
                    this.TakerFee == input.TakerFee ||
                    (this.TakerFee != null &&
                    this.TakerFee.Equals(input.TakerFee))
                ) && 
                (
                    this.SettlementFee == input.SettlementFee ||
                    (this.SettlementFee != null &&
                    this.SettlementFee.Equals(input.SettlementFee))
                ) && 
                (
                    this.MaxFee == input.MaxFee ||
                    (this.MaxFee != null &&
                    this.MaxFee.Equals(input.MaxFee))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.MakerFee != null)
                    hashCode = hashCode * 59 + this.MakerFee.GetHashCode();
                if (this.TakerFee != null)
                    hashCode = hashCode * 59 + this.TakerFee.GetHashCode();
                if (this.SettlementFee != null)
                    hashCode = hashCode * 59 + this.SettlementFee.GetHashCode();
                if (this.MaxFee != null)
                    hashCode = hashCode * 59 + this.MaxFee.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
