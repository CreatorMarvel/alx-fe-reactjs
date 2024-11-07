import { createContext } from "react";
import PropTypes from "prop-types";

const UserProvider = createContext();

UserContext.propTypes = {
	children: PropTypes.any,
};

const UserContext = ({ children }) => {
	return (
		<UserProvider.Provider
			value={{ name: "Jane Doe", email: "jane.doe@example.com" }}
		>
			{children}
		</UserProvider.Provider>
	);
};

export default UserContext;
