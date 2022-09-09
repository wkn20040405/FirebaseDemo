import { initializeApp } from "@firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { firebaseConfig } from "../config/firebaseConfig";

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export const signUp = (navigate, username, password) => {
  createUserWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      // Signed in
      // eslint-disable-next-line no-unused-vars
      const user = userCredential.user;
      navigate("/");
    })
    .catch((error) => {
      alert(error.code);
    });
};

export const signIn = (navigate, username, password) => {
  signInWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      // Signed in
      // eslint-disable-next-line no-unused-vars
      const user = userCredential.user;
      navigate("home");
    })
    .catch((error) => {
      alert(error.code);
    });
};

export const logOut = (navigate) => {
  signOut(auth)
    .then(() => {
      navigate("/");
    })
    .catch((error) => {
      alert(error.code);
    });
};