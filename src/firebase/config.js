import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAFe6MJQ-N-hCk_qVczYDuhHRFf-yb6-5c",
  authDomain: "dojo-45140.firebaseapp.com",
  projectId: "dojo-45140",
  storageBucket: "dojo-45140.appspot.com",
  messagingSenderId: "969321744361",
  appId: "1:969321744361:web:f49fe0f87a164e32a52d78",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

//time stamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
