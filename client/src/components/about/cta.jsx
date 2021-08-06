import React from "react";

const CTA = () => {
	return (
		<section>
			<div className="container flex-column-center space text-center about-cta">
				<div className="about-cta__text">
					<h2>Miles de personas ya confían y operan con Copter</h2>
					<p>No te quedes afuera de esta nueva economía digital</p>
				</div>
				<a
					href="https://auth.exchangecopter.com/registrarse"
					className="button cta cta--violet cta--violet-2"
				>
					Comenzar
				</a>
			</div>
		</section>
	);
};

export default CTA;
