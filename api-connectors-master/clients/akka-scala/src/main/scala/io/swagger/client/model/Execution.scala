/**
 * NOTE: This class is auto generated by the akka-scala (beta) swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * For any issue or feedback, please open a ticket via https://github.com/swagger-api/swagger-codegen/issues/new
 */

package io.swagger.client.model

import io.swagger.client.core.ApiModel
import org.joda.time.DateTime
import java.util.UUID

case class Execution (
  execID: String,
  orderID: Option[String],
  clOrdID: Option[String],
  clOrdLinkID: Option[String],
  account: Option[Double],
  symbol: Option[String],
  side: Option[String],
  lastQty: Option[Double],
  lastPx: Option[Double],
  underlyingLastPx: Option[Double],
  lastMkt: Option[String],
  lastLiquidityInd: Option[String],
  simpleOrderQty: Option[Double],
  orderQty: Option[Double],
  price: Option[Double],
  displayQty: Option[Double],
  stopPx: Option[Double],
  pegOffsetValue: Option[Double],
  pegPriceType: Option[String],
  currency: Option[String],
  settlCurrency: Option[String],
  execType: Option[String],
  ordType: Option[String],
  timeInForce: Option[String],
  execInst: Option[String],
  contingencyType: Option[String],
  exDestination: Option[String],
  ordStatus: Option[String],
  triggered: Option[String],
  workingIndicator: Option[Boolean],
  ordRejReason: Option[String],
  simpleLeavesQty: Option[Double],
  leavesQty: Option[Double],
  simpleCumQty: Option[Double],
  cumQty: Option[Double],
  avgPx: Option[Double],
  commission: Option[Double],
  tradePublishIndicator: Option[String],
  multiLegReportingType: Option[String],
  text: Option[String],
  trdMatchID: Option[String],
  execCost: Option[Double],
  execComm: Option[Double],
  homeNotional: Option[Double],
  foreignNotional: Option[Double],
  transactTime: Option[DateTime],
  timestamp: Option[DateTime]
) extends ApiModel


