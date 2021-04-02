import React from "react";
import illustration from "../../assets/illustrations/about/who-we-are.svg";
import SectionTitle from "../shared/components/section-title";
import ContentImg from "../shared/components/content-img";

const WhoWeAre = () => {
	return (
		<section>
			<div className="container view-100 flex-column-center who-we-are">
				<div data-aos="fade" data-aos-duration="2000">
					<SectionTitle title={"Queremos que tengas una experiencia unica"}>
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
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						Lorem Ipsum has been the industrs standard dummy text ever since the 1500s.
					</p>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and scrambled it to make a
						type specimen book.
					</p>
				</ContentImg>
			</div>
		</section>
	);
};

export default WhoWeAre;
