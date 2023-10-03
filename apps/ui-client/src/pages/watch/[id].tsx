import { useRouter } from 'next/router';
import { VideoPlayer } from '@/components/VideoPlayer';


import Layout from "@/components/Layout";

export const videos = [
    {
      id : 1,
      image: "Sumatran_Tiger.jpg",
      thumb: "thumb.png",
      title: "tiger running",
      author: "animals running",
      views: "68M views",
      timestamp: "2 months ago",
      duration: "0:48"
    },
    {
      id : 2,
      image: "dog.jpg",
      thumb: "thumb.png",
      title: "Week 20 | Tailwind, flex, grids , react recap (27th Aug)",
      author: "animals running",
      views: "68M views",
      timestamp: "2 months ago",
      duration: "0:32"
    },
  ]


export default function Page() {
  //const router = useRouter()
  return <Layout>
            <div className="  pt-5 pl-5 bg-slate-900 w-screen h-screen ">
                <VideoPlayer />
                
            </div>
        </Layout>
}









