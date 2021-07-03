import React from "react";
import { Point, Text } from "../content";

const PrivateKey = () => {
	return (
		<Point title="Private key risk">
			<Text>
				Extreme caution must be taken whenever selecting, storing or transmitting private
				keys. If another person learns your private key, they can steal your funds. If you
				forget or lose your private key or password details, ​Copter cannot provide a
				back-up and this can​ result in the loss of your Digital Currencies. We strongly
				recommend you use secure cold storage.
			</Text>
		</Point>
	);
};

export default PrivateKey;
