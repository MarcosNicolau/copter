import React, { useEffect, useState } from "react";
import { useNavContext } from "../shared/states/nav-context";
import MobileNavMenu from "./mobile-nav-menu.jsx";

const MobileNav = () => {
	const [isNavOpen, setNavOpen] = useState(false);
	const {
		state: { fullLogo, hamburguer },
	} = useNavContext();
	const setNavState = () => setNavOpen((prev) => !prev);

	//Disable scroll on mobile-nav open
	useEffect(() => {
		if (isNavOpen) return (document.body.style.overflowY = "hidden");
		document.body.style.overflow = "";
	}, [isNavOpen]);

	return (
		<div className="mobile-nav-container container">
			<div className="flex-row-between mobile-nav">
				<a href="/">
					<img src={fullLogo} alt="logo" className="mobile-nav__logo" />
				</a>
				<img src={hamburguer} alt="open nav" onClick={setNavState} />
			</div>
			<MobileNavMenu setNavState={setNavState} isNavOpen={isNavOpen} />
		</div>
	);
};

export default MobileNav;
