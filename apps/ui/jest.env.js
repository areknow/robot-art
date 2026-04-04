// Jest does not use the webpack DefinePlugin; set defaults so imports that read env work.
const defaults = {
  NX_API_ENDPOINT: 'http://localhost:3333',
  NX_FIREBASE_API_KEY: 'test-api-key',
  NX_FIREBASE_AUTH_DOMAIN: 'test.firebaseapp.com',
  NX_FIREBASE_PROJECT_ID: 'test-project',
  NX_FIREBASE_STORAGE_BUCKET: 'test-project.appspot.com',
  NX_FIREBASE_MESSAGING_SENDER_ID: '000000000000',
  NX_FIREBASE_APP_ID: '1:000000000000:web:000000000000000000000',
  NX_FIREBASE_DATABASE_URL: 'https://test-project-default-rtdb.firebaseio.com/',
};

Object.keys(defaults).forEach((key) => {
  if (process.env[key] === undefined) {
    process.env[key] = defaults[key];
  }
});
