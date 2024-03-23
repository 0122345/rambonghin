import lazySizes from 'lazysizes'
import Image from 'next/image'

const NavBar = () => {
  return (
     
    <div className='flex w-dvw h-[6dvh] z-10  text-white'>    
     <ul className='text-md text-white inline-flex'>
       <li>Explore Models</li>
       <li>Find a dealer</li>
       <li>Special Offers</li>
       <li>
        <>
         More
        </>
       </li>
     </ul>

    </div>
     
  )
}

export default NavBar;