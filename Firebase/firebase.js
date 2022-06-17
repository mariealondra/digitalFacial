import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAUCNbl63iO-ZEVJH7uW8ctPqlQzJgD6S0",
  authDomain: "miproyectofadi.firebaseapp.com",
  databaseURL: "https://miproyectofadi-default-rtdb.firebaseio.com",
  projectId: "miproyectofadi",
  storageBucket: "miproyectofadi.appspot.com",
  messagingSenderId: "737528409580",
  appId: "1:737528409580:web:1c847a9d82f437405de4c9",
  measurementId: "G-DMZ93WQ83Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);