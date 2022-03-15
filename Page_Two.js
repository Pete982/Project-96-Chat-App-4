  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAJ_DRvTSKKdOjyuB8SmigASW_UMB6Mi60",
    authDomain: "project-96-chat-app-3.firebaseapp.com",
    projectId: "project-96-chat-app-3",
    storageBucket: "project-96-chat-app-3.appspot.com",
    messagingSenderId: "930782844469",
    appId: "1:930782844469:web:07e06d29a9935dbe27437c",
    measurementId: "G-7E43PJFX85"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


  firebase.initializeApp(config);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "Page_Three.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "Page_One.html";
}
