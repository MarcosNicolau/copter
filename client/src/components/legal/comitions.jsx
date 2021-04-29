import React from "react";

const Comitions = () => {
	return (
		<div className="legal__list">
			<h3>Comisiones: </h3>
			<ul>
				<h5>Depositos:</h5>
				<li>USD: 5.1%</li>
			</ul>
			<ul>
				<h5>Trading:</h5>
				<li>Mínimo para operar: 0.001 BTC o su equivalente</li>
				<li>Pares con ARS: 2%</li>
				<li>Pares con cripto/cripto: 0.5%</li>
				<li>Pares con USD: 1.37%</li>
			</ul>
			<ul>
				<h5>Retiros:</h5>
				<li>USD & ARS: 0.6%</li>
				<li>BTC: 0.0004</li>
				<li>USDC & RSV: 20</li>
				<li>ETH: 0.007</li>
				<li>RSR: 250</li>
			</ul>
		</div>
	);
};

export default Comitions;
