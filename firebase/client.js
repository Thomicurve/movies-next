import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBn5DysnuRkZaWYCvgHFj2sLS3DxPhpO1I",
  authDomain: "onmovies-next.firebaseapp.com",
  projectId: "onmovies-next",
  storageBucket: "onmovies-next.appspot.com",
  messagingSenderId: "66641438516",
  appId: "1:66641438516:web:8d226eac26cc456e28e761"
};

const app = initializeApp(firebaseConfig);

export default app