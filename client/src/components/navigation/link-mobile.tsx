import React from "react";
import { Link } from "react-router-dom";
import { useNavContext } from "../shared/states/nav-context";

interface Props {
	name: string;
	to: string;
}

const MobileNavLink: React.FC<Props> = ({ name, to }) => {
	return (
		<li>
			<Link to={to} className="mobile-nav-menu__links">
				{name}
			</Link>
		</li>
	);
};

export default MobileNavLink;
