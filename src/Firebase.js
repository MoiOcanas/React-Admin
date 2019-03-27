import * as firebase from 'firebase';

const settings = { timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyD_3l_vHaaKrmXoho9-49WICfH-OoZ77po",
    authDomain: "react-firebase-a93b8.firebaseapp.com",
    databaseURL: "https://react-firebase-a93b8.firebaseio.com",
    projectId: "react-firebase-a93b8",
    storageBucket: "",
    messagingSenderId: "535238636855"
};

firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;