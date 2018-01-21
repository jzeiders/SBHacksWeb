import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { createStore, combineReducers, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import * as firebase from "firebase";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";

const config = {
  apiKey: "AIzaSyDtUEkf6AGXzX1wOrC0r55EfgkwngVydNI",
  authDomain: "sbhacks-6e5fa.firebaseapp.com",
  databaseURL: "https://sbhacks-6e5fa.firebaseio.com",
  projectId: "sbhacks-6e5fa",
  storageBucket: "sbhacks-6e5fa.appspot.com",
  messagingSenderId: "240082589538"
};
// react-redux-firebase config
const rrfConfig = {
  userProfile: "Users"
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// initialize firebase instance
firebase.initializeApp(config); // <- new to v2.*.*

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig)
)(createStore);

const createStoreWithDevTools = compose(composeWithDevTools())(
  createStoreWithFirebase
);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer
});

// Create store with reducers and initial state
const initialState = {};
const store = createStoreWithDevTools(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
