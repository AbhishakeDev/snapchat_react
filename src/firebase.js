import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBw3G8WCjuxShaxh-cJ-QIRKD2MryLv6Ac',
  authDomain: 'snapchat-55172.firebaseapp.com',
  projectId: 'snapchat-55172',
  storageBucket: 'snapchat-55172.appspot.com',
  messagingSenderId: '407482477047',
  appId: '1:407482477047:web:f6e7b18ae3d155862ee6f2',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
