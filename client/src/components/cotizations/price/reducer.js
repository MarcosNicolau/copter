import setPrice from "./set-price";
import setCurrency from "./set-currency";

const priceState = {
	price: {
		ask: undefined,
		bid: undefined,
		priceChange: undefined,
	},
	valoration: {
		rate: undefined,
		arrow: undefined,
		color: undefined,
	},
	currency: {
		abbr: undefined,
		symbol: undefined,
	},
	pairs: [],
	error: null,
};

const priceActions = {
	SET_CURRENCY: "set-selected-currency",
	SET_PAIRS: "set-pairs",
	SET_PRICE: "set-price",
	SET_ERROR: "set-error",
};

const priceReducer = (state, action) => {
	const payload = action.payload;
	switch (action.type) {
		case priceActions.SET_PRICE:
			return setPrice(state, payload);
		case priceActions.SET_PAIRS:
			return { ...state, pairs: payload };
		case priceActions.SET_CURRENCY:
			return setCurrency(state, payload);
		case priceActions.SET_ERROR:
			return { ...state, error: payload };
		default:
			return state;
	}
};

export default priceReducer;
export { priceState, priceActions };
