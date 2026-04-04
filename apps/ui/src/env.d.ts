/** Build-time env injected by Nx webpack (NX_* only) + NODE_ENV. */
declare const process: {
  env: {
    NODE_ENV?: 'development' | 'production' | 'test';
    NX_API_ENDPOINT?: string;
    NX_FIREBASE_API_KEY?: string;
    NX_FIREBASE_AUTH_DOMAIN?: string;
    NX_FIREBASE_PROJECT_ID?: string;
    NX_FIREBASE_STORAGE_BUCKET?: string;
    NX_FIREBASE_MESSAGING_SENDER_ID?: string;
    NX_FIREBASE_APP_ID?: string;
    NX_FIREBASE_DATABASE_URL?: string;
  };
};
