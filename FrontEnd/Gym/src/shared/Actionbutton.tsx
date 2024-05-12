import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Selectedpage } from './types'

type Props = {
    children: React.ReactNode
    setselectedpage: (value:Selectedpage) => void   
}

const Actionbutton = ({children,setselectedpage}: Props) => {
  return (
    <AnchorLink className='bg-orange-500 hover:bg-secondary-500 rounded-full py-2 px-4 text-white'
    onClick={()=>setselectedpage(Selectedpage.Contact)}
    href={`#{Selectedpage.Contact}`}
    >{children}</AnchorLink>
  )
}

export default Actionbutton