/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC5_53gybOdap1itBp3HDERH60bbeQLWlw',
  authDomain: 'expense-tracker-1c628.firebaseapp.com',
  projectId: 'expense-tracker-1c628',
  storageBucket: 'expense-tracker-1c628.appspot.com',
  messagingSenderId: '745706888061',
  appId: '1:745706888061:web:676dc99aba04733e08ca14',
  measurementId: 'G-XHSK4RHRS9',
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
