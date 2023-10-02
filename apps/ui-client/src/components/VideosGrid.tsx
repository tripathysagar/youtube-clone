

import { VideoCard } from "./VideoCard";
import { Video } from "./types";


export function VideosGrid({videos}: any){


    return <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 ">
        {videos.map((video: Video) =>{
            return (
                <VideoCard
                    video={video}
                ></VideoCard>
            )
        })}
        
      
    </div>
}