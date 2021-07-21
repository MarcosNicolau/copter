import React from "react";
import { Point, Clause, List } from "../content";

const GeneralUse = () => {
	return (
		<Point title="4. Uso general">
			<Clause>Elegibilidad</Clause>
			<List
				text="Solo se le permite acceder a los Servicios si es un Usuario Aprobado. Esto significa que debe cumplir con los siguientes criterios:"
			>
				<li>Si es un individuo, debe tener 18 años o más.</li>
				<li>
					Debe tener la capacidad y, en el caso de una entidad, estar autorizado para suscribir y estar sujeto a los Términos y Condiciones y la Política de Privacidad.
				</li>
				<li>
					Copter debe estar satisfecho con el resultado de la identidad, el fraude, las verificaciones de antecedentes y otras verificaciones de lavado de dinero y financiamiento del terrorismo que realice (o cualquier tercero) en relación con usted en cualquier momento.
				</li>
			</List>
			<Clause>Sus acuerdos y promesas generales</Clause>
			<List text="Al acceder a los Servicios, usted:">
				<li>
					Garantizar que, si es un individuo, tiene 18 años o más y tiene la capacidad de participar y estar sujeto a estos Términos y condiciones y la Política de privacidad;
				</li>
				<li>
					Garantiza que tiene capacidad y está autorizado para aceptar y estar sujeto a estos Términos y condiciones y la Política de privacidad; y, si corresponde, la persona que actúa en su nombre está autorizada para hacerlo;

				</li>
				<li>
					Autorizar a Copter a realizar las consultas que considere necesarias, de vez en cuando, para verificar su identidad, realizar comprobaciones de fraude y cumplir con sus obligaciones contra el blanqueo de capitales y otras obligaciones legales;

				</li>
				<li>
					Acepta estar sujeto a estos Términos y condiciones y nuestra Política de privacidad, que se considera que ocurre cuando accede a nuestro Sitio y / o utiliza nuestros Servicios, y promete cumplir con ellos;

				</li>
				<li>
					Acepta pagar todas las tarifas asociadas con las Transacciones y los Servicios que se establecen en la Lista de tarifas y cualquier tarifa adicional de los mineros.

				</li>
				<li>
					Acepta asegurarse de que cualquier información personal que proporcione a Copter sea precisa, actual y completa y se relacione únicamente con usted, y actualizarnos si cambia;

				</li>
				<li>
					Aceptar proporcionarnos cualquier información adicional que solicitemos para cumplir con nuestras responsabilidades legales tan pronto como sea razonablemente posible;

				</li>
				<li>
					Confirmar que tiene suficiente conocimiento de las monedas digitales para realizar Transacciones y comprender que usted es el único responsable de determinar la naturaleza, el valor potencial, la idoneidad y la idoneidad de los Servicios;

				</li>
				<li>
					Confirme que acepta los riesgos de usar los Servicios y acceder al Sitio, y que ha leído y comprende los {`"`}Riesgos de uso{`"`};

				</li>
				<li>
					Reconozca que Copter no le ha aconsejado ni recomendado que utilice los Servicios o negocie con Monedas Digitales.

				</li>
			</List>
		</Point>
	);
};

export default GeneralUse;
