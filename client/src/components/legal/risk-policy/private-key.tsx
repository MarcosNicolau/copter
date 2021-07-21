import React from "react";
import { Point, Text } from "../content";

const PrivateKey = () => {
	return (
		<Point title="Riesgo de clave privada">
			<Text>
				Se debe tener mucho cuidado al seleccionar, almacenar o transmitir claves privadas. Si otra persona se entera de su clave privada, puede robar sus fondos. Si olvida o pierde su clave privada o los detalles de su contraseña, Copter no puede proporcionar una copia de seguridad y esto puede resultar en la pérdida de sus monedas digitales. Le recomendamos encarecidamente que utilice almacenamiento frío seguro.
			</Text>
		</Point>
	);
};

export default PrivateKey;
