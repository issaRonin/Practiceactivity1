// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBTwO11l1krCFNMrVSmo5J3nroAaGsSC0w",
    authDomain: "kwitter-d80b2.firebaseapp.com",
    databaseURL: "https://kwitter-d80b2-default-rtdb.firebaseio.com",
    projectId: "kwitter-d80b2",
    storageBucket: "kwitter-d80b2.appspot.com",
    messagingSenderId: "95152027287",
    appId: "1:95152027287:web:90b5d4303a282ff2171bd2"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}