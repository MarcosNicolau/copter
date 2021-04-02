import React from "react";

const CTA = () => {
	return (
		<section>
			<div className="container flex-column-center space about-cta">
				<div className="about-cta__text">
					<h2>Miles de personas ya confian y operan con Copter </h2>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
					</p>
				</div>
				<a
					href="https://app.exchangecopter.com/signup"
					className="button cta cta--violet cta--violet-2"
				>
					Comenzar
				</a>
			</div>
		</section>
	);
};

export default CTA;
