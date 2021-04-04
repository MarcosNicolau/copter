import React from "react";
import { useExplanationContext } from "./context";
import { useCryptoContext } from "../context";
import ContentImg from "../../shared/components/content-img";

const Explanation = () => {
	const {
		state: { explanation },
	} = useExplanationContext();
	const {
		state: { illustration, name },
	} = useCryptoContext();
	return (
		<section>
			<div className="space">
				<ContentImg illustration={illustration}>
					<h2 className="title">Que es {name}?</h2>
					<p>{explanation}</p>
				</ContentImg>
			</div>
		</section>
	);
};

export default Explanation;
