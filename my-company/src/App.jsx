import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="services" element={<Services />} />
					<Route path="contact" element={<Contact />} />
					<Route path="about" element={<About />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
};

export default App;
