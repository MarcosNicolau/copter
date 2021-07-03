import { CotizationActions, CotizationState } from "./types";

const cryptoActions = {
	SET_CRYPTO: "set-crypto",
};

const cryptoReducer = (state: CotizationState, action: CotizationActions) => {
	const { name, abbr, initialLogo, logo, illustration, color } = action.payload;
	switch (action.type) {
		case "set-crypto":
			return { ...state, name, abbr, initialLogo, logo, illustration, color };
	}
};

export default cryptoReducer;
export { cryptoActions };
