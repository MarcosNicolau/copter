import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { lazy, Suspense, useEffect } from "react";
import Aos from "aos";
import "./styles/style.scss";
import "aos/dist/aos.css";

//Contexts
const NavContextProvider = lazy(() => import("./components/shared/states/nav-context"));
const CryptoContextProvider = lazy(() => import("./components/cotizations/context"));

//Nav and footer
import Navigation from "./components/navigation";
import Footer from "./components/footer.jsx";

//Pages
const Home = lazy(() => import("./components/home"));
const BitcoinCotization = lazy(() => import("./components/cotizations/pages/bitcoin"));
const EthereumCotization = lazy(() => import("./components/cotizations/pages/ethereum"));
const ReserveCotization = lazy(() => import("./components/cotizations/pages/reserve"));
const About = lazy(() => import("./components/about"));

//Legal
const Terms = lazy(() => import("./components/legal/terms"));
const Privacity = lazy(() => import("./components/legal/privacity"));

const App = () => {
	useEffect(
		() =>
			Aos.init({
				once: "false",
				easing: "ease",
				duration: 1200,
				disable: "mobile",
				offset: "100",
			}),
		[]
	);
	return (
		<Router>
			<Suspense
				fallback={
					<div className="view-100 bg-primary-100 text-neutral-1000 flex-column-center">
						Loading...
					</div>
				}
			>
				<NavContextProvider>
					<Navigation />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/nosotros" component={About} />
						<Route path="/legal/terms" component={Terms} />
						<Route path="/legal/priv" component={Privacity} />

						<CryptoContextProvider>
							<Route path="/cotizaciones/bitcoin" component={BitcoinCotization} />
							<Route path="/cotizaciones/ethereum" component={EthereumCotization} />
							<Route path="/cotizaciones/reserve" component={ReserveCotization} />
						</CryptoContextProvider>
					</Switch>
				</NavContextProvider>
				<Footer />
			</Suspense>
		</Router>
	);
};

export default App;
