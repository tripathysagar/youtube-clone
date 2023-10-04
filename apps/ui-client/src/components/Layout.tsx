import { RecoilRoot } from 'recoil';


import { AppBar } from './AppBar';
import { LeftBar } from './LeftBar';


export default function Layout({ children }: {
    children: React.ReactNode
  })
{
  
  return ( 
    <RecoilRoot>
      <div >
        <AppBar />
        <div className="flex place-self-center " >
          <div className="basis-1/12">
          <LeftBar />
          </div>
          <div className="basis-full">
          <main>{children}</main>
          </div>
          
         
        </div>
      </div>
  </RecoilRoot>
  );
}