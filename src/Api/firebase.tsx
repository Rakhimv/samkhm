import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYAMaf2FWL41wXFTVbHQeNgz_Th4b8pW4",
    authDomain: "samkhm34.firebaseapp.com",
    databaseURL: "https://samkhm34-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "samkhm34",
    storageBucket: "samkhm34.appspot.com",
    messagingSenderId: "574782712726",
    appId: "1:574782712726:web:80ff1260cfc0a442e6cbb7",
    measurementId: "G-PN2TVGBKHS"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);