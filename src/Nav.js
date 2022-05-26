import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
	const [show, handleShow] = useState(false);

	const transitionNavBar = () => {
		if (window.scrollY > 100) {
			handleShow(true);
		} else {
			handleShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', transitionNavBar);
		return () => window.removeEventListener('scroll', transitionNavBar);
	}, []);

	return (
		<div className={`nav ${show && 'nav-black'}`}>
			<div className='nav__contents'>
				<img
					className='nav__logo'
					src='./images/netflix-logo-transparent.png'
					alt='banner'
				/>
				<img className='nav__avatar' src='./images/ppf.png' alt='profile' />
			</div>
		</div>
	);
}

export default Nav;
