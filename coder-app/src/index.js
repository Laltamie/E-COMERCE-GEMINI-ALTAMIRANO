import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhd6zwpFkgtMi_ShBw5mPmmS9DDkQQSd4",
  authDomain: "coderhouse-35b37.firebaseapp.com",
  projectId: "coderhouse-35b37",
  storageBucket: "coderhouse-35b37.appspot.com",
  messagingSenderId: "911743639275",
  appId: "1:911743639275:web:4467dbddb6726581b728ae"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


