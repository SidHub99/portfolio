import { Selectedpage } from "@/shared/types"
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import men from '@/assets/daniel-apodaca-WdoQio6HPVA-unsplash.jpg'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import { motion } from "framer-motion"
import Htext from "@/shared/Htext"
import Class from "@/scenes/classes/Class"
import { classType } from "@/shared/types"


type Props = {
    setselectedpage:(value:Selectedpage)=>void
}
const lasses:Array<classType>=[
 {
    name:"Weight Training Classes",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, officia.",
    image:men
 },
 {
    name:"Yoga Classes",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, officia.",
    image:image2
 },
 {
    name:"Core Classes",
    description:"Lorem ipsum dolor sit  amet consectetur adipisicing elit. Iste, officia.",
    image:image3
 },
 {
    name:" Fitness Classes",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, officia.",
    image:image4
 },
 {
    name:" Adventure Classes",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, officia.",
    image:image5
 },
 {
    name:"Personalized Classes",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, officia.",
    image:image6
 },     
]

const classes = ({setselectedpage}: Props) => {
  return (
    <section id="classes" className="w-full bg-primary-100 py-40">
        <motion.div
        onViewportEnter={()=>setselectedpage(Selectedpage.Classes)}
        >
            <motion.div
             initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}} transition={{delay:0.2,duration:0.5}} variants={{hidden:{opacity:0.5, x:-50},visible:{opacity:1,x:0} }}
            >
                <div className=" pl-20 md:w-3/5">
                    <Htext>OUR CLASSES</Htext>
                    <p className="py-5"> askdnakln dn lasd ioas dioasjiod asiohdoas hdoash dou asdoas duas duas bduiasb diasbid basidb asid bias duias duia sd</p>
                </div>

            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap">
                        {
                            lasses.map((item,index)=>(
                                <Class key={index} image={item.image} name={item.name} description={item.description}/>
                            ))
                        }
                    </ul>
            </div>
        </motion.div>
    </section>
    
  )
}

export default classes