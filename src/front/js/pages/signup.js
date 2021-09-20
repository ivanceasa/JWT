import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	const handleSignup = () => {
		let email = document.getElementById("email").value;
		let password = document.getElementById("password").value;
		signup(email, password);
	};

	const signup = async (email, password) => {
		const resp = await fetch(`https://3001-teal-rooster-0jpsua65.ws-eu16.gitpod.io/api/singup`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email: email, password: password, is_active: true })
		});

		if (!resp.ok) throw Error("There was a problem in the signup request");

		if (resp.status === 401) {
			throw "Invalid credentials";
		} else if (resp.status === 400) {
			throw "Invalid email or password format";
		}
		const data = await resp.json();
		console.log(data);
	};

	return (
		<div className="container row text-center mt-5 mx-auto d-flex justify-content-center">
			<h1 className="col-7">Sign up</h1>
			<form className="col-6 p-5 mt-3">
				<div className="form-grup row mt-2">
					<label htmlFor="email" className="col-4">
						Email
					</label>
					<input className="col-6" type="email" name="email" id="email" placeholder="example@gmail.com" />
				</div>
				<div className="form-grup row mt-2">
					<label htmlFor="password" className="col-4">
						Password
					</label>
					<input className="col-6" type="password" name="password" placeholder="Password" />
				</div>

				<div>
					<button
						type="submit"
						className="btn btn-outline-primary btn-lg btn-block  mt-4"
						onClick={handleSignup}>
						Sign up
					</button>
				</div>
			</form>
		</div>
	);
};
