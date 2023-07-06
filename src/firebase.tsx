// Import the functions you need from the SDKs you need
import { sign } from "crypto";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw4CP7xn_uOLaqIZ55mlJvHzNtJ5JjDgM",
  authDomain: "chatter-41ef8.firebaseapp.com",
  projectId: "chatter-41ef8",
  storageBucket: "chatter-41ef8.appspot.com",
  messagingSenderId: "1077884846087",
  appId: "1:1077884846087:web:e0c5cccaac0fbf93a46aa2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
      signInWithPopup(auth, provider).then((result) => {
         const name = result.user.displayName ?? '';
         const email = result.user.email ?? '';
         const photoURL = result.user.photoURL ?? '';
        
       alert(localStorage.getItem("name") + "\n" + localStorage.getItem("email") + "\n" + localStorage.getItem("photoUrl"));

        // localStorage.setItem("name", name);
        // localStorage.setItem("email", email);
        // localStorage.setItem("photoUrl", photoURL);

      }).catch((error) => {
        // Handle Errors here.
        console.log(error);
      });

}
