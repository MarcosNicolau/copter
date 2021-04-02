import React from "react";
import LegalTitle from "./legal-title";
import Conditions from "./conditions";
import Limits from "./limits";
import Comitions from "./comitions";

const Terms = () => {
	return (
		<section>
			<div>
				<LegalTitle>
					Terminos y condiciones{" "}
					<span className="break">
						Uso del sitio <span className="font-wght-500">exchangecopter.com</span>
					</span>
				</LegalTitle>
				<div className="container legal__text">
					<Conditions />
					<Limits />
					<Comitions />
				</div>
			</div>
		</section>
	);
};

export default Terms;
