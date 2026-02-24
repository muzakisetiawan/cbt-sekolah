// IMPORT FIREBASE
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// CONFIG KAMU
const firebaseConfig = {
apiKey: "AIzaSyAKCNGUrq8VEFgOSf9-l9M3MeAnh7rifx8",
authDomain: "cbt-sekolah-ae1dc.firebaseapp.com",
projectId: "cbt-sekolah-ae1dc",
storageBucket: "cbt-sekolah-ae1dc.firebasestorage.app",
messagingSenderId: "337385948840",
appId: "1:337385948840:web:7474b5cbc7c9ac79a2a49d"
};


// INIT
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);


// EXPORT
export { auth, db };
