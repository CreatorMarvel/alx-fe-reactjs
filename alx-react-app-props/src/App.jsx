import ProfilePage from "./ProfilePage";
import UserContext from "./components/UserContext";
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
