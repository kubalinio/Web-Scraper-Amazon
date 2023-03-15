import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBwJVvOdZfE2ihg56M3YnCKGNYA18wcNhI",
    authDomain: "brightdata--scraper-f21dc.firebaseapp.com",
    projectId: "brightdata--scraper-f21dc",
    storageBucket: "brightdata--scraper-f21dc.appspot.com",
    messagingSenderId: "164293262294",
    appId: "1:164293262294:web:67aabfd5aba27160664277"
  };

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

  const db = getFirestore(app)

  export { db }