import { useRouter } from 'next/router';

import Layout from "@/components/Layout";

export default function Page() {
  //const router = useRouter()
  return <Layout>
            <div className="grid gap-4 grid-cols-12 pt-5">
            <div className="col-span-12 md:col-span-9 sm:col-span-8">
                <video width={"100%"} height={"720px"} controls src="https://dxip4wcd8mhk4.cloudfront.net/These+Coding+Projects+Give+You+An+Unfair+Advantage.mp4" />
                <div className="text-2xl">
                    How to get better at coding
                </div>
            </div>
            </div>
        </Layout>
}