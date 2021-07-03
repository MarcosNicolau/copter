import React from "react";
import { useNavContext } from "../shared/states/nav-context";
import dropdownBlue from "../../assets/miscellaneous/navigation/dropdown.svg";
import dropdownLight from "../../assets/miscellaneous/navigation/dropdown-light.svg";

interface Props {
	type: string;
}

const Dropdown: React.FC<Props> = ({ children, type }) => {
	const { isNavLight } = useNavContext();
	return (
		<div className="nav__dropdown">
			{type}
			<img
				src={isNavLight ? dropdownLight : dropdownBlue}
				alt="dropdown"
				className="nav__dropdown__img"
			/>
			<ul className="nav__dropdown__list bg-neutral-920">{children}</ul>
		</div>
	);
};

export default Dropdown;
