
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAcxM2p_kLIt3Z_1Tz0qdDU4BtN8LGWJ8w",
    authDomain: "thinsil-ecommerce.firebaseapp.com",
    projectId: "thinsil-ecommerce",
    storageBucket: "thinsil-ecommerce.appspot.com",
    messagingSenderId: "227974159852",
    appId: "1:227974159852:web:fdd7ed8ac164620013f4c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app)
const auth = getAuth(app)

export { fireDB, auth } 