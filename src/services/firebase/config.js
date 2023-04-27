
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAWCr-8hqMhs9_3BmGGzkEiC0T5sGSrUBg",
    authDomain: "coder--firebase2-class14.firebaseapp.com",
    projectId: "coder--firebase2-class14",
    storageBucket: "coder--firebase2-class14.appspot.com",
    messagingSenderId: "838703640305",
    appId: "1:838703640305:web:6f5feffc081a0d15b2c350"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);