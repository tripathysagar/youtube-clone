
import { Video } from "./types";

export function VideoCard({video}: {video: Video}){
     
    return <div className="sm:w-full p-2"  id={video.id.toString()}>

    <div className="relative">
        
        
        
        <div className="realtive"></div>
        
            <div className="absolute bottom-1.5 right-1.5 bg-black rounded-sm">
                <h6 className="text-white text-xs font-medium ">{video.duration}</h6>
            </div>
            <img src={video.image} 
                className="rounded-xl" >
            </img>
        </div>
        
        

        <div className="grid grid-cols-12 pt-2">
            
            <div className="col-span-1">
                <img className={"rounded-full w-8 h-8 ml-1"} src={video.thumb} ></img>
            </div>
            
            <div className="col-span-9 pl-2">
                <div>
                    {video.title} 
                </div>
                
                <div className="col-span-9 text-gray-400 text-base ">
                    {video.author}
                </div>

                <div className="col-span-9 text-gray-400 text-base">
                    {video.views} | {video.timestamp}
                </div>
            </div>   
        </div>
    </div>
}