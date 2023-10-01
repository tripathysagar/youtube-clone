import { useRecoilState } from "recoil";

import {SearchBar} from "./SearchBar";
import {hamburgButton} from "../stores/atoms/HamburgButton";


export function AppBar(){


    const [button, setButton] = useRecoilState(hamburgButton);

    return (
    <div className="flex place-self-center 	pl-1  pt-1  bg-black-500">
        
        <div className="basis-1/6 flex gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" 
            onClick={()=>{
                console.log("button clicked : ", button);
                setButton(!button);
            }
            }>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>

            <div className=" flex">
                <img src="ytIcon.png" className="h-7 w-10" />

                <p className="   font-sans text-justify w-10 hidden sm:block pt-0.5">YouTube</p>

            </div>
            
        </div>
        
        <div className="basis-2/3  flex ">
            <div className="basis-1/4">

            </div>
            <div className="basis-1/2">
                <SearchBar />
                
            </div>
            <div className="basis-1/4">
                
            </div>
        </div>

        <div className="basis-1/6 bg-green-500">
            
        </div>
    </div>
    
    );
}



