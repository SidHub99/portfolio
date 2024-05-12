import logo from '@/assets/Logo.png'
type Props = {}

const foot = (props: Props) => {
  return (
    <section className='bg-primary-500 py-16 '>
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className='mt-16 basis-1/2 md:mt-0'>
            <img src={logo} alt="" />
            <p className='my-5'>
                Lorem ipsum asdn;lasud d ;oa oasd;i kjr ff sd lfbsd fbksd fbksdbfksdhbfsd fbksdfbdskf ,sdfn slsd uhfuilsd flsdbfksdy gfksd fyksdfjksd fsduk fsdk fyksd fkysd.
            </p>
            <p>@ Copyright All rights reserved</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
            <h4 className='font-bold'>Links</h4>
            <p className='my-5'> ls ojl dsd fks jdfklsdf </p>
            <p className='my-5'> lksdbf asdsdh fbsdjhfb ksdjhfb ksdb fsdhfb s</p>
            <p>duhf uifh sdu fhsdulf huilsd fhsduf</p>
        </div> 
        <div className='mt-16 basis-1/4 md:mt-0'>
            <h4 className='font-bold'>Contact Us</h4>
            <p className='my-5'> ls ojl dsd fks jdfklsdf </p>
            <p className='my-5'> lksdbf asdsdh fbsdjhfb ksdjhfb ksdb fsdhfb s</p>
            <p>duhf uifh sdu fhsdulf huilsd fhsduf</p>
        </div> 
    </div>
    </section>
  )
}

export default foot