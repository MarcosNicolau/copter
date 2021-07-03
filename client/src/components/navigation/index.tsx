import React from "react";
import Nav from "./nav";
import MobileNav from "./mobile-nav";

const Navigation = () => {
	return (
		<div className="navigation-container">
			<Nav />
			<MobileNav />
		</div>
	);
};

export default Navigation;
