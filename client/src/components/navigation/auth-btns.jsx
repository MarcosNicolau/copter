import React from "react";
import { useNavContext } from "../shared/states/nav-context";

const AuthBtns = ({ mobileClass }) => {
	const {
		state: { loginColor, registerColor },
	} = useNavContext();
	return (
		<div className="flex-row-center button-container">
			<a className={loginColor} href="https://app.exchangecopter.com/login">
				Acceder
			</a>
			<a
				className={`${registerColor} ${mobileClass}`}
				href="https://app.exchangecopter.com/signup"
			>
				Registrate
			</a>
		</div>
	);
};

export default AuthBtns;
