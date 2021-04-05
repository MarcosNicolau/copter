import React from "react";
import bitcoinSymbol from "../../../assets/cryptos/initial/bitcoin.svg";

const setCurrency = (state, payload) => {
	const currencySymbol = payload === "BTC" ? <img src={bitcoinSymbol} /> : "$";
	return {
		...state,
		currency: {
			abbr: payload,
			symbol: currencySymbol,
		},
		price: {},
		valoration: {},
	};
};

export default setCurrency;
