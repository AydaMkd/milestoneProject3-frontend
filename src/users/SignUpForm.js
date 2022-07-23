import { useState } from "react"
import { useNavigate } from "react-router"
import background from "../backgroundImages/colorfulpeppers.png"


function SignUpForm() {

	const navigate = useNavigate();

	const [user, setUser] = useState({
		username: '',
		email: '',
		password: ''
	})

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`https://hangrynomster.herokuapp.com//api/users/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})

		navigate(`/`)
	}

	return (
		<main>
			<div className="signupimg">
			<div className="box">
			
			
			
			</div>
			</div>
			<h1>Sign Up</h1>
			
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="username">Username</label>
						<input
							required
							value={user.username}
							onChange={e => setUser({ ...user, username: e.target.value })}
							className="form-control"
							id="username"
							name="username"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							required
							value={user.email}
							onChange={e => setUser({ ...user, email: e.target.value })}
							className="form-control"
							id="email"
							name="email"
						/>
					</div>
					<div className="col-sm-6 form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							required
							value={user.password}
							onChange={e => setUser({ ...user, password: e.target.value })}
							className="form-control"
							id="password"
							name="password"
						/>
					</div>
				</div>
				<input className="signupbtn" type="submit" value="Sign Up" />
			</form>
			Photo by <a href="https://unsplash.com/@srz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">sydney Rae</a> on <a href="https://unsplash.com/s/photos/grocerys?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
			
		</main>
	)
}

export default SignUpForm