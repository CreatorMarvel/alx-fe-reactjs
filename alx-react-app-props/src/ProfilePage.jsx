import UserInfo from "./UserInfo";
import PropTypes from "prop-types";

ProfilePage.propTypes = {
	userData: PropTypes.object,
};

function ProfilePage({ userData }) {
	return <UserInfo userData={userData} />;
}

export default ProfilePage;
