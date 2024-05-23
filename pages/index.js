import NavBar from '@/components/NavBar'
import Layout from '@/components/layout'
import Goods from "@/components/Goods"
import HomePage from "@/components/HomePage"
import Contact from "@/components/Contact"
import Portfolio from '@/components/Portfolio'
import Discover from '@/components/Discover'
import Link from 'react-scroll'
import Gallery from '@/components/Gallery'
import Feature from '@/components/Feature'


const index = () => {
  return (      
         <Layout>
          <HomePage/>
           <Discover /> 
            <Gallery/>
            <Feature />
            <Portfolio/>
            <Contact />
           </Layout>  
    
  )
}

export default index