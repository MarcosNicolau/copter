import React from "react";
import CotizationsLinks from "./dropdown-links/cotizations-links";
import AuthBtns from "./auth-btns";
import closeIcon from "../../assets/miscellaneous/navigation/close.svg";
import logoLight from "../../assets/company/logo-light.svg";
import MobileNavLink from "./link-mobile";

interface Props {
	isNavOpen: boolean;
	close: () => void;
}

const MobileNavMenu: React.FC<Props> = ({ isNavOpen, close }) => {
	return (
		<div
			className={`mobile-nav-menu bg-primary-100 text-neutral-1000 ${
				isNavOpen ? "mobile-nav-menu--show" : "mobile-nav-menu--hide"
			}`}
		>
			<div className="flex-row-between container mobile-nav-menu__top">
				<img src={logoLight} alt="copter" className="nav__logo" />
				<img src={closeIcon} alt="close" onClick={close} className="padding-100" />
			</div>
			<ul className="mobile-nav-menu__links-container">
				<MobileNavLink name="Inicio" to="/" />
				<MobileNavLink name="Nosotros" to="/nosotros" />
				<MobileNavLink name="Límites y comisiones" to="/legal/limites-comisiones" />
				<ul className="mobile-nav-menu__dropdown-links">
					<h5>Cotizaciones: </h5>
					<CotizationsLinks />
				</ul>
			</ul>
			<AuthBtns mobileClass="mobile-nav-menu__auth--register" />
		</div>
	);
};

export default MobileNavMenu;
