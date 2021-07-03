import React from "react";
import Limits from "./limits";
import Comitions from "./comitions";
import LegalTitle from "../../shared/components/background-title";

const LimitsComitions = () => {
	return (
		<section>
			<div>
				<LegalTitle>Límites y comisiones</LegalTitle>
				<div className="container legal__text">
					<Limits />
					<Comitions />
				</div>
			</div>
		</section>
	);
};

export default LimitsComitions;
