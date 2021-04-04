import React from "react";
import joinUsIllustration from "../../assets/illustrations/home/join-us.svg";

const CTA = () => {
	return (
		<section>
			<div className="home-cta">
				<div className="container flex-row-between home-cta__container">
					<div>
						<h2 className="font-wght-700 text-neutral-1000">
							Somos tu ruta para que tomes
							<span className="break">control de tus finanzas.</span>
						</h2>
						<div data-aos="fade-up">
							<a
								href="https://app.exchangecopter.com/signup"
								className="button cta cta--violet cta--violet-1"
							>
								Empezar ahora
							</a>
						</div>
					</div>
					<div className="home-cta__img-container" data-aos="fade-left">
						<img src={joinUsIllustration} alt="join-us" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTA;
