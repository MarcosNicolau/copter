import React from "react";
import { Clause, Point, List, Text } from "../content";

const Transactions = () => {
	return (
		<Point title="6. Copter Transactions">
			<Clause>6.1 Transaction Services</Clause>
			<List text="Copter offers Approved Users the ability to enter into the following Transactions in accordance with these Terms and Conditions:">
				<li>Buy Transactions</li>
				<li>Sell Transactions;</li>
				<li>Exchange Transactions.</li>
			</List>
			<Text>
				Copter does not currently offer any margin trading, options trading, or shorting.
			</Text>
			<Text>
				Copter does not make any warranty or representation in relation to any Counterparty
				and cannot confirm that a Counterparty will perform its Transaction obligations.
			</Text>
			<Text>
				Please note: A Transaction is not complete while it is in a pending state. Funds
				associated with Transactions that are in a pending state will be designated as such
				and will not be available to conduct other Transactions (including withdrawals).
			</Text>
			<Clause>6.2 Access to Transaction Services</Clause>
			<Text>
				We can impose any conditions or restrictions on your access to the Transaction
				Services at any time without prior notice. These may include limits on the number or
				value of Transactions.
			</Text>
			<Clause>6.3 Transaction Limits</Clause>
			<Text>
				We may impose Transaction limits from time to time. In particular, we reserve the
				right to review any withdrawals and to request further information before releasing
				funds for regulatory and fraud prevention purposes.
			</Text>
			<Clause>6.4 Cancellation of Transactions</Clause>
			<Text>
				You cannot revoke or cancel an Order once you have placed it. However, you can
				submit a request to cancel the Transaction to which that Order relates by clicking
				on the ‘Cancel Sells’ or ‘Cancel Buys’ or ‘Cancel All’ button (as appropriate) on
				the ​Copter&apos;s Exchange dashboard (a Cancellation Request).
			</Text>
			<Text>
				The Cancellation Request will only be effective if you submit it before the Order is
				filled.
			</Text>
			<List text="However, Copter can unilaterally cancel any Transaction if:">
				<li>
					it considers this necessary or prudent due to a suspicion that the Transaction
					involves money laundering, terrorist financing or another illegal activity;
				</li>
				<li>it relates to a Prohibited Use; or</li>
				<li>it is required to do so by a court order or government agency.</li>
			</List>
			<Clause>6.5 Transaction Records</Clause>
			<Text>
				Copter maintains the records of these offers in our Order Book. When Copter’s
				trading engine matches buy and sell offers in our order book, we record the trade on
				our Copter Ledger. This transfers ownership of the seller’s traded Digital
				Currencies to the relevant buyer.
			</Text>
		</Point>
	);
};

export default Transactions;
