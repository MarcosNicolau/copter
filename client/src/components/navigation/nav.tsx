import React from "react";
import { useNavContext } from "../shared/states/nav-context";
import Dropdown from "./dropdown";
import CotizationsLinks from "./dropdown-links/cotizations-links";
import AuthBtns from "./auth-btns";
import NavLink from "./link";
import { Link } from "react-router-dom";
import logoBlue from "../../assets/company/logo.png";
import logoLight from "../../assets/company/logo-light.png";

const Nav = () => {
	const { isNavLight } = useNavContext();

	return (
		<div className="container">
			<nav
				className={`flex-row-between no-wrap nav desktop-nav  ${
					isNavLight ? "text-neutral-1000" : "text-primary-100"
				} `}
			>
				<ul className="flex-row-center">
					<li>
						<Link to="/" className="nav__link">
							<img
								src={isNavLight ? logoLight : logoBlue}
								alt="copter"
								className="nav__logo"
							/>
						</Link>
					</li>
					<li>
						<Dropdown type="Cotizaciones">
							<CotizationsLinks />
						</Dropdown>
					</li>
					<NavLink name="Nosotros" to="/nosotros" />
				</ul>
				<AuthBtns />
			</nav>
		</div>
	);
};

export default Nav;
