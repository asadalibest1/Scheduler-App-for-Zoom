import firebase from 'firebase'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);


export default function firebaseService(){
    const messaging = firebase.messaging();
        Notification.requestPermission().then((permission) => { 
            console.log(permission)
            if(permission === "granted"){
                messaging.getToken().then((currentToken) => {
                    if (currentToken) {
                        console.log("TOKEN")
                        console.log(currentToken);
                    } else {
                      console.log('No Instance ID token available. Request permission to generate one.');
        
                    }
                  }).catch((err) => {
                    console.log('An error occurred while retrieving token. ', err);
                  });
            }
        
        })
}