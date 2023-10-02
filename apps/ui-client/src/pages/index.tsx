
import { Inter } from 'next/font/google'
import {VideosGrid} from '@/components/VideosGrid';
import Layout from "@/components/Layout"

const inter = Inter({ subsets: ['latin'] })


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

export default function Home() {
  return ( 
      <Layout>
          <VideosGrid videos={videos} />
      </Layout>
  )
}
