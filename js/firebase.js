// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBt-0SmbT_n7Wwlq5KQBc0wlmWBw4JEaEk',
  authDomain: 'nathan-rydel-portfolio-b4ec8.firebaseapp.com',
  projectId: 'nathan-rydel-portfolio-b4ec8',
  storageBucket: 'nathan-rydel-portfolio-b4ec8.appspot.com',
  messagingSenderId: '624617978804',
  appId: '1:624617978804:web:f28bc7480eee4a811b50e1',
  measurementId: 'G-Y0DD4CXXEL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
