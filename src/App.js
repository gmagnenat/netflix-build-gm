import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';

function App() {
	const user = null;

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
