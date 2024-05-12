import { Selectedpage } from '@/shared/types'
import { motion } from 'framer-motion'

import {useForm} from 'react-hook-form'
import ContactUsGraphic from '@/assets/ContactUsPageGraphic.png'
import Htext from '@/shared/Htext'
type Props = {
    setselectedpage:(value:Selectedpage)=>void
}   

const Contactus = ({setselectedpage}: Props) => {
    const{
        register,
        trigger,
        formState:{errors},
     }=useForm();
    const onsubmit=async(e:any)=>{
        const isvalid=await trigger();
        if(!isvalid){
            e.preventDefault();
        }
    }
  return (
    <section id="contact" className='mx-auto w-5/6 pt-24 pb-32'>
        <motion.div onViewportEnter={()=>setselectedpage(Selectedpage.Contact)}>
            {/* header */}
            <motion.div className='md:w-3/5' initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}} transition={{duration:0.5}} variants={{hidden:{opacity:0.5, x:-50},visible:{opacity:1,x:0} }}>
                <Htext> 
                    <span className='text-primary-500'>
                        JOIN NOW
                    </span> TO GET IN SHAPE
                </Htext>
                <p>Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque.</p>
            </motion.div>
            {/* form and image */}
            <div className='mt-10 justify-between gap-8 md:flex'>
                <motion.div className='mt-10 basis-3/5 md:mt-0' initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}} transition={{duration:0.5}} variants={{hidden:{opacity:0, y:50},visible:{opacity:1,y:0} }}>
                    <form target="_blank" onSubmit={onsubmit} method='POST' action='https://formsubmit.co/0cdc8dc981fabaa8243770d4f8621bb4 '>
                        <input className='w-full rounded-lg bg-primary-500 mb-5 py-3 placeholder-white' type='text' placeholder='Name' {...register("name",{required:true, maxLength:50})}/>{
                            errors.name && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.name.type === "required" && "This field is required"}
                                    {errors.name.type === "maxLength" && "MAX length is 50 char"}
                                </p>
                            )
                        }
                        <input className='w-full rounded-lg bg-primary-500 mb-5 py-3 placeholder-white' type='email' placeholder='Email' {...register("email",{required:true, maxLength:50})}/>{
                            errors.email && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.email.type === "required" && "This field is required"}
                                    {errors.email.type === "maxLength" && "MAX length is 50 char"}
                                </p>
                            )
                        }
                        <textarea rows={4} cols={50} className='mt-5 w-full rounded-lg bg-primary-500 py-3 placeholder-white' placeholder='message' {...register("message",{required:true, maxLength:2000})}/>{
                            errors.message && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.message.type === "required" && "This field is required"}
                                    {errors.message.type === "maxLength" && "MAX length is 2000 char"}
                                </p>
                            )
                        }
                         <button type="submit" className='mb-5 rounded-lg bg-secondary-500 py-3 px-20 transition duration-500 hover:text-white'>Submit</button>
                    </form>
                </motion.div>
                <motion.div
                className='relative mt-16 basis-2/5 md:mt-0'
                initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}} transition={{delay:0.2,duration:0.5}} variants={{hidden:{opacity:0, y:50},visible:{opacity:1,y:0} }}
                >
                    <div className='md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:z-[-1] before:right-10'>
                        <img className="w-full" src={ContactUsGraphic} alt="" />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default Contactus