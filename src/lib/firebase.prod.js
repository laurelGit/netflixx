import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { seedDatabase } from '../seed';

// we need to somehow seed the database



//we need a config here
const config = {
    apiKey: "AIzaSyC4ARMTGt3LXYZXtDDmAJzcMbTX_vs72IY",
    authDomain: "neflixx-3e3f9.firebaseapp.com",
    projectId: "neflixx-3e3f9",
    storageBucket: "neflixx-3e3f9.appspot.com",
    messagingSenderId: "1063691671300",
    appId: "1:1063691671300:web:d7f4201d1bde8749dfa251"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };