import React, { createContext, useContext, useEffect, useReducer } from "react";
import priceReducer, { priceState, priceActions } from "./reducer";
import { useCryptoContext } from "../context";
import axios from "axios";
import Error from "../../shared/components/error";

const PriceContext = createContext("");
const usePriceContext = () => useContext(PriceContext);

const PriceContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(priceReducer, priceState);
	const {
		state: { abbr },
	} = useCryptoContext();

	const getPriceData = async () => {
		const endpoint = `/get-price-data`;
		try {
			const res = await axios.post(endpoint, { cryptoPair: `${abbr}${state.currency.abbr}` });
			const data = res.data;
			if (!data) return;
			dispatch({
				type: priceActions.SET_PRICE,
				payload: { ask: data.ask, bid: data.bid, priceChange: data.price_24h_change },
			});
		} catch (err) {
			dispatch({
				type: priceActions.SET_ERROR,
				payload: <Error />,
			});
		}
	};

	//Gets the pricing everytime the currency changes and sets an interval.
	useEffect(() => {
		if (!abbr || !state.currency.abbr) return;
		getPriceData();
		if (window.priceInterval) window.clearInterval(window.priceInterval);
		window.priceInterval = window.setInterval(getPriceData, [10000]);
	}, [state.currency]);

	return (
		<PriceContext.Provider value={{ state, dispatch, priceActions, getPriceData }}>
			{children}
		</PriceContext.Provider>
	);
};

export default PriceContextProvider;
export { usePriceContext };
