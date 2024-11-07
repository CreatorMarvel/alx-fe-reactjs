import ProfilePage from "./ProfilePage";
import UserContext from "./components/UserContext";
import UserInfo from "./UserInfo";

function App() {
	return (
		<UserContext.Provider
			value={{ name: "Jane Doe", email: "jane.doe@example.com" }}
		>
			<ProfilePage />;
			<UserInfo />
		</UserContext.Provider>
	);
}

export default App;
