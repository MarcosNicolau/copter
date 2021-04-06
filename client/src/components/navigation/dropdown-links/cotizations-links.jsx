import React from "react";

const CotizationsLinks = () => {
	return (
		<>
			<li>
				<a className="nav__links" href="/cotizaciones/bitcoin">
					Bitcoin
				</a>
			</li>
			<li>
				<a className="nav__links" href="/cotizaciones/ethereum">
					Ethereum
				</a>
			</li>
			<li>
				<a className="nav__links" href="/cotizaciones/usdc">
					USDC
				</a>
			</li>
			<li>
				<a className="nav__links" href="/cotizaciones/reserve">
					Reserve
				</a>
			</li>
			<li>
				<a className="nav__links" href="/cotizaciones/reserverights">
					Reserve Rights
				</a>
			</li>
		</>
	);
};

export default CotizationsLinks;
