import firebase from 'firebase'
import 'firebase/messaging'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCvoKurpLaU4xSXD58g4dmM2iR6Qh-XRUU",
  authDomain: "ynov-crowdfunding-fe14a.firebaseapp.com",
  projectId: "ynov-crowdfunding-fe14a",
  storageBucket: "ynov-crowdfunding-fe14a.appspot.com",
  messagingSenderId: "626974305988",
  appId: "1:626974305988:web:d5b39fa886887fff43a391",
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
