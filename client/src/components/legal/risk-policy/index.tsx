import React from "react";
import LegalTitle from "../../shared/components/background-title";
import Issuer from "./issuer";
import PrivateKey from "./private-key";
import Guarantee from "./guarantee";
import Document from "./document";
import TermsChange from "./terms-change";
import YourRisk from "./your-risk";

const RiskPolicy = () => {
	return (
		<section>
			<LegalTitle>Política de riesgo</LegalTitle>
			<div className="container legal legal__text">
				<Issuer />
				<PrivateKey />
				<Guarantee />
				<Document />
				<TermsChange />
				<YourRisk />
			</div>
		</section>
	);
};

export default RiskPolicy;
