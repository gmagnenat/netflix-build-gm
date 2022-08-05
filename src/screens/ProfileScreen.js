import React from 'react';
import './ProfileScreen.css';
import Nav from '../Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { signOut, auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function ProfileScreen() {
	const user = useSelector(selectUser);
	const navigate = useNavigate();
	return (
		<div className='profileScreen'>
			<Nav />
			<div className='profileScreen__body'>
				<h1>Edit Profile</h1>
				<div className='profileScreen__info'>
					<img src='./images/ppf.png' alt='' />
					<div className='profileScreen__details'>
						<h2>{user.email}</h2>
						<div className='profileScreen__plans'>
							<h3>Plans (Current plan: premium)</h3>
							<div className='profileScreen__plans-list'>
								<p>Renewal date: 04/03/2021</p>
								<ul>
									<li className='profileScreen__plans-item'>
										<div className='profileScreen__plan-description'>
											<h4>Netflix Standard</h4>
											<p>1080p</p>
										</div>
										<button>Subscribe</button>
									</li>
									<li className='profileScreen__plans-item'>
										<div className='profileScreen__plan-description'>
											<h4>Netflix Basic</h4>
											<p>480p</p>
										</div>
										<button>Subscribe</button>
									</li>
									<li className='profileScreen__plans-item current'>
										<div className='profileScreen__plan-description'>
											<h4>Netflix Premium</h4>
											<p>4K+HDR</p>
										</div>
										<button>Current package</button>
									</li>
								</ul>
							</div>
							<button
								onClick={() =>
									signOut(auth).then(() => {
										navigate('/');
									})
								}
								className='profileScreen__signOut'
							>
								Sign Out
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileScreen;
