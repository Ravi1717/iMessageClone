// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCELJHKM54lbxLSTc4Mof2178QhKuE7b4M",
  authDomain: "imessage-clone-521bb.firebaseapp.com",
  databaseURL: "https://imessage-clone-521bb.firebaseio.com",
  projectId: "imessage-clone-521bb",
  storageBucket: "imessage-clone-521bb.appspot.com",
  messagingSenderId: "1053042229709",
  appId: "1:1053042229709:web:0497bc7ba809ea76da0484",
  measurementId: "G-Z4HPMCKSXM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
