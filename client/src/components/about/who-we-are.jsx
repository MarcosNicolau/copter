import React from "react";
import illustration from "../../assets/illustrations/about/who-we-are.svg";
import SectionTitle from "../shared/components/section-title";
import ContentImg from "../shared/components/content-img";

const WhoWeAre = () => {
	return (
		<section>
			<div className="container view-100 flex-column-center who-we-are">
				<div data-aos="fade" data-aos-duration="2000">
					<SectionTitle title={"Queremos que tengas una experiencia única"}>
						Hacemos todo lo posible para asegurarnos que tu experiencia con las cryptos
						sea la mejor
					</SectionTitle>
				</div>
				<ContentImg
					title="Sobre Copter:"
					illustration={illustration}
					className="who-we-are__text"
				>
					<h2 className="who-we-are__title text-left">Sobre Copter:</h2>
					<p>
						Somos un grupo de emprendedores que, por medio de los activos digitales y su
						tecnología subyacente, pretendemos facilitar el uso y acceso a productos y
						servicios financieros que por los medios tradicionales sólo son asequibles
						por algunos.
					</p>
					<p>
						Nuestra misión es construir la nueva generación de intercambio de activos
						digitales para comerciantes y consumidores, haciéndolo accesible para todos.
						Buscamos permanentemente mejorar la experiencia de nuestros clientes con una
						más rápida ejecución, precios justos y trato de primera clase.
					</p>
				</ContentImg>
			</div>
		</section>
	);
};

export default WhoWeAre;
