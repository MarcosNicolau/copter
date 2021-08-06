import React from "react";
import { useNavContext } from "../shared/states/nav-context";

interface Props {
	mobileClass?: string;
}

const AuthBtns: React.FC<Props> = ({ mobileClass }) => {
	const { isNavLight } = useNavContext();

	return (
		<div className="flex-row-center button-container">
			<a className={`button auth`} href="https://auth.exchangecopter.com">
				Acceder
			</a>
			<a
				className={`button auth ${
					mobileClass ? mobileClass : isNavLight ? "auth--light" : "auth--blue"
				} `}
				href="https://auth.exchangecopter.com/registrarse"
			>
				Registrate
			</a>
		</div>
	);
};

export default AuthBtns;
