import React, { useState } from 'react';
import './LoginScreen.css';
import SignUpScreen from './SignUpScreen';

function LoginScreen() {
	const [signIn, setSignIn] = useState(false);

	function truncate(string, n) {
		return string?.length > n ? string.substr(0, n) + '...' : string;
	}

	const text =
		'Ready to watch? Enter your email to create or restart your membership.';

	return (
		<div className='loginScreen'>
			<div className='loginScreen__background'>
				<img
					className='loginScreen__logo'
					src='./images/netflix-logo-transparent.png'
					alt=''
				/>
				<button onClick={() => setSignIn(true)} className='loginScreen__button'>
					Sign In
				</button>

				<div className='loginScreen__gradient' />

				<div className='loginScreen__body'>
					{signIn ? (
						<SignUpScreen />
					) : (
						<>
							<h1>Unlimited films, TV programmes and more.</h1>
							<h2>Watch anywhere. Cancel at any time.</h2>
							<h3>{truncate(text, 15)}</h3>
							<div className='loginScreen__input'>
								<form>
									<input type='email' placeholder='Email Address' />
									<button
										onClick={() => setSignIn(true)}
										className='loginScreen__getStarted'
									>
										Get started
									</button>
								</form>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
}

export default LoginScreen;
