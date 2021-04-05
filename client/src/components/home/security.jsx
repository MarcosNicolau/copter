import React from "react";
import SectionTitle from "../shared/components/section-title.jsx";
import Card from "../shared/components/card.jsx";
import AbstractBg from "../shared/components/abstract-bg.jsx";
import validationIcon from "../../assets/icons/home/security/validation.svg";
import infrastructureIcon from "../../assets/icons/home/security/infrastructure.svg";
import trustIcon from "../../assets/icons/home/security/trust.svg";

const Security = () => {
	return (
		<section>
			<div className="container security">
				<SectionTitle title="Nos preocupamos por tu seguridad">
					Utilizando las mejores tecnologias del mercado y con fuertes alianzas
				</SectionTitle>
				<div className="flex-row-center security__cards">
					<Card type="card-2" title="Validación" icon={validationIcon}>
						Utilizamos proveedores internacionales de custodia como Fireblocks.
					</Card>
					<Card type="card-2" title="Infraestructura" icon={infrastructureIcon}>
						Para la escalabilidad es importante la robustez. Por eso, utilizamos los
						principales servicios cloud.
					</Card>
					<Card type="card-2" title="Partners" icon={trustIcon}>
						Trabajamos con Reserve para ayudar en su propósito de erradicar la
						inflación.
					</Card>
				</div>
				<AbstractBg bottom="-8em" />
			</div>
		</section>
	);
};

export default Security;
