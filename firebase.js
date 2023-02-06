import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUTSTqnMjedryvlm5l2-x81YkJ52QuGsA",
  authDomain: "ichant-fdc62.firebaseapp.com",
  projectId: "ichant-fdc62",
  storageBucket: "ichant-fdc62.appspot.com",
  messagingSenderId: "787039969024",
  appId: "1:787039969024:web:466a1719814e5f0587dde5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
