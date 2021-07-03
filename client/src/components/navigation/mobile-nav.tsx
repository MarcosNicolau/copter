import React, { useCallback, useEffect, useState } from "react";
import { useNavContext } from "../shared/states/nav-context";
import MobileNavMenu from "./mobile-nav-menu";
import logoBlue from "../../assets/company/logo.png";
import logoLight from "../../assets/company/logo-light.png";
import hamburgerBlue from "../../assets/miscellaneous/navigation/hamburguer.svg";
import hamburgerLight from "../../assets/miscellaneous/navigation/hamburguer-light.svg";

const MobileNav = () => {
	const [isNavOpen, setNavOpen] = useState(false);
	const { isNavLight } = useNavContext();
	const closeNav = useCallback(() => setNavOpen((prev) => !prev), []);

	useEffect(() => {
		//Disable scroll on mobile-nav open
		if (isNavOpen) document.body.style.overflowY = "hidden";
		else document.body.style.overflow = "";
	}, [isNavOpen]);

	return (
		<div className="mobile-nav-container container">
			<div className="flex-row-between mobile-nav">
				<a href="/">
					<img
						src={isNavLight ? logoLight : logoBlue}
						alt="copter"
						className="mobile-nav__logo"
					/>
				</a>
				<img
					src={isNavLight ? hamburgerLight : hamburgerBlue}
					alt="open nav"
					onClick={closeNav}
				/>
			</div>
			<MobileNavMenu close={closeNav} isNavOpen={isNavOpen} />
		</div>
	);
};

export default MobileNav;
