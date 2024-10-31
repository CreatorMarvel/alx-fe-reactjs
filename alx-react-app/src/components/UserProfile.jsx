import PropTypes from "prop-types";

UserProfile.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
	bio: PropTypes.string,
};

function UserProfile(props) {
	return (
		<div>
			<h2>{props.name}</h2>
			<p>Age: {props.age}</p>
			<p>Bio: {props.bio}</p>
		</div>
	);
}

export default UserProfile;
