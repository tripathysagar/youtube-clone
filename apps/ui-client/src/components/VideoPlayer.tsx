export function VideoPlayer(){
    return <div className="col-span-12 md:col-span-9 sm:col-span-8">
        <video 
        width={"1100px"} 
        height={"900px"} 
        controls src={"/dogRunning_360.mp4"} 
        className="rounded-xl"
        />
        <div className="text-2xl">
            Dog running
        </div>
    </div>
    
}