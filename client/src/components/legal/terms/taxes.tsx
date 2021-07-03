import React from "react";
import { Point, Text, Clause } from "../content";

const Taxes = () => {
	return (
		<Point title="14. Taxes">
			<Clause>14.1 You are responsible for paying all applicable taxes</Clause>
			<Text>
				It is your responsibility to determine what, if any, taxes you must pay in relation
				to the Transactions and on any of the Digital Currencies you hold in your Digital
				Currency Wallet, or otherwise.
			</Text>
			<Clause>14.2 Copter makes no representations in relation to tax liabilities</Clause>
			<Text>
				Copter makes no representation as to your tax liabilities, or the tax liabilities of
				any other Approved User.
			</Text>
			<Clause>14.3 Copter​ assumes no tax liability to any Approved User</Clause>
			<Text>
				Copter assumes no responsibility for the tax liability of you or any other Approved
				User, not for collecting, reporting, withholding or remitting any taxes arising from
				any Transactions that you may enter into.
			</Text>
		</Point>
	);
};

export default Taxes;
