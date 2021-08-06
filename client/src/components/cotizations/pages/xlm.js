import React from "react";

import logo from "../../../assets/cryptos/full/xlm.svg";
import initial from "../../../assets/cryptos/initial/xlm.svg";
import illustration from "../../../assets/illustrations/cotization/xlm.svg";
import CryptoContextProvider from "../context";
import Cotization from "../cotization";

const USDCCotization = () => {
	const cryptoInfo = {
		name: "Stellar",
		abbr: "XLM",
		initialLogo: initial,
		logo,
		illustration: illustration,
		color: "#2F64F5",
	};
	const pricing = {
		currency: "ARS",
		pairs: [{ currency: "ARS", name: "Pesos" }],
	};
	const explanation = `El término criptomoneda Stellar se refiere a una moneda digital o virtual desarrollada p
    or Stellar Development Foundation. La moneda de la organización, que se llama lumen, se comercializa con el 
    símbolo XLM en varios exchanges de criptomonedas. Los comerciantes pueden utilizar lúmenes en la red Stellar, 
    que es una red de contabilidad distribuida basada en blockchain que conecta bancos, sistemas de pago y personas 
    para facilitar transferencias de valor de bajo costo entre activos, incluidos los pagos.`;

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

export default USDCCotization;
