import React, { useEffect } from "react";
import LegalTitle from "../shared/components/background-title";
import { useNavContext } from "../shared/states/nav-context";
import QuestionsWrapper from "./questions-wrapper";

const FAQ = () => {
	const { setIsNavLight } = useNavContext();
	useEffect(() => setIsNavLight(false), [setIsNavLight]);
	return (
		<section>
			<LegalTitle>Centro de ayuda</LegalTitle>
			<div className="container">
				<div className="help">
					<h3 className="help__title">Ayuda</h3>
					<QuestionsWrapper />
				</div>
			</div>
		</section>
	);
};

export default FAQ;
