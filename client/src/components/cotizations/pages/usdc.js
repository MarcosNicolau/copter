import React from "react";
import initial from "../../../assets/cryptos/initial/usdc.svg";
import illustration from "../../../assets/illustrations/cotization/usdc.svg";
import Cotization from "../cotization";

const USDCCotization = () => {
	const cryptoInfo = {
		name: "USDC",
		abbr: "USDC",
		initialLogo: initial,
		illustration: illustration,
		color: "#2675c9",
	};
	const pricing = {
		currency: "USD",
		pairs: [{ currency: "USD", name: "Dolares" }],
	};
	const explanation = `USD Coin (conocida por su símbolo USDC) es una stablecoin que está vinculada al dólar 
    estadounidense en una base de 1:1. Todas las unidades de esta criptomoneda en circulación están respaldadas por 
    $1 que se mantienen en reserva, en una combinación de efectivo y bonos del Tesoro de Estados Unidos a corto plazo. 
    El consorcio The Centre, que está detrás de este activo, dice que la USDC es emitida por instituciones financieras reguladas.`;

	return (
		<Cotization cryptoInfo={cryptoInfo} pricing={pricing} explanation={explanation} chart="" />
	);
};

export default USDCCotization;
