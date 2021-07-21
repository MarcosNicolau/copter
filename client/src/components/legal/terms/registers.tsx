import React from "react";
import { Text, Point } from "../content";

const Registers = () => {
	return (
		<Point title="5. Registros de Copter">
			<Text>
				Copter mantiene un libro mayor de cambio privado (el Libro mayor de Copter) para
				rastrear el saldo de FIAT de cada Usuario Aprobado y las Monedas Digitales
				reflejadas en su Monedero de Moneda Digital.{" "}
			</Text>
			<Text>
				Las entradas FIAT en Copter no se registran en una cadena de bloques ni se publican
				de otra manera. Solo las transferencias de monedas digitales o las transferencias de
				monedas digitales desde su billetera de moneda digital serán confirmadas y visibles
				en una cadena de bloques.
			</Text>
		</Point>
	);
};

export default Registers;
