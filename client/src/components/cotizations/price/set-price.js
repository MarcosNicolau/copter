import positiveValoration from "../../../assets/miscellaneous/cotizations/positive-valoration.svg";
import negativeValoration from "../../../assets/miscellaneous/cotizations/negative-valoration.svg";

//Sets the price for the selected currency
const setPrice = (state, payload) => {
	const valoration = setValoration(payload.ask, payload.priceChange);
	return {
		...state,
		price: {
			ask: payload.ask,
			bid: payload.bid,
		},
		valoration,
	};
};

//Calculates the valoration and if it is negative or not
const setValoration = (ask, priceChange) => {
	const valoration = ((priceChange * 100) / ask).toFixed(2);
	const rate = valoration > 0 ? `+${valoration}` : `${valoration}`;
	const arrow = valoration > 0 ? positiveValoration : negativeValoration;
	const color = valoration > 0 ? "text-warning-positive" : "text-warning-negative";
	return { rate, arrow, color };
};

export default setPrice;
