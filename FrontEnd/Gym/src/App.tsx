
import Navbar from '@/scenes/Navbar'
import { useEffect, useState } from 'react'
import { Selectedpage } from '@/shared/types'
import Home from './scenes/Home/home'
import Benefits from '@/scenes/Benefits/benefits'
import Classes from './scenes/classes/classes'

import Contactus from '@/scenes/Contactus/Contactus'
import Foot from '@/scenes/Footer/footer'
function App() {
  const[selectedpage,setselectedpage]=useState<Selectedpage>(Selectedpage.Home)
  const [istopofpage,Setistopofpage]=useState<boolean>(true)
  useEffect(()=>{

    const handleScroll=()=> {    if(window.scrollY === 0)
      {
        Setistopofpage(true)
        setselectedpage(Selectedpage.Home)
      }
      else
      {Setistopofpage(false)}}
      window.addEventListener("scroll",handleScroll);
      return()=>window.removeEventListener("scroll",handleScroll)
  },[])
  return (
        <>
      <Navbar
    istopofpage={istopofpage} selectedpage={selectedpage} setselectedpage={setselectedpage}
    />
    <Home setselectedpage={setselectedpage}/>
    <Benefits setselectedpage={setselectedpage}/>
    <Classes setselectedpage={setselectedpage}/>
    <Contactus setselectedpage={setselectedpage}/>
    <Foot/>
    </>
  )
}

export default App
