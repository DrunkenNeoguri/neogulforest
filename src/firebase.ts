import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq32_iMwZh0NaKA-MSw2_pRsxUUwGhILA",
  authDomain: "neogulforest.firebaseapp.com",
  projectId: "neogulforest",
  storageBucket: "neogulforest.appspot.com",
  messagingSenderId: "238058555284",
  appId: "1:238058555284:web:2d7155b741dcdc5b337181",
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storeDataState = collection(database, "team");
