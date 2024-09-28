import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const app =
  getApps().length > 0
    ? getApp()
    : initializeApp({
        apiKey: process.env.NEXT_APP_API_KEY,
        authDomain: process.env.NEXT_APP_AUTH_DOMAIN,
        projectId: process.env.NEXT_APP_PROJECT_ID,
        storageBucket: process.env.NEXT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_APP_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_APP_APP_ID,
      })

export const auth = getAuth(app)
export const store = getFirestore(app)
