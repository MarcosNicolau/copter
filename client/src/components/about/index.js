import React, { useEffect } from "react";
import { useNavContext } from "../shared/states/nav-context";
import WhoWeAre from "./who-we-are.jsx";
import OurTeam from "./our-team.jsx";
import Reviews from "./reviews.jsx";
import CTA from "./cta.jsx";

const About = () => {
	const { dispatch, navActions } = useNavContext();
	useEffect(() => dispatch({ type: navActions.SET_BLUE_NAV }), [dispatch, navActions]);

	return (
		<>
			<WhoWeAre />
			<OurTeam />
			<Reviews />
			<CTA />
		</>
	);
};

export default About;
