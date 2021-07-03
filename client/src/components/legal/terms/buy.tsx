import React from "react";
import { Point, Text, List, Clause } from "../content";

const Buy = () => {
	return (
		<Point title="7. Buy Transactions">
			<Clause>7.1 Nature of a Buy Transaction</Clause>
			<List text="All Buy Transactions:">
				<li>
					involve the purchase of supported Digital Currencies with Currency from your
					Currency Account at the Market Rate; and
				</li>
				<li>
					settle immediately, provided a sufficient amount of Currency has been pre-loaded
					to your Legal Tender Account; and
				</li>
				<li>are recorded on our Copter&apos;s Ledger.</li>
			</List>
			<List text="7.2 Buy Transaction process">
				<li>
					You can place an order to buy Digital Currency (a Buy Order) on the
					Copter&apos;s​ Exchange. By doing so, you authorize Copter to initiate debits
					from the applicable Copter&apos;s​ Wallet and initiate a transfer to your
					Digital Currency Wallet.
				</li>
				<li>
					When you place a Buy Order, the full amount of purchase price and associated
					fees in Currency will be placed on hold or marked as pending in your Legal
					Tender Account. This means you cannot withdraw or use those funds for any other
					purpose until the Buy Transaction settles, expires or is cancelled.
				</li>
				<li>
					After your Buy Order has been placed, we will send you an email when it has
					completed, or if it has only been partially filled, as applicable.
				</li>
				<li>
					We will use all reasonable efforts to fulfil any Buy Order. However, if we
					cannot fulfil your Buy Order, we may notify you by email and seek your order to
					fulfil the Buy Order at the Market Price.
				</li>
				<li>
					Copter reserves the right to unilaterally cancel any unfilled portion of any Buy
					Order that changes the best bid or best offer by more than twenty percent (20%)
					in either direction, or is otherwise clearly erroneous.
				</li>
			</List>
			<Clause>7.3 Buy Limits</Clause>
			<List>
				You can enter a Stop Limit or an Order Limit for your Buy Transaction on the
				Copter&apos;s Exchange dashboard.
			</List>
			<Clause>7.4 Partial completion</Clause>
			<Text>
				If a Buy Transaction order only partially fills, the amount of Currency required to
				settle the balance (including fees) will remain on hold until the remaining Buy
				Order is filled, expires, or is cancelled.
			</Text>
			<Clause>7.5 Your confirmations in relation to Buy Transactions</Clause>
			<List text="In placing any Buy Order or entering into any Buy Transaction, you confirm your understanding of, and your agreement to, the following">
				<li>
					It is your responsibility to confirm the Buy Transaction details are accurate,
					including the number of Digital Currencies you intend to buy, the amount of any
					fees, the gross purchase price for your Buy Order, and the amount and nature of
					the Digital Currencies to be transferred into your Digital Currency Wallet after
					completion
				</li>
				<li>
					Once placed, a Buy Order cannot be revoked; it can only be cancelled by
					submitting a separate cancellation request
				</li>
				<li>
					It is solely your responsibility to cancel any Buy Order (or part of Buy Order)
					that you do not want filled
				</li>
				<li>
					If you place a Buy Order, there is a risk that it will be filled (in whole or
					part) if you have a positive balance in your Legal Tender Account before any
					cancellation request is received
				</li>
				<li>
					Copter has no liability or responsibility to you in the above​ circumstances.
					(This does not limit the other terms in these Terms and Conditions)
				</li>
			</List>
		</Point>
	);
};

export default Buy;
