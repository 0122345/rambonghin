import Layout from '@/components/layout'
import Image from 'next/image'

const Portfolio = () => {
  return (
     <Layout>
        <main className='h-dvh w-dvw bg-slate-500'>

          <image
          src="/images/hero.jpg"
          alt="hero image"
          quality={80}
          sizes="(min-width: 808px) 50vw, 100vw"
          style={{
             objectFit: 'cover',
          }}
             
          />
        </main>
       
     </Layout>
  )
}

export default Portfolio
