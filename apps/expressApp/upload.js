import { readFile } from 'node:fs/promises';
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import path from "path";

import { firebaseConfig } from "./firebaseConfig.js";


const app = initializeApp(firebaseConfig);





// Read the image file as a buffer

export async function writeToFirebase(imageName, imageExtention, videoName, videoExtention){
  const storage = getStorage();
  const fileRef = ref(storage, 'files/');

  try{

  console.log(imageName,imageExtention,videoName,videoExtention);
    

    const image =   await readFile(path.join( './uploads/' + imageName));
    const video =  await readFile(path.join( './uploads/' +   videoName));

    const imageRef = ref(fileRef, `${imageName}.${imageExtention}`);
    const videoRef = ref(fileRef, `${videoName}.${videoExtention}`);

    console.log("file read sucessful");

    let time = Date.now();

    await uploadBytes(imageRef, image);

    console.log(`image uploaded, time taken is  : ${Date.now() - time}`);

    time = Date.now();

    await uploadBytes(videoRef, video);
    console.log(`video uploaded, time taken is  : ${Date.now() - time}`);

  }catch(error){
    console.log(error)
    return {
      status: false,
      message: "got error, during uploading try again"
    }
  }

  return {
    status: true,
    message: "sucessfully uploaded"
  }

}


writeToFirebase("feb618a0f69063863a50496b6628d639", "jpg", "60e257ab4fd44b956c5b72fd6f47a0fc", "mp4")