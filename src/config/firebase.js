import firebase from 'firebase'
//My personal db (firestore)
//It's help me to store posts, comment into db and have a test post

//yes Once we logout or when I close the webpage, it remove automatically
//so I use my personal db to store somme fictive data and store all data which we post
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCtcMc4lRolHBkdvMBvxBp4uR6QIs_yRhU',
  authDomain: 'ynov-crowdfunding.firebaseapp.com',
  projectId: 'ynov-crowdfunding',
  storageBucket: 'ynov-crowdfunding.appspot.com',
  messagingSenderId: '293952176867',
  appId: '1:293952176867:web:213c349b7fdba8200e7bd6',
  measurementId: 'G-KNXQH1LNK8'
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage }
