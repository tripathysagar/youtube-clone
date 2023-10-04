import express from "express";
import multer from "multer";
import path from "path";

import {writeToFirebase} from "./upload.js";

const upload = multer({ dest: 'uploads/' })
const app = express();

app.get("/", (req, res) => {
  return res.send("app is running");
});

app.post('/upload', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'video', maxCount: 1 }]), async function (req, res, next) {
  // req.files is an object with fieldname as keys and an array of files as values

  function extractFileExtention(filename){
    let afterSplit = filename.split('.');
    return afterSplit[afterSplit.length -1]
  }
  let {image, video} = req.files;
  image = image[0];
  video = video[0];

  console.log(image, video);
  let imageExtention = extractFileExtention(image.originalname);
  let videoExtention = extractFileExtention(video.originalname);
  
  let imageName = image.filename;
  let videoName = video.filename;

  console.log(imageName,imageExtention,videoName,videoExtention);
  
  const writeResp = await writeToFirebase(imageName,imageExtention,videoName,videoExtention );

  if(writeResp.status){
    res.status(202).send({
        message : writeResp.message
    });
    return
  }
  res.status(500).send({
    message : writeResp.message
});

});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
