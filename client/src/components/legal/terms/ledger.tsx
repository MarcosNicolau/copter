import React from "react";
import { Point, Text } from "../content";

const Ledger = () => {
	return (
		<Point title="5. Copter Ledger">
			<Text>
				Copter maintains a private exchange ledger (the Copter Ledger) to track each
				Approved User’s Legal Tender Account balance and the Digital Currencies reflected in
				his or her Digital Currency Wallet.
			</Text>
			<Text>
				Entries in the Copter Ledger are not recorded on a blockchain or otherwise
				published. Only transfers of Digital Currencies into, or transfers of Digital
				Currencies out of, your Digital Currency Wallet will be confirmed and visible on a
				blockchain.
			</Text>
		</Point>
	);
};

export default Ledger;
