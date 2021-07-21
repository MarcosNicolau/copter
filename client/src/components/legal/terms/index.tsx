import React from "react";
import LegalTitle from "../../shared/components/background-title";
import Normative from "./normative";
import MoneyLaundering from "./money-laundering";
import GeneralUse from "./general-use";
import Taxes from "./taxes";
import Registers from "./registers";
import Complaints from "./complaints-disputes";
import TermsModification from "./terms-modification";

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
					<Normative />
					<Taxes />
					<MoneyLaundering />
					<GeneralUse />					
					<Registers />					
					<Complaints />
					<TermsModification />
				</div>
			</div>
		</section>
	);
};

export default Terms;
