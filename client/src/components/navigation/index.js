import React from "react";
import Nav from "./nav.jsx";
import MobileNav from "./mobile-nav.jsx";

const Navigation = () => {
	return (
		<div className="navigation-container">
			<Nav />
			<MobileNav />
		</div>
	);
};

export default Navigation;
