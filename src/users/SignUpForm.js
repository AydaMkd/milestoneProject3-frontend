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
	const [errorMessage, setErrorMessage] = useState(null)


	async function handleSubmit(e) {
		e.preventDefault()


		const response = await fetch(`https://recipesharingbackend.herokuapp.com/api/users/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
		const data = await response.json()
		
		
        if (response.status === 200) {
            
            navigate('/login')
        } else {
            setErrorMessage(data.errors[0].msg)
        }
    }

	

	return (
		<main>
			<div className="signupimg">
			<div className="box">
			</div>
			</div>
			<h1>Sign Up</h1>
            {errorMessage !== null
                ? (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )
                : null
            }
			
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-sm-6 form-group">
						<label htmlFor="username">Username</label>
						<input
							required
							value={user.username}
							placeholder="Please enter a username"
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
							placeholder="Please enter your email address"
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
							placeholder="Please enter a password of 6 or more characters"
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