import React, { useCallback } from "react";
import joinUsIllustration from "../../assets/illustrations/home/join-us.svg";
import drawCanvas from "./canvas";
const CTA = () => {
	const canvasResize = (e) => {
		if (e.target.innerWidth < 900) return;
		const starsNumber = e.target.innerWidth <= 1000 ? 20 : 50;
		drawCanvas(document.querySelector(".hero-cta-canvas"), starsNumber);
	};

	const canvasRef = useCallback((canvas) => {
		const starsNumber = window.innerWidth <= 1000 ? 20 : 50;
		drawCanvas(canvas, starsNumber);
		window.addEventListener("resize", canvasResize);
		return () => window.removeEventListener("resize", canvasResize);
	}, []);

	return (
		<section>
			<div className="home-cta">
				<canvas ref={canvasRef} className="hero-cta-canvas"></canvas>

				<div className="container flex-row-between home-cta__container">
					<div>
						<h2 className="font-wght-700 text-neutral-1000">
							Somos tu ruta para que tomes
							<span className="break">control de tus finanzas.</span>
						</h2>
						<div data-aos="fade-up">
							<a href="/" className="button cta cta--violet cta--violet-1">
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
