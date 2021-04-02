import React, { useEffect } from "react";
import { useNavContext } from "../shared/states/nav-context";

const LegalTitle = ({ children }) => {
	const { dispatch, navActions } = useNavContext();
	useEffect(() => dispatch({ type: navActions.SET_BLUE_NAV }), [dispatch, navActions]);

	return (
		<div className="bg-primary-100 text-neutral-1000 text-center legal__title flex-column-center">
			<h2 className="font-wght-300">{children}</h2>
		</div>
	);
};

export default LegalTitle;
