import config from '@/config/config'

import { initializeApp } from 'firebase';

export const db = initializeApp(config.firebaseConfig);


