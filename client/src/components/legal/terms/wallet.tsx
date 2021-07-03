import React from "react";
import { Point, Text, List, Clause } from "../content";

const Wallet = () => {
	return (
		<Point title="4. Your Digital Currency Wallet">
			<Clause>4.1 Purpose of your Digital Currency Wallet</Clause>
			<Text>
				Your Digital Currency Wallet allows you to send supported Digital Currencies to, and
				to receive and store supported Digital Currencies from, third parties on your
				instructions, using the Services.
			</Text>
			<Clause>4.2 Supported Digital Currencies</Clause>
			<List>
				<li>
					Copter currently supports the list of Digital Currencies reflected on our
					exchange site. However, the nature of the Digital Currencies that Copter
					supports is subject to change, and could change without notice to you if this is
					required as a result of law, any order of a court of governmental agency, any
					change to the operating rules in the underlying Digital Currency ’s network, or
					any technological issue outside of our reasonable control.
				</li>
				<li>
					Copter does not support any other protocols such as metacoins,​ coloured coins,
					side chains, or other derivative, enhanced or forked protocols, tokens or coins
					which supplement or interact with a Digital Currency supported by Copter.
				</li>
			</List>
			<Clause>4.3 Fees</Clause>
			<Text>Copter will charge the Transaction fees.</Text>
			<Text>
				In addition, all Transactions need to be confirmed by ‘miners’ which group
				transactions into ‘blocks’ and add those blocks to the relevant network underlying
				the specific Digital Currency. When making a Digital Currency Deposit, you may need
				to pay the applicable ‘miner fee’ (i.e. network fee) to confirm the transaction on
				the network. To do this, you need to make sure your transaction includes a
				sufficient miner fee to be confirmed. Insufficient fees will delay the processing of
				a Transaction. Copter may charge miner fees to process a Digital Currency withdrawal
				on your behalf. If we do so, Copter will calculate the miner fee in our discretion
				and notify you of the amount of the fee at or before the time you authorize the
				Transaction.
			</Text>
			<Clause>4.4 Operation of your Digital Currency Wallet</Clause>
			<List>
				<li>
					We will send you an email confirmation of all transactions relating to your
					Digital Currency Wallet.
				</li>
				<li>
					Copter securely stores all Digital Currency private keys in our control in a
					combination of online and offline storage. As a result, it may be necessary for
					Copter to retrieve certain information from offline​ storage in order to
					facilitate a Digital Currency Transaction in accordance with your instructions.
					This may delay the initiation or crediting of the relevant Digital Currency
					Transaction for up to 48 hours, or longer in some circumstances.
				</li>
			</List>
			<Clause>4.5 Your confirmations in relation to your Digital Currency Wallet</Clause>
			<List text="You confirm that you understand and accept the following:">
				<li>
					Copter will process your Transactions in accordance with your instructions, and
					you should carefully verify all instructions before placing any Orders. If there
					is an error in those instructions, then that is your risk and Copter does not
					accept any responsibility or liability.
				</li>
				<li>
					When you transact with another Approved User through the Site (a Counterparty),
					there is a risk that the Counterparty may cancel the Transaction before the
					order is executed. You understand that Copter cannot require a Counterparty to
					complete any Transaction and is not responsible for liable for any such
					Counterparty default. If you believe a Counterparty has behaved in a misleading
					or fraudulent manner, or otherwise in breach of these Terms and Conditions,
					please notify us immediately atsupport@exchangecopter.com so that we can
					determine what action, if any, to take.
				</li>
				<li>
					Your Digital Currency Wallet is available only in connection with the Digital
					Currencies that Copter supports at any time, in its discretion. As set out in
					clause 4.3 above, these supported Digital Currencies are subject to change.
					Copter assumes no responsibility or liability for any attempt to use your
					Digital Currency Wallet for Digital Currencies that Copter does not support at
					that time.
				</li>
				<li>
					Copter does not control or own any of the underlying networks or​software
					protocols that govern the operation of the Digital Currencies supported by
					Copter.
				</li>
				<li>
					Copter does not stand behind or underwrite any Transaction you enter into using
					the Copter exchange.
				</li>
				<li>
					A Digital Currency Withdrawal may be delayed as a result of Copter retrieving
					information from offline storage.
				</li>
				<li>
					Copter has the right to refuse to process or to cancel any pending Order or
					Transaction at any time if it is required to do so at law or in response to a
					court or government order, or to enforce transaction limits, or if any
					Suspension Event occurs.
				</li>
				<li>
					Digital Currencies are a risky asset class and trading in Digital Currencies
					increases those risks.
				</li>
				<li>
					The amount or value of the Digital Currencies in your Digital Currency Wallet is
					not guaranteed or underwritten by Copter nor by any other​ person, and you could
					lose the Digital Currencies, or the value of the Digital Currencies, stored in
					your Digital Currency Wallet in a short period of time. In that case, you will
					have no recourse to [​ name of company]​ or to any other person for your loss
					(including loss of profit), or any liability or inconvenience that results.
				</li>
			</List>
		</Point>
	);
};

export default Wallet;
