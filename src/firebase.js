// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDckGn0zyU3HiaoJGY1ei79PZffLOlizsc',
	authDomain: 'netflix-clone-yt-55768.firebaseapp.com',
	projectId: 'netflix-clone-yt-55768',
	storageBucket: 'netflix-clone-yt-55768.appspot.com',
	messagingSenderId: '258312032654',
	appId: '1:258312032654:web:1b064914b9c591aefd14df',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
	auth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
};
