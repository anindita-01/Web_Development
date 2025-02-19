import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAr7G_oDhf0Jn8N9yxOqD9J6VUj-ngVGqc",
    authDomain: "app-bbd9b.firebaseapp.com",
    projectId: "app-bbd9b",
    storageBucket: "app-bbd9b.firebasestorage.app",
    messagingSenderId: "270267065304",
    appId: "1:270267065304:web:d5ebc4cf24869f474d08ad",
    databaseURL: "https://app-bbd9b-default-rtdb.firebaseio.com"
  };

 export const app = initializeApp(firebaseConfig);