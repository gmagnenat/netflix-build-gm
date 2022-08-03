import React, { useRef } from 'react';
import {
	auth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from '../firebase';
import './SignUpScreen.css';

function SignUpScreen() {
	const emailRef = useRef();
	const passwordRef = useRef();

	const register = (e) => {
		e.preventDefault();

		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);
			})
			.then((authUser) => {
				console.log(authUser);
			})
			.catch((error) => {
				alert(error.message);
			});
	};

	const signIn = (e) => {
		e.preventDefault();

		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(user);
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;

				alert(errorCode + ' ' + errorMessage);
			});
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
