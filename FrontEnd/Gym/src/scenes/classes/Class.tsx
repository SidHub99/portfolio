

type Props = {
    name:string,
    description ?:string,
    image:string
}
const overlaystyle = 'p-5 absolute z-[1] flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-black text-center text-white opacity-0 hover:opacity-90 transition duration-500 '
const Class = ({name,description,image}: Props) => {
  return (
    <li className='relative mx-5 inline-block h-[380px] w-[450px] '>
        <div className={overlaystyle}>
            <p className="text-2xl">{name}</p>
            <p className="mt-5">{description}</p>

        </div>
    <img src={image} alt="" />
    </li>

  )
}

export default Class