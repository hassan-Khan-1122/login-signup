import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

  const firebaseConfig = {
    apiKey: "AIzaSyBZ7IdJkBy5sju5NQdTVf_yndupt9BklZg",
    authDomain: "jdshop-c92bc.firebaseapp.com",
    projectId: "jdshop-c92bc",
    storageBucket: "jdshop-c92bc.appspot.com",
    messagingSenderId: "912666718491",
    appId: "1:912666718491:web:b4dd1762076a4fb25d63be",
    measurementId: "G-ZQ8K9ZFJS2"
};

const app = initializeApp(firebaseConfig);

const Auth = getAuth();
const db = getFirestore();


export {app , Auth ,db};