import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDLSSPBVzQes6LRfI-IOar79YuTGQqRBrU",
    authDomain: "server-6dbef.firebaseapp.com",
    databaseURL: "https://server-6dbef-default-rtdb.firebaseio.com",
    projectId: "server-6dbef",
    storageBucket: "server-6dbef.appspot.com",
    messagingSenderId: "13262286195",
    appId: "1:13262286195:web:a68b6ed42f388d3db2e906",
};

const app = initializeApp(firebaseConfig);
export default firebase.database();
