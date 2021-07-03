import React from "react";
import { Point, Clause, List, Text } from "../content";

const Tender = () => {
	return (
		<Point title="3. Your Legal Tender Account">
			<Clause>3.1 Purpose of your Legal Tender Account</Clause>
			<Text>
				You can use your Legal Tender Account to fund the purchase of Digital Currencies,
				and to receive the proceeds of sale of your Digital Currencies, using the Services.
			</Text>
			<Clause>3.2 Activating your Legal Tender Account</Clause>
			<List text="To activate your Legal Tender Account, you must:">
				<li>link it to a registered bank account in your name; and</li>
				<li>
					transfer funds from that bank account to the ​HMC Ventures Ltd”s ​ Custodial
					Bank Account which will then be reflected by an update to the balance of your
					Legal Tender Account
				</li>
			</List>
			<Clause>3.3 Currency</Clause>
			<Text>
				The only Legal Tender which can currently be held in your Legal Tender Account is
				South African Rand.
			</Text>
			<Clause>3.4 Fees</Clause>
			<Text>
				Copter will not charge any fees in relation to deposits into or withdrawals from the
				Copter Custodial Bank Account.
			</Text>
		</Point>
	);
};

export default Tender;
