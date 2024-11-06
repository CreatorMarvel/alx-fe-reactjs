import { createContext } from "react";
import PropTypes from "prop-types";

const UserContext = createContext();

UserProvider.propTypes = {
	children: PropTypes.any,
};

function UserProvider({ children }) {
	const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

	return (
		<UserContext.Provider value={userData}>{children}</UserContext.Provider>
	);
}

export { UserProvider };
