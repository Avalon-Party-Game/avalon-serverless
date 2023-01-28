// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBKXjlCqJi0l7dpnxsjk9OQhHbnUjcD4UE",
    authDomain: "testfirebase-da66b.firebaseapp.com",
    databaseURL: "https://testfirebase-da66b.firebaseio.com",
    projectId: "testfirebase-da66b",
    storageBucket: "testfirebase-da66b.appspot.com",
    messagingSenderId: "604593597662",
    appId: "1:604593597662:web:dd8d3c9ea1f9ccfd06e64f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const appCheck =
    typeof window !== "undefined"
        ? initializeAppCheck(app, {
              provider: new ReCaptchaV3Provider(
                  "6LfqbyUkAAAAAMPthygNFbxXz2ZnUzjvSfOLZQlz"
              ),

              // Optional argument. If true, the SDK automatically refreshes App Check
              // tokens as needed.
              isTokenAutoRefreshEnabled: true,
          })
        : null;
