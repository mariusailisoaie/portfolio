import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBcheiqtGixC8pru0tOgD5D7h1YlI94TVE",
  authDomain: "plan-react-app.firebaseapp.com",
  databaseURL: "https://plan-react-app.firebaseio.com",
  projectId: "plan-react-app",
  storageBucket: "plan-react-app.appspot.com",
  messagingSenderId: "954926314000"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;