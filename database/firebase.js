// import * as firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs,orderBy,query } from 'firebase/firestore/lite';
// import "firebase/firestore";
// import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyATq8qaONRbJ-nFcg-Gxg7cFyjE7x7ZQs0",  
    authDomain: "conqui-path.firebaseapp.com",
    projectId: "conqui-path",
    storageBucket: "conqui-path.appspot.com",
    messagingSenderId: "913535486929",
    appId: "1:913535486929:web:a842e5573021f32793aef0",
    measurementId: "G-EY3YR9ZQKE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// }

export {
    // firebase,
    db,
}
  