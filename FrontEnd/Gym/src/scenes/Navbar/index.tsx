// import { useState } from "react";
import {Bars3Icon,XMarkIcon} from '@heroicons/react/24/solid';
import { useState } from 'react';
import logo from '@/assets/Logo.png'
import Link from './links';
import { Selectedpage } from '@/shared/types';
import Actionbutton from '@/shared/Actionbutton';
import useMediaQuery from "@/hooks/MediaQuery"
type Props = {
    istopofpage:boolean,
    selectedpage:Selectedpage;
    setselectedpage:(value:Selectedpage)=>void;
};

const Navbar = ({istopofpage,selectedpage,setselectedpage}: Props) => {
    const[menu,setMenu]=useState<boolean>(false)
    const flexbeween="flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbackground= istopofpage ?"" : "bg-black bg-opacity-75  drop-shadow"

  return (
    <nav>
        <div className={`${navbackground} ${flexbeween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexbeween} mx-auto w-5/6`}>
            <div  className={`${flexbeween} w-full gap-16`}>
                <img src={logo}></img>
                {
                isAboveMediumScreens? <div  className={`${flexbeween} w-full`}>
                    <div  className={`${flexbeween} gap-8 text-sm`}>
                    <Link page="Home" selectedpage={selectedpage} setselectedpage={setselectedpage}/>
                    <Link page="Benefits" selectedpage={selectedpage} setselectedpage={setselectedpage}/>
                    <Link page="Classes" selectedpage={selectedpage} setselectedpage={setselectedpage}/>
                    <Link page="Contact" selectedpage={selectedpage} setselectedpage={setselectedpage}/>
                    </div>
                    <div className={`${flexbeween} gap-5`}>
                    <p>signin</p>
                    <Actionbutton setselectedpage={setselectedpage}>Become a member</Actionbutton>
                    
                    </div>
                </div>
            :(
                <button 
                className='rounded-full bg-orange-500 p2'
                onClick={()=>setMenu(!menu)}
                >
                    <Bars3Icon className='h-7 w-7 text-white' />
                </button>
            )    
            }
            </div>

        </div>

        </div>
        {
            !isAboveMediumScreens && menu &&(
                <div
                className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl rounded-2xl'
                >
                    <div
                    className='flex justify-end p-12'
                    >
                        <button onClick={()=>setMenu(!menu)}>
                            <XMarkIcon className='h-6 w-6 text-gray-400' />
                        </button>
                        
                    </div>
                    <div>
                    <div  className="ml-[33%] flex flex-col gap-10 text-2xl">
                    <Link page="Home" selectedpage={selectedpage} setselectedpage={setselectedpage}/>
                    <Link page="Benefits" selectedpage={selectedpage} setselectedpage={setselectedpage}/>
                    <Link page="Classes" selectedpage={selectedpage} setselectedpage={setselectedpage}/>
                    <Link page="Contact" selectedpage={selectedpage} setselectedpage={setselectedpage}/>
                    </div>
                    </div>
                </div>
            )
        }
    </nav>
  );
}

export default Navbar
