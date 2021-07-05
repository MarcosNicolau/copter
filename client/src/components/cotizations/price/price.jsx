import React from "react";
import { usePriceContext } from "./context";
import { useCryptoContext } from "../context";
import DotsLoader from "../../shared/components/loaders/dots-loader";
import { OTCText } from "../otc-text";

const Price = () => {
	const {
		state: { name, initialLogo, abbr },
	} = useCryptoContext();
	const {
		state: {
			valoration: { rate, arrow, color },
			price: { ask, bid },
			pairs,

			error,
			currency,
		},
		dispatch,
		priceActions,
	} = usePriceContext();
	const updateCurrency = (e) =>
		dispatch({
			type: priceActions.SET_CURRENCY,
			payload: e.target.value,
		});

	console.log(currency);

	return (
		<section>
			<div className="price">
				<div className="price__background"></div>
				<div className="large-container flex-row-center price__container view-100">
					<img src={initialLogo} alt="crypto" className="price__crypto-logo" />
					<div className="flex-column-center">
						<div className="price__title">
							<h2>Cotización {name}</h2>
							<h5>El valor de {name} en tiempo real</h5>
						</div>
						<div className="flex-row-center price__prices">
							<div>
								<h5>Compra</h5>
								<h1>
									{currency.symbol}
									{ask ? ask : <DotsLoader />}
								</h1>
							</div>
							<div>
								<h5>Venta</h5>
								<h1>
									{currency.symbol}
									{bid ? bid : <DotsLoader />}
								</h1>
							</div>
							<div>
								<h5>Valoración</h5>
								<div className="flex-row-center">
									<h1 className={color}>{rate ? rate : <DotsLoader />}</h1>
									{arrow && <img src={arrow} alt="valoration" />}
								</div>
							</div>
						</div>

						<h5>Moneda</h5>
						<select
							name="currency"
							className="price__currency-selection"
							onChange={updateCurrency}
						>
							{pairs.map((pair, index) => (
								<option value={pair.currency} key={index}>
									{pair.name}
								</option>
							))}
						</select>
						{error && error}
						<p className="text-neutral-1000 fs-500">
							{OTCText[`${abbr}${currency.abbr}`]}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Price;
