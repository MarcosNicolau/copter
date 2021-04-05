import React from "react";
import SectionTitle from "../shared/components/section-title";

const Comment = ({ children, owner, bgColor, animation, delay }) => {
	const bg = bgColor ? "bg-secondary-500" : "";
	return (
		<div
			className={`flex-column-center reviews__bubble ${bg}`}
			data-aos={animation}
			data-aos-delay={delay}
		>
			<div className="flex-row-center reviews__text">
				<h5>{children}</h5>
			</div>
			<p className="reviews__owner">{owner}</p>
		</div>
	);
};

const Reviews = () => {
	return (
		<section>
			<div className="container reviews space">
				<SectionTitle title="Ya que estamos...">
					Lo que nuestros clientes opinaron
				</SectionTitle>
				<div className="reviews__comments flex-row-center text-neutral-0">
					<Comment owner="eesis" bgColor="true" animation="fade-right" delay="0">
						“Muy bueno el otc de copter.”
					</Comment>
					<Comment owner="larsdo" animation="fade-left" delay="300">
						“Yo me hice una cuenta y empece a tradear. No tuve problemas. Y los mails
						los responden rápido.”
					</Comment>
					<Comment owner="Guille" animation="fade-right" delay="200">
						“Excelente, me soprendio el nivel de profesionalidad con el que me trataron
						y guiaron.”
					</Comment>
					<Comment owner="Miriam" bgColor="true" animation="fade-left" delay="100">
						“Un servicio mas que eficiente. Todo instantaneo sin vueltas de ningun tipo.
						Muy contenta”
					</Comment>
				</div>
			</div>
		</section>
	);
};

export default Reviews;
