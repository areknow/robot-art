import firebase from 'firebase';
import { environment } from '../../../environments/environment';

firebase.initializeApp(environment.firebaseConfig);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
