import React, { useEffect, lazy, Suspense } from "react";
import { useCryptoContext } from "./context";
import { usePriceContext } from "./price/context";
import { useExplanationContext } from "./explanation/context";
import { useChartContext } from "./chart/context";
import Price from "./price/price";
const CryptoChart = lazy(() => import("./chart/chart"));
import Explanation from "./explanation/explanation";
import StartOperate from "../shared/components/start-operate";
import LoadingScreen from "../shared/components/loaders/loading-screen";
import { useNavContext } from "../shared/states/nav-context";

const Cotization = ({ cryptoInfo, pricing, explanation, chart }) => {
	const { state: cryptoState, cryptoActions, dispatch: cryptoDispatch } = useCryptoContext();
	const { dispatch: priceDispatch, priceActions } = usePriceContext();
	const { dispatch: explanationDispatch, explanationActions } = useExplanationContext();
	const { state: chartState, getChartData } = useChartContext();
	const { pairs, currency } = pricing;
	const { name, abbr, initialLogo, logo, illustration, color } = cryptoInfo;
	const { setIsNavLight } = useNavContext();
	useEffect(() => setIsNavLight(true), []);

	//Set crypto and its pairs
	useEffect(() => {
		priceDispatch({ type: priceActions.SET_CURRENCY, payload: currency });
		priceDispatch({
			type: priceActions.SET_PAIRS,
			payload: pairs,
		});
	}, [priceDispatch, priceActions, currency, pairs]);

	//Get the chart data only if the crypto is stable
	useEffect(() => {
		if (!cryptoState.abbr || !chart) return;
		getChartData(`${new Date().getFullYear()}-01-01`, chartState.ranges.YEARLY);
	}, [cryptoState.abbr]);

	//Set crypto explanation
	useEffect(() => {
		explanationDispatch({
			type: explanationActions.SET_INFO,
			payload: {
				explanation,
			},
		});
	}, [explanationDispatch, explanationActions, explanation]);

	//Set all the general crypto information
	useEffect(() => {
		cryptoDispatch({
			type: cryptoActions.SET_CRYPTO,
			payload: {
				name,
				abbr,
				initialLogo,
				logo,
				illustration,
				color,
			},
		});
	}, [cryptoDispatch, cryptoActions, cryptoInfo]);

	return (
		<Suspense fallback={<LoadingScreen />}>
			<Price />
			{chart && <CryptoChart />}
			<Explanation />
			<StartOperate />
		</Suspense>
	);
};

export default Cotization;
