import Layout from '@/components/layout'
import { Props } from 'next/script'

const Discover = () => {
  return (
    <Layout>
    <div className="flex flex-col h-[125dvh] text-white bg-gradient-to-b from-[#290101] to-black overflow-hidden">
      <div className='flex flex-col space-y-6 p-7'>
        <span className='text-sm float-start'>
        Discover
       </span>
         <h1 className='flex justify-center text-yellow-500 lg:text-6xl text-2xl font-bold'>
           Unleash the power of Ferrari
         </h1>
       <span className='text-lg '>
       Experience the thrill of driving a Ferrari like never before. Our cutting-edge technology and unparalleled performance will leave you breathless.
       </span>
      </div>
      
       <div className='w-[80dvw] flex flex-1'>
    
        {/* content */}
        <span className=''>
           <span>
             <h1 className=''>
             Choose Your Dream Ferrari
             </h1>
             <p className=''>
             Browse our extensive collection of luxury sports cars and find the
              perfect Ferrari to suit your style and taste
             </p>
           </span>
           <span>
             <h1 className=''>
             Book Your Ultimate Driving Experience
             </h1>
             <p className=''>
             Take the driver is seat and feel the adrenaline rush as you navigate 
             the open road in a Ferrari of your choice.
             </p>
           </span>
           <span className=''>
             <h1 className=''>
             Experience the Ferrari Lifestyle
             </h1>
             <p className=''>
             Immerse yourself in the world of Ferrari and indulge in the luxury, elegance,
              and prestige that comes with owning a Ferrari.
             </p>
           </span>

         </span>


          {/* buttons */}
          
          <div className='flex w-[245px] h-[30px] space-x-6 justify-baseline items-start pl-7'>
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

export default Discover
