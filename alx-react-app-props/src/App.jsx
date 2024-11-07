import ProfilePage from "./ProfilePage";
import UserContext from "./UserContext";
import UserInfo from "./UserInfo";

function App() {
	return (
		<UserContext>
			<ProfilePage />;
			<UserInfo />
		</UserContext>
	);
}

export default App;
