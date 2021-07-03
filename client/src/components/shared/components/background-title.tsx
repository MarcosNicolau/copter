import React, { useEffect } from "react";
import { useNavContext } from "../states/nav-context";

const LegalTitle: React.FC = ({ children }) => {
	const { setIsNavLight } = useNavContext();
	useEffect(() => setIsNavLight(false), [setIsNavLight]);

	return (
		<div className="bg-primary-100 text-neutral-1000 text-center legal__title flex-column-center">
			<h2 className="font-wght-300">{children}</h2>
		</div>
	);
};

export default LegalTitle;
