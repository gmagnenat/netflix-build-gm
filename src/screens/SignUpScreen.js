import React, { useRef } from 'react';
import {
	getAuth,
	createUserWithEmailAndPassword,
	// signInWithEmailAndPassword,
} from '../firebase';
import './SignUpScreen.css';

const auth = getAuth();

function SignUpScreen() {
	const emailRef = useRef();
	const passwordRef = useRef();

	const register = (e) => {
		e.preventDefault();

		createUserWithEmailAndPassword(auth, emailRef, passwordRef).then(
			(userCredential) => {
				const user = userCredential.user;
				console.log(user);
			}
		);
	};

	const signIn = (e) => {
		e.preventDefault();
	};

	return (
		<div className='signUpScreen'>
			<form>
				<h1>Sign In</h1>

				<input ref={emailRef} placeholder='Email' type='email' />
				<input ref={passwordRef} placeholder='Password' type='password' />
				<button onClick={signIn} type='submit'>
					Sign In
				</button>

				<h4>
					<span className='signUpScreen__gray'>New to Netflix? </span>
					<span onClick={register} className='signupScreen__link'>
						Sign Up now.
					</span>
				</h4>
			</form>
		</div>
	);
}

export default SignUpScreen;
