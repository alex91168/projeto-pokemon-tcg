// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8e43Nsl0Tar4Azg9E8_iQud60r6zyKFo",
  authDomain: "hidden-fates-wiki.firebaseapp.com",
  databaseURL: "https://hidden-fates-wiki-default-rtdb.firebaseio.com",
  projectId: "hidden-fates-wiki",
  storageBucket: "hidden-fates-wiki.appspot.com",
  messagingSenderId: "259074589928",
  appId: "1:259074589928:web:0d2675974187062d08b55d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// Exporta o objeto storage corretamente
export { storage };