import { Selectedpage } from '@/shared/types'
import useMediaQuery from '@/hooks/MediaQuery'
import Actionbutton from '@/shared/Actionbutton'
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
// import men from '@/assets/daniel-apodaca-WdoQio6HPVA-unsplash.jpg'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'




type Props = {
setselectedpage:(value:Selectedpage)=>void
}

const home = ({setselectedpage}: Props) => {
    const isAboveMediumScreens=useMediaQuery("(min-width:1060px)");
  return (
    <section
    
    id="home"
    // md:h-5/6
    className='gap-16 bg-gray-20 py-10  md:pb-0'
    >{/*Header and Image */}
        <motion.div className='justify-center items-center w-5/6 md:flex mt-40 mx-auto'
        onViewportEnter={()=>setselectedpage(Selectedpage.Home)}>
            {/*Headers */}
            <div className='z-10 mt-32 md:basis-3/5'>
 
                <motion.div className='md:-mt-20' initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}} transition={{duration:0.5}} variants={{hidden:{opacity:0.5, x:-50},visible:{opacity:1,x:0} }}>
                    <div className='relative'>
                        <div className='before:absolute before:-top-20 
                        before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                        <img src={HomePageText}/> 
                        </div>
                    </div>
                    
                </motion.div>
                <motion.div className='mt-8 text-sm'
                initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}} transition={{duration:0.5}} variants={{hidden:{opacity:0.5, x:-50},visible:{opacity:1,x:0} }}>
                <p> Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.</p>
                </motion.div>
                <motion.div className='mt-8 flex items-center gap-8 md:justify-start '
                initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}} transition={{delay:0.2,duration:0.5}} variants={{hidden:{opacity:0.5, x:-50},visible:{opacity:1,x:0} }}>
                    <Actionbutton setselectedpage={setselectedpage}> Join Now</Actionbutton>
                    <AnchorLink className='text-sm font-bold text-primary-500 hover:text-secondary-500' href={`#${Selectedpage.Contact}`}
                    onClick={()=>setselectedpage(Selectedpage.Contact)}
                    > LearnMore</AnchorLink>
                </motion.div>
            </div>
            <div>
                <img  src={HomePageGraphic} />
            </div>
        </motion.div>
        {
            isAboveMediumScreens && (
                <div className='bg-primary-100 py-10 mt-10'>
                    <div className=' w-5/6 mx-auto'>
                        <div className='flex w-3/5 items-center justify-between gap-10'>
                            <img src={SponsorRedBull} alt="" />
                            <img src={SponsorForbes} alt="" />
                            <img src={SponsorFortune} alt="" />

                        </div>
                    </div>
                </div>
            )
        }
    </section>
  )
}

export default home