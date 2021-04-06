import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import chartReducer, { chartActions, chartState } from "./reducer";
import { useCryptoContext } from "../context";
import Error from "../../shared/components/error";

const ChartContext = createContext("");

const useChartContext = () => useContext(ChartContext);

const ChartContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(chartReducer, chartState);
	const {
		state: { abbr },
	} = useCryptoContext();

	const getChartData = async (timestamp, range) => {
		const endpoint = `/get-chart-data`;
		try {
			const res = await axios.post(endpoint, { crypto: abbr, timestamp });
			dispatch({
				type: chartActions.SET_DATA,
				payload: {
					prices: res.data.prices,
					timestamps: res.data.timestamps,
					activeDate: range,
					error: null,
				},
			});
		} catch (err) {
			dispatch({
				type: chartActions.SET_ERROR,
				payload: <Error />,
			});
		}
	};

	return (
		<ChartContext.Provider value={{ getChartData, state, dispatch, chartActions }}>
			{children}
		</ChartContext.Provider>
	);
};

export default ChartContextProvider;
export { useChartContext };
