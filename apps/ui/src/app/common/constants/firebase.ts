import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import { environment } from '../../../environments/environment';

/**
 * Firebase initialization and exported singletons.
 */

firebase.initializeApp(environment.firebaseConfig);

export const ref = firebase.database().ref();
export const storage = firebase.storage().ref();
export const firebaseAuth = firebase.auth;
