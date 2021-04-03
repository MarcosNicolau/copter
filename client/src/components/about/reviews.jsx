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
			<h5>{children}</h5>
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
					<Comment owner="Marta Ciguena" bgColor="true" animation="fade-right" delay="0">
						“El mejor lugar para comprar bitcoin, super recomendable!!”
					</Comment>
					<Comment owner="Marta Ciguena" animation="fade-left" delay="600">
						“El mejor lugar para comprar bitcoin, super recomendable!!”
					</Comment>
					<Comment owner="Marta Ciguena" animation="fade-right" delay="400">
						“El mejor lugar para comprar bitcoin, super recomendable!!”
					</Comment>
					<Comment owner="Marta Ciguena" bgColor="true" animation="fade-left" delay="200">
						“El mejor lugar para comprar bitcoin, super recomendable!!”
					</Comment>
				</div>
			</div>
		</section>
	);
};

export default Reviews;
