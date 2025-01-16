// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCWkihGSsROY6Zf3pBQcuSlauUNWJdQ7F0',
  authDomain: 'coffee-shop-466b8.firebaseapp.com',
  projectId: 'coffee-shop-466b8',
  storageBucket: 'coffee-shop-466b8.firebasestorage.app',
  messagingSenderId: '116387461312',
  appId: '1:116387461312:web:a0857d15a9d6ae65751525',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
