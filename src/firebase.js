
import { initializeApp } from "firebase/app";
import { getDatabase} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyAoUbIXDpMvlrybKWU7C-LHdXK5c2rfOMk",
  authDomain: "case-list-1932e.firebaseapp.com",
  projectId: "case-list-1932e",
  storageBucket: "case-list-1932e.firebasestorage.app",
  messagingSenderId: "699393849304",
  appId: "1:699393849304:web:b644026acb393bf8fc24ad",
  databaseURL: "https://case-list-1932e-default-rtdb.europe-west1.firebasedatabase.app/",
};


const app = initializeApp(firebaseConfig);

export const db = getDatabase(app)
