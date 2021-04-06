import firebase from 'firebase'
import 'firebase/messaging'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCtcMc4lRolHBkdvMBvxBp4uR6QIs_yRhU',
  authDomain: 'ynov-crowdfunding.firebaseapp.com',
  databaseURL:
    'https://ynov-crowdfunding-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'ynov-crowdfunding',
  storageBucket: 'ynov-crowdfunding.appspot.com',
  messagingSenderId: '293952176867',
  appId: '1:293952176867:web:213c349b7fdba8200e7bd6',
  measurementId: 'G-KNXQH1LNK8'
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const messaging = firebase.messaging()

const getToken = setTokenFound => {
  return messaging
    .requestPermission()
    .then(() => {
      return messaging.getToken()
    })
    .then(data => {
      setTokenFound(data)
      console.warn('token', data)
    })
}
const onMessageListener = () =>
  // eslint-disable-next-line no-undef
  new Promise(resolve => {
    messaging.onMessage(payload => {
      resolve(payload)
    })
  })

export { db, auth, storage, getToken, onMessageListener }
