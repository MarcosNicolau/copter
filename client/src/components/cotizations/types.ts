import { Dispatch } from "react";

export type CotizationState = {
	name: string;
	abbr: string;
	initialLogo: string;
	logo: string;
	illustration: string;
	color: string;
};

export interface ActionsStrings {
	[key: string]: string;
}

export type CryptoContext = {
	state: CotizationState;
	dispatch: Dispatch<CotizationActions>;
	cryptoActions: ActionsStrings;
};

export type CotizationActions = { type: "set-crypto"; payload: CotizationState };

export const cotizationInitialState: CotizationState = {
	name: "",
	abbr: "",
	initialLogo: "",
	logo: "",
	illustration: "",
	color: "",
};

export const cryptoContextInitialState: CryptoContext = {
	state: cotizationInitialState,
	dispatch: () => null,
	cryptoActions: {},
};
