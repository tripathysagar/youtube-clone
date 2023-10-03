import  fs from 'fs';

import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";

import { firebaseConfig } from "./firebaseConfig.js";


const app = initializeApp(firebaseConfig);

const storage = getStorage();
const imagesRef = ref(storage, 'images');

const imagePath = './dog.jpg';

// Read the image file as a buffer
fs.readFile(imagePath, (err, data) => {
  if (err) {
    console.error('Error reading the image file:', err);
    return;
  }

  // Upload the image data to Firebase Storage
  const sparkyRef = ref(imagesRef, 'sparkey.jpg'); // Specify the desired file name in Firebase Storage
  uploadBytes(sparkyRef, data)
    .then((_snapshot) => {
      console.log('Uploaded the image successfully!');
    })
    .catch((error) => {
      console.error('Error uploading the image:', error);
    });
});

