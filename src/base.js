import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB4adgexFxp9dBEzwq3IgmOw6TPe7_aPB4",
  authDomain: "resolutions-aj.firebaseapp.com",
  databaseURL: "https://resolutions-aj.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };
export default base;
