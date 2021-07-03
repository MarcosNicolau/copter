import React from "react";
import { useNavContext } from "../shared/states/nav-context";

interface Props {
	mobileClass?: string;
}

const AuthBtns: React.FC<Props> = ({ mobileClass }) => {
	const { isNavLight } = useNavContext();

	return (
		<div className="flex-row-center button-container">
			<a className={`button auth`} href="https://app.exchangecopter.com/login">
				Acceder
			</a>
			<a
				className={`button auth ${isNavLight ? "auth--light" : "auth--blue"}`}
				href="https://app.exchangecopter.com/signup"
			>
				Registrate
			</a>
		</div>
	);
};

export default AuthBtns;
