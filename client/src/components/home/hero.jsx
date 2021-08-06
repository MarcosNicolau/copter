import React from "react";
import heroIllustration from "../../assets/illustrations/home/hero.svg";
import fullLogoLight from "../../assets/company/full-logo-light.png";

const Hero = () => {
	return (
		<>
			<section>
				<div className="view-100 hero">
					<div className="container flex-row-between hero__container">
						<div className="hero__title">
							<h1 data-aos="fade-up" data-aos-delay="300">
								Súmate a la revolución
								<br /> de las cryptos <span>con</span>
								<img src={fullLogoLight} alt="copter" className="hero__logo" />
							</h1>
							<p
								data-aos="fade-up"
								data-aos-delay="400"
								className="hero__snippet text-secondary-300 font-wght-700"
							>
								Comprá y vendé cryptos desde un exchange legal y seguro
							</p>
							<div data-aos="fade-up" data-aos-delay="500">
								<a
									href="https://auth.exchangecopter.com/registrarse"
									className="button cta cta--white hero__cta"
								>
									Comenzar
								</a>
							</div>
						</div>
						<img
							className="universe"
							src={heroIllustration}
							alt="our universe"
							data-aos="fade-left"
							data-aos-delay="400"
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
