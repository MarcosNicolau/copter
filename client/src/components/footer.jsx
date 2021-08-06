import React from "react";
import { Link } from "react-router-dom";

import facebook from "../assets/company/contact/facebook.svg";
import instagram from "../assets/company/contact/instagram.svg";
import linkedin from "../assets/company/contact/linkedin.svg";
import fullLogoLight from "../assets/company/full-logo-light.png";
import { redirectToFacebook, redirectToInstagram, redirectToLinkedin } from "./shared/utils/redirects";

const Footer = () => {
	return (
		<footer>
			<div className="bg-primary-100">
				<div className="container text-neutral-1000 flex-column footer">
					<div className="flex-row-between footer__top">
						<div className="flex-column-center">
							<img src={fullLogoLight} alt="copter" className="footer__logo" />
							<div className="flex-column footer__auth-btns">
								<a
									href="https://app.exchangecopter.com/signup"
									className="button auth auth--light"
								>
									Registrate
								</a>
								<a
									href="https://app.exchangecopter.com/login"
									className="button auth"
								>
									Acceder
								</a>
							</div>
						</div>
						<div className="flex-row">
							<div className="flex-column footer__links">
								<h5>Recursos</h5>
								<Link to="/ayuda">Centro de ayuda</Link>
							</div>
							<div className="flex-column footer__links">
								<h5>Cotizaciones</h5>
								<Link to="/cotizaciones/bitcoin">Bitcoin</Link>
								<Link to="/cotizaciones/ethereum">Ethereum</Link>
								<Link to="/cotizaciones/usdc">USDC</Link>
								<Link to="/cotizaciones/reserve">Reserve</Link>
								<Link to="/cotizaciones/reserverights">Reserve Rights</Link>
								<Link to="/cotizaciones/stellar">Stellar</Link>
							</div>
							<div className="flex-column footer__links">
								<h5>Empresa</h5>
								<Link to="/nosotros">Nosotros</Link>
								<Link to="/legal/terms">Términos y condiciones</Link>
								<Link to="/legal/risk">Política de riesgo</Link>
								<Link to="/legal/priv">Privacidad</Link>
								<Link to="/legal/limites-comisiones">Límites y comisiones</Link>
							</div>
						</div>
					</div>
					<div className="footer__bottom">
						<div className="flex-column-center">
							<p className="text-neutral-1000 font-wght-600">
								support@exchangecopter.com
							</p>
							<div className="flex-row-center footer__contact">
								<img
									src={facebook}
									alt="facebook contact"
									onClick={redirectToFacebook}
								/>
								<img
									src={instagram}
									alt="instagram contact"
									onClick={redirectToInstagram}
								/>
								<img
									src={linkedin}
									alt="linkedin contact"
									onClick={redirectToLinkedin}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
