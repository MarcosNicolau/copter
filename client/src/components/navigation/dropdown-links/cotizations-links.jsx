import React from "react";
import { Link } from "react-router-dom";

const CotizationsLinks = () => {
	return (
		<>
			<li>
				<Link className="nav__links" to="/cotizaciones/bitcoin">
					Bitcoin
				</Link>
			</li>
			<li>
				<Link className="nav__links" to="/cotizaciones/ethereum">
					Ethereum
				</Link>
			</li>
			<li>
				<Link className="nav__links" to="/cotizaciones/usdc">
					USDC
				</Link>
			</li>
			<li>
				<Link className="nav__links" to="/cotizaciones/reserve">
					Reserve
				</Link>
			</li>
			<li>
				<Link className="nav__links" to="/cotizaciones/reserverights">
					Reserve Rights
				</Link>
			</li>
			<li>
				<Link className="nav__links" to="/cotizaciones/stellar">
					Stellar
				</Link>
			</li>
		</>
	);
};

export default CotizationsLinks;
