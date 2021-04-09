import React from "react";
import LegalTitle from "./legal-title";
import Conditions from "./conditions";

const Terms = () => {
	return (
		<section>
			<div>
				<LegalTitle>
					Terminos y condiciones{" "}
					<span className="break">
						Uso del sitio <span className="font-wght-500">exchangecopter</span>
					</span>
				</LegalTitle>
				<div className="container legal__text">
					<Conditions />
				</div>
			</div>
		</section>
	);
};

export default Terms;
