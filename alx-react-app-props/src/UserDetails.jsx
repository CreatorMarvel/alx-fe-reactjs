import { useContext } from "react";
import { UserProvider } from "./context/UserProvider";

function UserDetails() {
	const userData = useContext(UserProvider);
	return (
		<div>
			<p>Name: {userData.name}</p>
			<p>Email: {userData.email}</p>
		</div>
	);
}

export default UserDetails;
