
import { useState } from "react";
import Image from 'next/image';
import axios from 'axios';

export  function BasePage(){

    const [image, setImage] = useState<File | null>(null);
    const [video, setVideo] = useState<File | null>(null);
    const [title, setTitle] = useState("");
  

  return (
    
    
    <div className="     w-max pt-10 container bg-green-800 ">
    
    <div className=" w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 space-y-6" >
      
      
      <div className="">

          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white pr-5" htmlFor="file_input">Thumnail:</label>
          <input 
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
          name="image" 
          accept="image/*" 
          type="file" 
          onChange={(e) =>{
              if (e.target.files && e.target.files[0]) {
                  const file = e.target.files[0];
                  setImage(file);
              }}}
          />

          
          {/* image && <Image
                  src={URL.createObjectURL(image)}
                  alt="Selected"
                  width={100}
                  height={100}

          /> */   }
          
          
          
      </div>
    
      
      <div className="">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white pr-5" htmlFor="file_input">Video:</label>
          <input 
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
          name="video" 
          accept="video/*"
          type="file" 
          onChange={(e) =>{
              if (e.target.files && e.target.files[0]) {
                  const file = e.target.files[0];
                  setVideo(file);
              }}}
          />
          

          {/* to preview user the video so that user can see it 
              ```
              video && <h4>{video.name}</h4>
              ```
           */}
          


          
          
      
      </div>
      
      <div className="">

      
      <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white pr-5">Title:</label>
      <input type="text" id="title" className="pl-5  border text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  " placeholder="Title" required 
      onChange={(e) =>{
          setTitle(e.target.value);
      }} 
      />
      
  
      </div>

      <button 
      type="button" 
      className="text-white bg-red-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      onClick={(e) =>{
          if(image && video && title){
              console.log(image);
              console.log(video);
              console.log(title);

              
              const data = new FormData();
              data.append('image', image);
              data.append('video', video);
              data.append('title', title);

              axios.post("${apiUrl}/uploadFiles", data)
                      .then(res => { // then print response status
                      console.log(res.statusText)
              })
          }
          
  
      }}>
          Add
      </button>

    </div>
      

    </div>
    
    
        
  );
}

function calculateSize(file : File){
    return file.size / 1024 <= 5 ? true : false;
}