import React from "react";
import bitcoinInitial from "../../../assets/cryptos/initial/bitcoin.svg";
import bitcoinLogo from "../../../assets/cryptos/full/bitcoin.svg";
import bitcoinIllustration from "../../../assets/illustrations/cotization/bitcoin.svg";
import Cotization from "../cotization";
import CryptoContextProvider from "../context";

const BitcoinCotization = () => {
	const cryptoInfo = {
		name: "Bitcoin",
		abbr: "BTC",
		initialLogo: bitcoinInitial,
		logo: bitcoinLogo,
		illustration: bitcoinIllustration,
		color: "#fd9608",
	};
	const pricing = {
		currency: "ARS",
		pairs: [
			{ currency: "ARS", name: "Pesos" },
			{ currency: "USD", name: "Dolares" },
		],
	};
	const explanation = `Bitcoin es una moneda que fue creada en 2009 por una persona desconocida usando el alias Satoshi Nakamoto. 
	Las transacciones se realizan sin intermediarios. El bitcoin no se puede usar físicamente, es una moneda digital. Y está descentralizada, 
	lo que significa que no está controlada por ningún banco o gobierno.`;

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

export default BitcoinCotization;
