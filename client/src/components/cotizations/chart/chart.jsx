import React, { useEffect, useRef, lazy, Suspense } from "react";
import { useChartContext } from "./context";
import { useCryptoContext } from "../context";
import chartConfig from "./chart-config";
import ChangeDateBtn from "./change-date-btn";
import DotsLoader from "../../shared/components/loaders/dots-loader";
const Chart = lazy(() => import("react-apexcharts"));

const CryptoChart = () => {
	const {
		state: {
			data: { prices },
			ranges,
			error,
		},
	} = useChartContext();

	const {
		state: { name, logo, color },
	} = useCryptoContext();
	//Using a ref and not an state becuase it causes a re-render and the chart bugs
	const datapoint = useRef();
	const chart = chartConfig(datapoint);

	//Set a default value for the datapoint
	useEffect(() => {
		if (!prices) return;
		datapoint.current.innerText = prices.length ? `$ ${prices[prices.length - 1]}` : "-";
	}, [prices, datapoint.currentt]);

	return (
		<Suspense fallback={<DotsLoader />}>
			<section>
				<div className="container flex-column-center">
					<h4 className="title chart__title">La cotización de {name} en un gráfico</h4>
					<div className="chart text-neutral-200">
						<div className="flex-row align-center chart__legend">
							<img src={logo} alt={`${name}-logo`} />
							<h5>{name}</h5>
						</div>
						<div className="flex-column-center">
							<h5>Valoración:</h5>
							{prices && prices.length ? null : <DotsLoader color={color} />}
							<h4 ref={datapoint}></h4>
						</div>
						<div className="flex-row chart__timestamps">
							<ChangeDateBtn name="Anual" range={ranges.YEARLY} />
							<ChangeDateBtn name="Mensual" range={ranges.MONTHLY} />
							<ChangeDateBtn name="Semanal" range={ranges.WEEKLY} />
						</div>
						<Chart
							options={chart.options}
							series={chart.series}
							type="area"
							width="100%"
							height="100%"
						/>
					</div>
					{error && error}
				</div>
			</section>
		</Suspense>
	);
};

export default CryptoChart;
