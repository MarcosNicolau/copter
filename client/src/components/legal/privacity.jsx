import React from "react";
import LegalTitle from "./legal-title";

const Privacity = () => {
	return (
		<section>
			<LegalTitle>Privacidad</LegalTitle>
			<div className="container legal__text">
				<div>
					<h3>Declaro: </h3>
					<p>
						Es mi exclusiva responsabilidad asegurarme de la viabilidad de la
						realización de transacciones en criptomonedas en mi jurisdicción.
					</p>
				</div>
				<div className="legal__list legal__declaration">
					<h3>Acepto y garantizo:</h3>
					<ul>
						<li>He leído y aceptado estos Términos y Condiciones.</li>{" "}
						<li>
							Que poseo la capacidad legal completa de aceptar estos Términos y de
							realizar transacciones y transferencias en Copter S.A.
						</li>
						<li>
							Que los fondos utilizados o que utilizaré en Copter S.A. no provienen
							directa o indirectamente de actividades ilícitas contempladas por los
							delitos establecidos por las leyes vigentes en materia de Prevención de
							lavado de activos y Financiamiento del terrorismo.
						</li>
						<li>
							Que he provisto información fidedigna, real, completa y actualizada a
							Copter S.A.
						</li>
						<li>
							Que tengo conocimiento acerca de la naturaleza, situación legal y
							volatilidad del valor de las criptomonedas y del Bitcoin en particular,
							y que asumo en forma completa el riesgo implícito en realizar
							transacciones con dichos activos.
						</li>
						<li>
							Que podría sancionarse normativa que prohíba y/o restrinja la
							realización de transacciones con criptomonedas en mi jurisdicción de
							residencia, o afectar la forma en las que se realizan las mismas.
						</li>
						<li>
							Que soy responsable de determinar si una Transacción específica es
							apropiada para mí, basándome en mis metas personales, estado financiero
							y voluntad de tomar riesgos.
						</li>
						<li>
							Que soy responsable de determinar si una transacción específica es
							apropiada para mí, basándome en la documentación presentada a Copter
							S.A. que guarda relación con mi situación personal; patrimonial,
							económica y fiscal.
						</li>
						<li>
							Que Copter S.A. podrá requerir mayor información y/o documentación en
							caso de considerarlo necesario, comprometiéndose el usuario a
							suministrar la misma en los plazos que Copter S.A. establezca.
						</li>
						<li>
							Admito que cualquier omisión o inexactitud en estos documentos podrá
							ocasionar el rechazo de esta solicitud y la destrucción de la
							documentación suministrada.
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Privacity;
