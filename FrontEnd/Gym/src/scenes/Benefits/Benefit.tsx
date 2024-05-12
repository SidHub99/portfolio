import { Selectedpage } from '@/shared/types'
import { motion } from 'framer-motion'

import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    icon: JSX.Element,
    title: string,
    description: string,
    setselectedpage:(value:Selectedpage)=>void
}
const childvariant={
    hidden:{opacity:0,scale:0.9},
    visible:{opacity:1,scale:1}
}

const Benefit = ({icon,title,description,setselectedpage}: Props) => {
  return (
    <>
    <motion.div className='mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center flex justify-center flex-col'
    variants={childvariant}
    >
        <div
        className='mb-4 flex justify-center '
        >
            <div className='rounded-full border-2 border-gray-100 bg-primary-100 p-6'>
                {icon}
            </div>
        </div>
    <h1 className='font-bold'>{title}</h1>
    <p className='my-3'>{description}</p>
    <AnchorLink className='text-sm font-bold text-primary-500 hover:text-secondary-500' href={`#${Selectedpage.Contact}`}
                    onClick={()=>setselectedpage(Selectedpage.Contact)}
                    > LearnMore</AnchorLink>
    </motion.div>
    </>
  )
}

export default Benefit