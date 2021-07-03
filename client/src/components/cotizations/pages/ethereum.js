import React from "react";
import initial from "../../../assets/cryptos/initial/ethereum.svg";
import logo from "../../../assets/cryptos/full/ethereum.svg";
import illustration from "../../../assets/illustrations/cotization/ethereum.svg";
import Cotization from "../cotization";
import CryptoContextProvider from "../context";

const EthereumCotization = () => {
	const cryptoInfo = {
		name: "Ethereum",
		abbr: "ETH",
		initialLogo: initial,
		logo: logo,
		illustration: illustration,
		color: "#3d3d3e",
	};
	const pricing = {
		currency: "BTC",
		pairs: [{ currency: "BTC", name: "Bitcoin" }],
	};
	const explanation = `La plataforma Ethereum fue creada en 2015 por el programador Vitalik Buterin, 
	con la perspectiva de crear un instrumento para aplicaciones descentralizadas y colaborativas. Ether (ETH), su criptomoneda nativa, 
	es un token que puede ser utilizado en transacciones que usen este software. Como bitcoin, ether existe 
	como parte de un sistema financiero autónomo de pares, libre de intervención gubernamental. 
	También como bitcoin, el valor de ether se disparó en un corto periodo de tiempo.`;

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

export default EthereumCotization;
