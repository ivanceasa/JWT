import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();

	console.log("This is your token", store.token);
	const handleClick = () => {
		actions.login(email, password).then(() => {
			history.push("/");
		});
	};

	return (
		<div className="text-center mt-5">
			<h1>Login</h1>
			{store.token && store.token != "" && store.token != undefined ? (
				"You are logged in whit this token" + store.token
			) : (
				<div>
					<div className="mb-3 mx-auto col-6">
						<input
							type="email"
							placeholder="Email"
							value={email}
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							onChange={e => {
								setMail(e.target.value);
							}}
						/>
						<div id="emailHelp" className="form-text">
							We will never share your email with anyone else.
						</div>
					</div>
					<div className="mb-3  mx-auto col-6">
						<input
							type="password"
							placeholder="Password"
							value={password}
							className="form-control"
							id="exampleInputPassword1"
							onChange={e => {
								setPassword(e.target.value);
							}}
						/>
					</div>
					<button type="submit" className="btn btn-primary" onClick={handleClick}>
						Login
					</button>
				</div>
			)}
		</div>
	);
};
