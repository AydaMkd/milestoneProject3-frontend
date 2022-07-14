import { useState, useEffect } from "react"
import { useHistory, useParams } from "react"


function SignUpForm() {

	const history = useHistory()

	const [user, setUser] = useState({
		username: '',
		password: ''
	})

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:5000/users/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})

		history.push(`/`)
	}

	return (
		<main>
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="username">User Name</label>
						<input
							required
							value={user.firstName}
							onChange={e => setUser({ ...user, username: e.target.value })}
							className="form-control"
							id="username"
							name="username"
						/>
					</div>
				</div>
				<div className="row">
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
				<input className="btn btn-primary" type="submit" value="Sign Up" />
			</form>
		</main>
	)
}

export default SignUpForm