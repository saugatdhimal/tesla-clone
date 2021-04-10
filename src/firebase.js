import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDA8Xb9gI9UrxEzMP17J2db7oN_Ps0u9EY",
    authDomain: "tesla77.firebaseapp.com",
    projectId: "tesla77",
    storageBucket: "tesla77.appspot.com",
    messagingSenderId: "861174550145",
    appId: "1:861174550145:web:2f78c8aee084fae1cb4780"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }