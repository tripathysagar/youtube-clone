import { useRouter } from 'next/router';

import Layout from "@/components/layout";

export default function Page() {
  const router = useRouter()
  return <Layout>
            <div className="">
                <iframe src="https://player.vimeo.com/video/146022717?color=0c88dd&title=0&byline=0&portrait=0&badge=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            </div>
        </Layout>
}