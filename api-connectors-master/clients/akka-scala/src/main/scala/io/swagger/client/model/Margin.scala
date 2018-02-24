/**
 * NOTE: This class is auto generated by the akka-scala (beta) swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * For any issue or feedback, please open a ticket via https://github.com/swagger-api/swagger-codegen/issues/new
 */

package io.swagger.client.model

import io.swagger.client.core.ApiModel
import org.joda.time.DateTime
import java.util.UUID

case class Margin (
  account: Double,
  currency: String,
  riskLimit: Option[Double],
  prevState: Option[String],
  state: Option[String],
  action: Option[String],
  amount: Option[Double],
  pendingCredit: Option[Double],
  pendingDebit: Option[Double],
  confirmedDebit: Option[Double],
  prevRealisedPnl: Option[Double],
  prevUnrealisedPnl: Option[Double],
  grossComm: Option[Double],
  grossOpenCost: Option[Double],
  grossOpenPremium: Option[Double],
  grossExecCost: Option[Double],
  grossMarkValue: Option[Double],
  riskValue: Option[Double],
  taxableMargin: Option[Double],
  initMargin: Option[Double],
  maintMargin: Option[Double],
  sessionMargin: Option[Double],
  targetExcessMargin: Option[Double],
  varMargin: Option[Double],
  realisedPnl: Option[Double],
  unrealisedPnl: Option[Double],
  indicativeTax: Option[Double],
  unrealisedProfit: Option[Double],
  syntheticMargin: Option[Double],
  walletBalance: Option[Double],
  marginBalance: Option[Double],
  marginBalancePcnt: Option[Double],
  marginLeverage: Option[Double],
  marginUsedPcnt: Option[Double],
  excessMargin: Option[Double],
  excessMarginPcnt: Option[Double],
  availableMargin: Option[Double],
  withdrawableMargin: Option[Double],
  timestamp: Option[DateTime],
  grossLastValue: Option[Double],
  commission: Option[Double]
) extends ApiModel


