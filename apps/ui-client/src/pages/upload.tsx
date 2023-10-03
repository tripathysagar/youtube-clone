import { useState } from "react";
import Image from 'next/image'
export default function Page(){

    const [image, setImage] = useState<File | null>(null);
    const [video, setVideo] = useState<File | null>(null);
    const [title, setTitle] = useState("");

  

  

  return (
    <div>
      <div className=" flex flex-col gap-y-36 " >
        
        
        <div className="flex pl-5">
            <h4>Thumbnail : </h4>
            <input className="pl-5" type="file" name="myImage" accept="image/*" onChange={(e) =>{
                if (e.target.files && e.target.files[0]) {
                    const file = e.target.files[0];
                    setImage(file);
                }}} 
                />
            {image && <Image
                    src={URL.createObjectURL(image)}
                    alt="Selected"
                    width={100}
                    height={100}

                />}
            
            
            
        </div>
      
        
        <div className="flex pl-5">
            <h4>video : </h4>
            <input  className="pl-5" type="file" name="myImage" onChange={(e) =>{
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
        
        <div className="flex pl-5">

        <h4>title : </h4>
        <input type="text" name="title"  onChange={(e) =>{
                    setTitle(e.target.value);
                }} 
                /> 
        </div>
       </div>

        
    
    </div>
  );
}

