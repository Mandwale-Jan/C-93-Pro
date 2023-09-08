//YOUR FIREBASE LINKS

//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCgHo6_0_JB8lmXpdTXZZ-rqGahZHnZu1g",
      authDomain: "twitter-66ee9.firebaseapp.com",
      databaseURL: "https://twitter-66ee9-default-rtdb.firebaseio.com",
      projectId: "twitter-66ee9",
      storageBucket: "twitter-66ee9.appspot.com",
      messagingSenderId: "993028456476",
      appId: "1:993028456476:web:11aad0d576bc03fff2dfd9"
    };
    firebase.initializeApp(firebaseConfig);
    // Initialize Firebase

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
