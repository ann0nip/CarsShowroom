import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDTt3Q8oh8pbDu3h9P9IWHw9bGZS8JItb0",
  authDomain: "cars-showroom-57978.firebaseapp.com",
  projectId: "cars-showroom-57978",
  storageBucket: "cars-showroom-57978.appspot.com",
  messagingSenderId: "129111023665",
  appId: "1:129111023665:web:755ba7668ef53fc8a5f510",
};

firebase.initializeApp(firebaseConfig);

export { firebase };
