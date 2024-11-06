import React from "react";
import UserContext from "./context/UserContext";
import UserDetails from "./UserDetails";

const App = () => {
	return (
		<UserContext>
			<h1>Hello</h1>
			<UserDetails />
		</UserContext>
	);
};

export default App;
