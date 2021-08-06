import AOS from "aos";
import React, { lazy, Suspense, useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./styles/style.scss";
import "aos/dist/aos.css";

//Contexts
const NavContextProvider = lazy(() => import("./components/shared/states/nav-context"));

//Nav and footer
import Navigation from "./components/navigation";
import Footer from "./components/footer.jsx";
import ScrollToTop from "./components/shared/utils/scroll-top";

//Pages
const Home = lazy(() => import("./components/home"));
const About = lazy(() => import("./components/about"));

//Cotization pages
const BitcoinCotization = lazy(() => import("./components/cotizations/pages/bitcoin"));
const EthereumCotization = lazy(() => import("./components/cotizations/pages/ethereum"));
const ReserveCotization = lazy(() => import("./components/cotizations/pages/reserve"));
const ReserveRightsCotization = lazy(() => import("./components/cotizations/pages/reserve-rights"));
const USDCCotization = lazy(() => import("./components/cotizations/pages/usdc"));
const XLMCotization = lazy(() => import("./components/cotizations/pages/xlm"));

//Legal
const Terms = lazy(() => import("./components/legal/terms"));
const Privacity = lazy(() => import("./components/legal/privacity"));
const LimitsComitions = lazy(() => import("./components/legal/limits-comitions"));
const RiskPolicy = lazy(() => import("./components/legal/risk-policy"));

//FAQ
const Help = lazy(() => import("./components/help"));

//Loading screen
import LoadingScreen from "./components/shared/components/loaders/loading-screen";

const App = () => {
	useEffect(
		() =>
			AOS.init({
				once: true,
				easing: "ease",
				duration: 1200,
				disable: "mobile",
			}),
		[]
	);
	return (
		<Router>
			<Suspense fallback={<LoadingScreen />}>
				<NavContextProvider>
					<Navigation />
					<ScrollToTop />
					<Switch>
						<Route exact path="/nosotros" component={About} />
						<Route exact path="/legal/terms" component={Terms} />
						<Route exact path="/legal/priv" component={Privacity} />
						<Route exact path="/legal/limites-comisiones" component={LimitsComitions} />
						<Route exact path="/legal/risk" component={RiskPolicy} />
						<Route exact path="/ayuda" component={Help} />
						<Route exact path="/cotizaciones/bitcoin" component={BitcoinCotization} />
						<Route exact path="/cotizaciones/ethereum" component={EthereumCotization} />
						<Route exact path="/cotizaciones/reserve" component={ReserveCotization} />
						<Route
							exact
							path="/cotizaciones/reserverights"
							component={ReserveRightsCotization}
						/>
						<Route exact path="/cotizaciones/usdc" component={USDCCotization} />
						<Route exact path="/cotizaciones/stellar" component={XLMCotization} />
						<Route path="/" component={Home} />
					</Switch>
				</NavContextProvider>
				<Footer />
			</Suspense>
		</Router>
	);
};

export default App;
