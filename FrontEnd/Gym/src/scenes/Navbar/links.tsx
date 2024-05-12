import { Selectedpage } from "@/shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string
    selectedpage: Selectedpage,
    setselectedpage:(value:Selectedpage) => void
}

const links = ({page,selectedpage,setselectedpage}: Props) => {
    const lowercase=page.toLowerCase().replace(/ /g,"") as Selectedpage
  return (
    <AnchorLink
    className={`${selectedpage === lowercase ? "text-primary-500" :""} transition duration-500 hover:text-primary-300`}
    href={`#${lowercase}`}
    onClick={()=>setselectedpage(lowercase)}
    >{page}</AnchorLink>
  )
}

export default links    