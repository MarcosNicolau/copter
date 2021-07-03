import React, { createContext, useReducer, useContext } from "react";
import cryptoReducer, { cryptoActions } from "./reducer";
import { cotizationInitialState, cryptoContextInitialState } from "./types";
import PriceContextProvider from "./price/context";
import ChartContextProvider from "./chart/context";
import ExplanationContextProvider from "./explanation/context";

const CryptoContext = createContext(cryptoContextInitialState);
const useCryptoContext = () => useContext(CryptoContext);

const CryptoContextProvider: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(cryptoReducer, cotizationInitialState);
	return (
		<CryptoContext.Provider
			value={{
				state,
				dispatch,
				cryptoActions,
			}}
		>
			<PriceContextProvider>
				<ChartContextProvider>
					<ExplanationContextProvider>{children}</ExplanationContextProvider>
				</ChartContextProvider>
			</PriceContextProvider>
		</CryptoContext.Provider>
	);
};

export default CryptoContextProvider;
export { useCryptoContext };
