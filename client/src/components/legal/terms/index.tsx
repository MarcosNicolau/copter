import React from "react";
import LegalTitle from "../../shared/components/background-title";
import GeneralUse from "./general-use";
import Introduction from "./introduction";
import UserAccount from "./user-account";
import Tender from "./tender";
import Wallet from "./wallet";
import Ledger from "./ledger";
import Transactions from "./transactions";
import Buy from "./buy";
import Sell from "./sell";
import Exchange from "./exchange";
import Suspension from "./suspension";
import Prohibited from "./prohibited";
import Rights from "./rights";
import Fees from "./fees";
import Taxes from "./taxes";
import Liability from "./liability";
import Complaints from "./complaints-disputes";
import Amendments from "./amendments";

const Terms = () => {
	return (
		<section>
			<div>
				<LegalTitle>
					Términos y condiciones{" "}
					<span className="break">
						Uso del sitio <span className="font-wght-500">exchangecopter</span>
					</span>
				</LegalTitle>
				<div className="container legal legal__text">
					<Introduction />
					<GeneralUse />
					<UserAccount />
					<Tender />
					<Wallet />
					<Ledger />
					<Transactions />
					<Buy />
					<Sell />
					<Exchange />
					<Suspension />
					<Prohibited />
					<Rights />
					<Fees />
					<Taxes />
					<Liability />
					<Complaints />
					<Amendments />
				</div>
			</div>
		</section>
	);
};

export default Terms;
