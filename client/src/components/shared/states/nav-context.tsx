import React, { createContext, useContext, useState } from "react";
import { SetState } from "../types/set-state";

interface INavContext {
	isNavLight: boolean;
	setIsNavLight: SetState<boolean>;
}

const NavContext = createContext<INavContext>({
	isNavLight: true,
	setIsNavLight: () => null,
});

const useNavContext = () => useContext(NavContext);

const NavContextProvider: React.FC = ({ children }) => {
	const [isNavLight, setIsNavLight] = useState(true);

	return (
		<NavContext.Provider value={{ isNavLight, setIsNavLight }}>{children}</NavContext.Provider>
	);
};

export default NavContextProvider;

export { useNavContext };
