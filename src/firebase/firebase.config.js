
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDMf20di7Qfjj77Q9RHHyHQiTwcHrAuhd4",
  authDomain: "bookwiz-e6d6c.firebaseapp.com",
  projectId: "bookwiz-e6d6c",
  storageBucket: "bookwiz-e6d6c.appspot.com",
  messagingSenderId: "468534476213",
  appId: "1:468534476213:web:246145621b3cf756606dfc"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;