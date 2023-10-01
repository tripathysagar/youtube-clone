import { useRecoilValue } from "recoil";
import {hamburgButton} from "../stores/atoms/HamburgButton";

const icons = [
    ["Home", "M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"],
    ["Short", "M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"],
    ["Subscriptions", "M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"],
    ["Library", "m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"],
    ["Histroy", "M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"]
]


export const LeftBar = () => {
    return <div className="bg-gray-950 w-30 hidden md:block pr-2 ">
      
      <BarWithIcon name={icons[0][0]} path={icons[0][1]} />
      <BarWithIcon name={icons[1][0]} path={icons[1][1]} />
      <BarWithIcon name={icons[2][0]} path={icons[2][1]} />
      <Line />

      <BarWithIcon name={icons[3][0]} path={icons[3][1]} />
      <BarWithIcon name={icons[4][0]} path={icons[4][1]} />
      <Line />
      
    </div>
}

export const Line = () => {
    return <div className="w-full bg-gray-200 h-px dark:bg-gray-700 pl-1 pr-3 opacity-20">
    <div className="bg-red-600 h-0.5 dark:bg-gray-500" style={{width: "100%"}}></div>
  </div>
}

function BarWithIcon({name, path }: {name:string, path:string}) {

    return   (<div className="overflow-x-visible">
                <BarElement title={name} icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d={path} />
                </svg>
                } 
                />
            </div>);
}


function BarElement({icon, title}: {icon: any; title: string;}) {

    const button = useRecoilValue(hamburgButton);

    if(!button){
        // button is clicked
        return (
        <div className="w-full rounded-xl bg-slate-950 hover:bg-gray-700 flex w-30  p-2 m-2 cursor-pointer flex-col">
            <div className="pr-2">
                {icon}
            </div>
            <div className="text-xs"> {title} </div> 
        </div>
        )
    }

    // button is not clicked

    return <div className="w-full rounded-xl bg-slate-950 hover:bg-gray-700 flex w-30  p-2 m-2 cursor-pointer">
        <div className="pr-2">
            {icon}
        </div>
        
        
        { button && <div className="text-base"> {title} </div> }
    </div>
}