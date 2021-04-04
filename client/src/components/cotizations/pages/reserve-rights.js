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
	const explanation = `Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's standard dummy 
    text ever since the 1500s, when an unknown printer took a galley of
     type and scrambled it to make a type specimen book.`;

	return (
		<Cotization cryptoInfo={cryptoInfo} pricing={pricing} explanation={explanation} chart="" />
	);
};

export default ReserveCotization;
