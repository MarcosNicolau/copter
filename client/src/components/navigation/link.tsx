import React from "react";
import { Link } from "react-router-dom";
import { useNavContext } from "../shared/states/nav-context";

interface Props {
	name: string;
	to: string;
}

const NavLink: React.FC<Props> = ({ name, to }) => {
	const { isNavLight } = useNavContext();

	return (
		<li>
			<Link to={to} className={`nav__links ${isNavLight && "nav__links--light"}`}>
				{name}
			</Link>
		</li>
	);
};

export default NavLink;
