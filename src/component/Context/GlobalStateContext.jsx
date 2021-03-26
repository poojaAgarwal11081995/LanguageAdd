/** @format */

import React from "react";
const GlobalContext = React.createContext([{}, () => {}]);
function GlobalStateContext(props) {
	const [globalStateContext, setGlobalStateContext] = React.useState({
		loading: false,
		closesidebar: false,
	});
	return (
		<GlobalContext.Provider value={[globalStateContext, setGlobalStateContext]}>
			{props.children}
		</GlobalContext.Provider>
	);
}

export { GlobalContext, GlobalStateContext };
