import React, { createContext } from "react";
import PropTypes from "prop-types";

UserContext.propTypes = {
	children: PropTypes.any,
};

const UserContext = ({ children }) => {
	const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
	const Context = createContext();

	return <Context.Provider value={userData}>{children}</Context.Provider>;
};

export default UserContext;
