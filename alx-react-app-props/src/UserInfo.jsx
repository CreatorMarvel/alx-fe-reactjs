import UserDetails from "./UserDetails";
import PropTypes from "prop-types";

UserInfo.propTypes = {
	userData: PropTypes.object,
};

function UserInfo({ userData }) {
	return <UserDetails userData={userData} />;
}

export default UserInfo;
