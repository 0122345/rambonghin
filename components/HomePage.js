import Layout from '@/components/layout';
import Image from 'next/image';
import lazySizes from 'lazysizes';
// import Background from '@/utils/Background';



const HomePage = () => {
  return (
    <Layout>
      <div className='flex text-white h-dvh'>
    
          <Image 
           data-src="/img/rambackgroung.png"
           alt="background"
           className="lazyload"
             quality={100}
             fill
             sizes="100vw"
             height={100}
             style={{
               objectFit: 'cover',
               zIndex: '0',
              }}
          />
          
          <div className='flex flex-col justify-center items-center z-10 lg:w-[930px] xl:w-[930px] w-[165px]'>
          <h1 className='flex flex-col justify-center items-center ml-11 lg:ml-[45%] lg:text-5xl w-[620px] text-white  text-4xl'>
          <span>Experience the Power and </span>
          <span>Elegance of Ferrari</span>
          <span className='text-sm p-6'>
          Discover the thrill of driving a Ferrari, the epitome of luxury and performance.
          </span>
        </h1>
        <div className='flex w-[245px] h-[30px] space-x-6 justify-center'>
           <button className='bg-yellow-500 w-full rounded-xl'>
              Explore
           </button>

           <button className='bg-transparent w-full rounded-xl text-yellow-400 ring-1 ring-yellow-500'>
              sign up
           </button>
        </div>

        </div>

         
      </div> 
    </Layout>
  )
}

export default HomePage