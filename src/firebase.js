import * as firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDWvJ667PeUH_ogfvh9AGZlx4imSTc3YWs",
  authDomain: "movie-registration-21ad4.firebaseapp.com",
  databaseURL: "https://movie-registration-21ad4.firebaseio.com",
  projectId: "movie-registration-21ad4",
  storageBucket: "movie-registration-21ad4.appspot.com",
  messagingSenderId: "465791164159",
  appId: "1:465791164159:web:85ba3624ead32e770df6ca"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const database = firebase.firestore();
