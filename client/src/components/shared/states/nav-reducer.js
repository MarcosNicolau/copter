import logoBlue from "../../../assets/company/logo.svg";
import logoLight from "../../../assets/company/logo-light.svg";
import dropdownBlue from "../../../assets/miscellaneous/navigation/dropdown.svg";
import dropdownLight from "../../../assets/miscellaneous/navigation/dropdown-light.svg";
import fullLogoBlue from "../../../assets/company/full-logo.svg";
import fullLogoLight from "../../../assets/company/full-logo-light.svg";
import hamburguerBlue from "../../../assets/miscellaneous/navigation/hamburguer.svg";
import hamburguerLight from "../../../assets/miscellaneous/navigation/hamburguer-light.svg";

const navState = {
	linksColor: "text-neutral-1000",
	linkspseudo: "nav__links--light",
	logo: logoLight,
	fullLogo: fullLogoLight,
	dropdown: dropdownLight,
	hamburguer: hamburguerLight,
	loginColor: "button auth",
	registerColor: "button auth auth--light",
};

const navActions = {
	SET_BLUE_NAV: "set-blue-nav",
};

const navReducer = (state, action) => {
	switch (action.type) {
		case navActions.SET_BLUE_NAV:
			return {
				linksColor: "text-primary-100",
				linkspseudo: "",
				logo: logoBlue,
				fullLogo: fullLogoBlue,
				dropdown: dropdownBlue,
				hamburguer: hamburguerBlue,
				loginColor: "button auth",
				registerColor: "button auth auth--blue",
			};
		default:
			return state;
	}
};

export default navReducer;
export { navState, navActions };
