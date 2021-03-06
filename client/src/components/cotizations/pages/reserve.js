import React from "react";
import initial from "../../../assets/cryptos/initial/rsv.svg";
import illustration from "../../../assets/illustrations/cotization/rsv.svg";
import CryptoContextProvider from "../context";
import Cotization from "../cotization";
import logo from "../../../assets/cryptos/full/rsv.svg";

const ReserveCotization = () => {
	const cryptoInfo = {
		name: "Reserve",
		abbr: "RSV",
		initialLogo: initial,
		logo,
		illustration: illustration,
		color: "#000",
	};
	const pricing = {
		currency: "ARS",
		pairs: [{ currency: "ARS", name: "Pesos" }],
	};
	const explanation = `Reserve es una moneda estable y global (stablecoin) sumada a un sistema de pagos digitales 
	para personas y empresas en países con alta inflación. Reserve permite que personas y empresas en paises con 
	alta inflacion, protejan su dinero. Ademas, es una criptomoneda que incrementa la rentabilidad del envio de dinero transfronterizo.`;

	return (
		<CryptoContextProvider>
			<Cotization
				cryptoInfo={cryptoInfo}
				pricing={pricing}
				explanation={explanation}
				chart="true"
			/>
		</CryptoContextProvider>
	);
};

export default ReserveCotization;
