import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBCbLXIKOptfpJ4WcentEz15TgHveV46kM",
    authDomain: "cm-reporting-system.firebaseapp.com",
    databaseURL: "https://cm-reporting-system.firebaseio.com",
    storageBucket: "cm-reporting-system.appspot.com",
    messagingSenderId: "612518998251"
};

firebase.initializeApp(config);
export const database = firebase.database();

export const storage = firebase.storage();

export const fbAuth = firebase.auth();
 