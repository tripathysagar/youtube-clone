
import { Inter } from 'next/font/google'
import {VideosGrid} from '@/components/VideosGrid';
import { AppBar } from '@/components/AppBar';
import { LeftBar } from '@/components/LeftBar';
import { RecoilRoot } from 'recoil';
const inter = Inter({ subsets: ['latin'] })


const videos = [
  {
    id : 1,
    image: "photo.png",
    thumb: "thumb.png",
    title: "Week 12.2 | Tailwind, flex, grids , react recap (27th Aug)",
    author: "madara",
    views: "68M views",
    timestamp: "2 months ago",
  },
  {
    id : 2,
    image: "photo.png",
    thumb: "thumb.png",
    title: "Week 20 | Tailwind, flex, grids , react recap (27th Aug)",
    author: "madara",
    views: "68M views",
    timestamp: "2 months ago",
  },
  {
    id : 3,
    image: "photo.png",
    thumb: "thumb.png",
    title: "Week 12.2 | Tailwind, flex, grids , react recap (27th Aug)",
    author: "madara",
    views: "68M views",
    timestamp: "2 months ago",
  },
  {
    id : 4,
    image: "photo.png",
    thumb: "thumb.png",
    title: "Week 12.2 | Tailwind, flex, grids , react recap (27th Aug)",
    author: "madara",
    views: "68M views",
    timestamp: "2 months ago",
  },
  {
    id : 5,
    image: "photo.png",
    thumb: "thumb.png",
    title: "Week 12.2 | Tailwind, flex, grids , react recap (27th Aug)",
    author: "madara",
    views: "68M views",
    timestamp: "2 months ago",
  },
  {
    id : 6,
    image: "photo.png",
    thumb: "thumb.png",
    title: "Week 12.2 | Tailwind, flex, grids , react recap (27th Aug)",
    author: "madara",
    views: "68M views",
    timestamp: "2 months ago",
  },
  {
    id : 7,
    image: "photo.png",
    thumb: "thumb.png",
    title: "Week 12.2 | Tailwind, flex, grids , react recap (27th Aug)",
    author: "madara",
    views: "68M views",
    timestamp: "2 months ago",
  },
  {
    id: 8,
    image: "photo.png",
    thumb: "thumb.png",
    title: "Week 12.2 | Tailwind, flex, grids , react recap (27th Aug)",
    author: "madara",
    views: "68M views",
    timestamp: "2 months ago",
  },
  {
    id : 9,
    image: "photo.png",
    thumb: "thumb.png",
    title: "Week 12.2 | Tailwind, flex, grids , react recap (27th Aug)",
    author: "madara",
    views: "68M views",
    timestamp: "2 months ago",
  },
  {
    id : 10,
    image: "photo.png",
    thumb: "thumb.png",
    title: "Week 12.2 | Tailwind, flex, grids , react recap (27th Aug)",
    author: "madara",
    views: "68M views",
    timestamp: "2 months ago",
  },
  {
    id : 11,
    image: "photo.png",
    thumb: "thumb.png",
    title: "Week 12.2 | Tailwind, flex, grids , react recap (27th Aug)",
    author: "madara",
    views: "68M views",
    timestamp: "2 months ago",
  },
  {
    id : 12,
    image: "photo.png",
    thumb: "thumb.png",
    title: "Week 20 | Tailwind, flex, grids , react recap (27th Aug)",
    author: "madara",
    views: "68M views",
    timestamp: "2 months ago",
  },
  {
    id : 13,
    image: "photo.png",
    thumb: "thumb.png",
    title: "Week 12.2 | Tailwind, flex, grids , react recap (27th Aug)",
    author: "madara",
    views: "68M views",
    timestamp: "2 months ago",
  },
  {
    id : 14,
    image: "photo.png",
    thumb: "thumb.png",
    title: "Week 12.2 | Tailwind, flex, grids , react recap (27th Aug)",
    author: "madara",
    views: "68M views",
    timestamp: "2 months ago",
  },
  {
    id : 15,
    image: "photo.png",
    thumb: "thumb.png",
    title: "Week 12.2 | Tailwind, flex, grids , react recap (27th Aug)",
    author: "madara",
    views: "68M views",
    timestamp: "2 months ago",
  },
  {
    id: 16,
    image: "photo.png",
    thumb: "thumb.png",
    title: "Week 12.2 | Tailwind, flex, grids , react recap (27th Aug)",
    author: "madara",
    views: "68M views",
    timestamp: "2 months ago",
  },
  {
    id : 17,
    image: "photo.png",
    thumb: "thumb.png",
    title: "Week 12.2 | Tailwind, flex, grids , react recap (27th Aug)",
    author: "madara",
    views: "68M views",
    timestamp: "2 months ago",
  },
  {
    id : 18,
    image: "photo.png",
    thumb: "thumb.png",
    title: "Week 12.2 | Tailwind, flex, grids , react recap (27th Aug)",
    author: "madara",
    views: "68M views",
    timestamp: "2 months ago",
  },
  {
    id : 19,
    image: "photo.png",
    thumb: "thumb.png",
    title: "Week 12.2 | Tailwind, flex, grids , react recap (27th Aug)",
    author: "madara",
    views: "68M views",
    timestamp: "2 months ago",
  },
  {
    id : 20,
    image: "photo.png",
    thumb: "thumb.png",
    title: "Week 12.2 | Tailwind, flex, grids , react recap (27th Aug)",
    author: "madara",
    views: "68M views",
    timestamp: "2 months ago",
  }
]
export default function Home() {
  return ( 
    <RecoilRoot>
      <div >
        <AppBar />
        <div className="flex">
          <LeftBar />
          
          <VideosGrid videos={videos} />
        </div>
      </div>
  </RecoilRoot>
  )
}
