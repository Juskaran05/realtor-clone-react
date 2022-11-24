// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBbUWfFGNh8B-8EHoBKHDGoExC_5VF7D3g',
  authDomain: 'realtor-clone-react-b43f8.firebaseapp.com',
  projectId: 'realtor-clone-react-b43f8',
  storageBucket: 'realtor-clone-react-b43f8.appspot.com',
  messagingSenderId: '424636922278',
  appId: '1:424636922278:web:c70af53ebe59ce3de3b767',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
