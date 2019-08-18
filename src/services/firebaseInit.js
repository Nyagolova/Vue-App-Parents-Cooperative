import config from '@/config/config'

import { initializeApp } from 'firebase';

export const app = initializeApp(config.firebaseConfig);

export const db = app.database();


