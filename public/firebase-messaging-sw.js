importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js')

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('../firebase-messaging-sw.js')
    .then(function (registration) {
      console.log('Registration successful, scope is:', registration.scope)
    })
    .catch(function (err) {
      console.log('Service worker registration failed, error:', err)
    })
}

// // Initialize the Firebase app in the service worker by passing the generated config
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

// // Retrieve firebase messaging
const messaging = firebaseApp.messaging()

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload)

  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})
