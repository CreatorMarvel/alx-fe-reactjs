import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<u
				style={{
					backgroundColor: "lightblue",
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
				<li>
					<Link to="/services">Services</Link>
				</li>
			</u>
		</nav>
	);
};

export default Navbar;
