import React from "react";
import initial from "../../../assets/cryptos/initial/rsr.svg";
import logo from "../../../assets/cryptos/full/rsr.svg";
import illustration from "../../../assets/illustrations/cotization/rsr.svg";
import Cotization from "../cotization";

const ReserveCotization = () => {
	const cryptoInfo = {
		name: "Reserve Rights",
		abbr: "RSR",
		initialLogo: initial,
		logo: logo,
		illustration: illustration,
		color: "#000",
	};
	const pricing = {
		currency: "ARS",
		pairs: [
			{ currency: "ARS", name: "Pesos" },
			{ currency: "BTC", name: "Bitcoin" },
		],
	};
	const explanation = `Reserve Rights es una plataforma de moneda estable de doble token que se lanzó en mayo de 2019. 
	La configuración de doble token de Reserve Rights incluye una moneda estable conocida como Reserve stablecoin (RSV), 
	que está respaldada por una canasta de activos administrados por contratos inteligentes. El segundo token es Reserve Rights (RSR), 
	que se utiliza para mantener el RSV estable en su precio objetivo de 1.00 dolar a través de un 
	sistema de oportunidades de arbitraje. A diferencia de RSV, e RSR es volátil y su objetivo principal 
	es ayudar a mantener la estabilidad de RSV.`;

	return (
		<Cotization cryptoInfo={cryptoInfo} pricing={pricing} explanation={explanation} chart="" />
	);
};

export default ReserveCotization;
