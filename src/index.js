import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
// import App from './App';
import Routes from "./components/Routes";
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Store from './store/Store';
import firebase from 'firebase'

ReactDOM.render(
    <PersistGate loading={false} persistor={Store.persistor}>

    <Provider store={Store.store}>

    <Router>
        <Routes />
    </Router>
    </Provider>
    </PersistGate>
    , document.getElementById('root'));
registerServiceWorker();



// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA_9LTIcnOckxwnmsK_TWoCkxVembi9m8g",
    authDomain: "cashandcarry-14f29.firebaseapp.com",
    projectId: "cashandcarry-14f29",
    storageBucket: "cashandcarry-14f29.appspot.com",
    messagingSenderId: "116874830184",
    appId: "1:116874830184:web:ebed0c6585c5db7c3076dd",
    measurementId: "G-0WDLQDV0RR"
  };
  //Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  if(!firebase.apps.length)
  firebase.initializeApp(firebaseConfig);