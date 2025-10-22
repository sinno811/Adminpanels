// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
apiKey: "AIzaSyB_Lu37H2-Hr7bkmNWXAYE6VXtrjpfT6SI",
  authDomain: "key3-9659b.firebaseapp.com",
  databaseURL: "https://key3-9659b-default-rtdb.firebaseio.com",
  projectId: "key3-9659b",
  storageBucket: "key3-9659b.firebasestorage.app",
  messagingSenderId: "27875640853",
  appId: "1:27875640853:web:3819bef9d411a2d721301c",
  measurementId: "G-EYRMKS5F02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };
