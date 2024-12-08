  // Import the functions you need from the SDKs you need
    import {initializeApp} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
    import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
    // Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "AIzaSyDN8YknwiDNhclX7_IkHC42h8_ukbfS9ww",
    authDomain: "projetfirebase-a2758.firebaseapp.com",
    projectId: "projetfirebase-a2758",
    storageBucket: "projetfirebase-a2758.firebasestorage.app",
    messagingSenderId: "1061071231571",
    appId: "1:1061071231571:web:07c154e27798c1ec0844a6"
  };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);

    //ajout du gestionnaire des evenements 
document.getElementById("submitt").addEventListener("click", function(e){
    e.preventDefault();
    console.log("clic detecte");
    set(ref(db, "user/" + document.getElementById("name").value),{
        nom:document.getElementById("name").value,
        Email:document.getElementById("email").value,
        telephone:document.getElementById("phone").value,
        message:document.getElementById("message").value
    });
    alert("Hello");
});
