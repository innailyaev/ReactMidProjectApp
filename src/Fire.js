import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA1cTifa031gsnDKSLqL0FY0xm0uuzuYCw",
    authDomain: "nutritionapp-d023b.firebaseapp.com",
    projectId: "nutritionapp-d023b",
    storageBucket: "nutritionapp-d023b.appspot.com",
    messagingSenderId: "389696060471",
    appId: "1:389696060471:web:0897c7731efb4fdf34d3b2"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
