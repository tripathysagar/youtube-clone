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
        <div className="flex">
          <LeftBar />
          
          <main>{children}</main>
        </div>
      </div>
  </RecoilRoot>
  );
}