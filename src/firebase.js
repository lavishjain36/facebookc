import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCzFRIsMod7X-xlqYds8QgtBnmmR5bVrXs",
    authDomain: "facebook-clone-3b007.firebaseapp.com",
    databaseURL: "https://facebook-clone-3b007.firebaseio.com",
    projectId: "facebook-clone-3b007",
    storageBucket: "facebook-clone-3b007.appspot.com",
    messagingSenderId: "411304214747",
    appId: "1:411304214747:web:dab702d7bf212b84790cfe",
    measurementId: "G-0J5711C78P"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;