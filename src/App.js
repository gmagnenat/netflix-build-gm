import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { auth, onAuthStateChanged } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
			if (userAuth) {
				// User is signed in
				dispatch(
					login({
						uid: userAuth.uid,
						email: userAuth.email,
					})
				);
			} else {
				// User is signed out
				dispatch(logout);
			}
		});

		return unsubscribe;
	}, []);

	return (
		<div className='app'>
			<Router>
				<Routes>
					{!user ? (
						<Route path='/' element={<LoginScreen />} />
					) : (
						<Route path='/' element={<HomeScreen />} />
					)}
				</Routes>
			</Router>
		</div>
	);
}

export default App;
