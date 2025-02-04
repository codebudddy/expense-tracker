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

const BUCKET_URL = 'gs://expense-tracker-1c628.appspot.com';

import { format } from 'date-fns';
import {
  deleteObject,
  getDownloadURL as getStorageDownloadURL,
  ref,
  uploadBytes,
} from 'firebase/storage';
import { storage } from './firebase';

export async function uploadImage(image, uid) {
  const formatDate = format(new Date(), "yyyy-MM-dd'T'HH:MM:SS'Z'");
  const bucket = `${BUCKET_URL}/${uid}/${formatDate}.jgp`;
  const storageRef = ref(storage, bucket);
  await uploadBytes(storage, image);
  return bucket;
}
