// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBh6lHioC_10xwsNDIofFhk2wcTlp8cJyA",                 // your api key
  authDomain: "key3-9659b.firebasestorage.app",         // your auth domain e.g. your-app.firebaseapp.com
  databaseURL: "https://key3-9659b-default-rtdb.firebaseio.com/",      // e.g. https://your-app-default-rtdb.firebaseio.com
  projectId: "key3-9659b",           // your firebase project id
  storageBucket: "key3-9659b.firebasestorage.app",   // e.g. your-app.appspot.com
  messagingSenderId: "27875640853",
  appId: "1:27875640853:android:1cf7f7b41e8c292d21301c",
  measurementId: "com.controlPainel12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };