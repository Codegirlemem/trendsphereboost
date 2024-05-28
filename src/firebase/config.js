import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDlXe5v9UsVwMfuBJh5SyAZuAOuLBKZvyc',
  authDomain: 'trendsphereboost.firebaseapp.com',
  projectId: 'trendsphereboost',
  storageBucket: 'trendsphereboost.appspot.com',
  messagingSenderId: '581577947590',
  appId: '1:581577947590:web:ef4a643d8ea0bf10269ac7',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
