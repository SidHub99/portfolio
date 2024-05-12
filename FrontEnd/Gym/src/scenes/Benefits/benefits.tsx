import Htext from '@/shared/Htext'
import { Selectedpage } from '@/shared/types'
import{HomeModernIcon,UserGroupIcon,AcademicCapIcon} from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { BenefitType } from '@/shared/types'
import Benefit from './Benefit'
import Actionbutton from '@/shared/Actionbutton'
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'

type Props = {
    setselectedpage:(value:Selectedpage)=>void
}

const benefits = ({setselectedpage}: Props) => {
    const benefits: Array<BenefitType>=[
        {
            icon:<HomeModernIcon className='h-6 w-6'/>,
            title: "State of the Art Facilities",
            description:"Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
        },
        {
            icon:<UserGroupIcon className='h-6 w-6'/>,
            title: "State of the Art Facilities",
            description:"Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
        },
        {
            icon:<AcademicCapIcon className='h-6 w-6'/>,
            title: "State of the Art Facilities",
            description:"Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
        }
    ]
    const container={
        hidden:{},
        visible:{
            transition:{staggerChildren:0.2}    
        }
    }
  return (
    <>
    <section id="benefits"
    className='mx-auto min-h-full w-5/6 py-20'
    >
        <motion.div onViewportEnter={()=>setselectedpage(Selectedpage.Benefits)}>
            {/*header*/}
            <motion.div className='md:w-3/5 md:my-5'
            initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}} transition={{duration:0.5}} variants={{hidden:{opacity:0.5, x:-50},visible:{opacity:1,x:0} }}>
                <Htext>MORE THAN JUST A GYM.</Htext>
                <p className='my-5 text-sm'>
                    We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease.We provide true care into each and every member.
                </p>
            </motion.div>
            {/*image*/}
            <motion.div className='mt-5 items-center justify-between gap-8 md:flex'
            initial="hidden"
            whileInView={"visible"}
            viewport={{once:true,amount:0.5}}
            variants={container}
            >
                {benefits.map((benefit)=>(
                    <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} setselectedpage={setselectedpage}/>
                ))}
            </motion.div>

            {/*benefits*/}
            <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
            <img className='mx-auto' src={BenefitsPageGraphic} alt="" />
            {/*description*/}
            <div>
                {/* title */}
                <div className='relative'>
                <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves'>

                    <div>
                    <Htext>
                                    MILLIONS OF HAPPY MEMBERS GETTING{"  "}
                                        <span className='text-primary-500'>FIT</span>
                                    </Htext>
                    </div>
                </div>

                </div>
                {/* description */}
                <div>
                <p className='my-5'>                    We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease.We provide true care into each and every member. </p>
                        <p className='mb-5'>                    We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease.We provide true care into each and every member.</p>
                </div>
                {/* button */}
                <div className='relative m-16'>
                        <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                            <Actionbutton setselectedpage={setselectedpage}>Join Now</Actionbutton>
                        </div>
                    </div>
            </div>
            </div>
        </motion.div>

    </section>
    </>
  )
}

export default benefits