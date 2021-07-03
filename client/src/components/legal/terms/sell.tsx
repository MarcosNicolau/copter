import React from "react";
import { Point, Text, Clause, List } from "../content";

const Sell = () => {
	return (
		<Point title="8. Sell Transactions">
			<Clause>8.1 Nature of a Sell Transaction</Clause>
			<List text="All Market Sell Transactions:">
				<li>
					involve the sale of supported Digital Currencies for Currency at the Market
					Price;
				</li>
				<li>settle immediately from a pre-funded Digital Currency Wallet; and</li>
				<li>are recorded on our Copter Ledger.</li>
			</List>
			<Clause>8.2 Sell Transaction process</Clause>
			<List>
				<li>
					You can place an order to sell Digital Currency (a Sell Order) on the Copter
					Exchange. By doing so, you authorise ​HMC Ventures Ltd to initiate debits from
					your applicable Digital Currency Wallet and initiate a transfer to the
					applicable Copter&apos;s Wallet.
				</li>
				<li>
					When you place a Sell Order, the full amount of Digital Currencies offered for
					sale are placed on hold in your Digital Currency Wallet. This means you cannot
					deal with those Digital Currencies for any other purpose until the Sell
					Transaction settles, expires or is cancelled. Any fees associated with the Sell
					Transaction will be deducted by Copter from the sale proceeds before they appear
					in your Legal Tender Account.
				</li>
				<li>
					After you have placed your Sell Order, we will send you an email when it has
					completed, or if it has only been partially filled, as applicable.
				</li>
				<li>
					Copter ​reserves the right to unilaterally cancel any unfilled portion of any
					Sell Order that changes the best bid or best offer by more than twenty percent
					(20%) in either direction, or is otherwise clearly erroneous.
				</li>
			</List>
			<Clause>8.3 Sell Limits</Clause>
			<Text>
				You can enter a Stop Limit or an Order Limit for your Sell Transaction on the
				Copter&apos;s Exchange dashboard.
			</Text>
			<Clause>8.4 Partial completion</Clause>
			<Text>
				Until the Sell Order fills, expires or is cancelled, the value of the Digital
				Currencies being offered for sale will not be available to be used for any other
				purpose, including other sell orders or withdrawals. For partially filled sell
				orders, the unfilled portion of Digital Currencies offered for sale will remain on
				hold until the remaining sell order is filled, expires, or is cancelled.
			</Text>
			<Clause>8.5 Your confirmations in relation to Sell Transactions</Clause>
			<List text="In placing any Sell Order or entering into any Buy Transaction, you confirm your understanding of, and agreement to, the following:">
				<li>
					It is your responsibility to confirm the Sell Transaction details are accurate,
					including the number of Digital Currencies you intend to sell, the amount of any
					fees, the gross sale price, and the net sale proceeds to be transferred to your
					Legal Tender Account
				</li>
				<li>
					Once placed, a sell order cannot be revoked and is only able to be cancelled by
					submitting a separate cancellation request
				</li>
				<li>
					It is solely your responsibility to cancel any Sell Order (or part of any Sell
					Order) that you do not want filled
				</li>
				<li>
					If you place a Sell Order, then there is a risk that it will be filled (in whole
					or part) if you have Digital Currencies in your Digital Currency Wallet before
					any cancellation request is received
				</li>
				<li>
					Copter ​has no liability or responsibility to you in the above circumstances.
					(This does not limit the other terms in these Terms and Conditions)
				</li>
			</List>
		</Point>
	);
};

export default Sell;
