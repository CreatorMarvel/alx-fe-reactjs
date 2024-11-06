import { useState } from "react";
import { useReducer } from "react";

function reducer(state, action) {
	switch (action.type) {
		case "name":
			return { ...state, name: action.payload };
		case "email":
			return { ...state, email: action.payload };
		case "message":
			return { ...state, message: action.payload };
		default:
			break;
	}
}

function Contact() {
	const [isFilled, setIsFilled] = useState(false);

	const initialState = {
		name: "",
		email: "",
		message: "",
	};

	const [{ name, email, message }, dispatch] = useReducer(
		reducer,
		initialState
	);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name || !email || !message) return alert("Fill all Fields!");
		setIsFilled(!isFilled);
		isFilled && alert(`${name}\n${email}\n${message}\nSubmitted`);
	};

	return (
		<div style={{ padding: "20px" }}>
			<h1>Contact Us</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					placeholder="Your Name"
					value={name}
					onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
					style={{ display: "block", margin: "10px 0" }}
				/>
				<input
					type="email"
					name="email"
					placeholder="Your Email"
					value={email}
					onChange={(e) => dispatch({ type: "email", payload: e.target.value })}
					style={{ display: "block", margin: "10px 0" }}
				/>
				<textarea
					name="message"
					placeholder="Your Message"
					value={message}
					onChange={(e) =>
						dispatch({ type: "message", payload: e.target.value })
					}
					style={{ display: "block", margin: "10px 0" }}
				/>
				<button type="submit" onClick={handleSubmit}>
					Send Message
				</button>
			</form>
		</div>
	);
}

export default Contact;
