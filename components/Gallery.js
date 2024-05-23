import Image from "next/image"
import lazySizes from "lazysizes"

const Gallery = () => {

  return (
    <div className="h-[160dvh] w-dvw text-white bg-black">
       <div className="flex top-1 sticky flex-col p-3 items-center justify-center">
        <h1 className="mt-3  text-yellow-400 font-bold text-2xl p-2">Ferrari Gallery</h1>
        <p>Explore stunning images of our Ferrari cars collection.</p>
       </div>

       <div className="md:flex flex-col md:h-full xl:grid grid-cols-3 h-[75dvh] gap-6 w-[75dvw] left-[10%] relative">
          <div className="space-y-[24px] md:h-[500px]">
            <Image
             src="/img/Image.png"
             alt="rambo"
             width={416}
             height={416}
             loading="lazy"
            />

            <Image
              src="/img/ram2.jpg"
             alt="rambo"
             width={416}
             height={416}
             loading="lazy"
            />
          </div>

          
          <div className="space-y-[24px]">
          <Image
              src="/img/wheel.jpg"
             alt="rambo"
             width={416}
             height={234}
             loading="lazy"
            />
            <Image
              src="/img/ramfront.jpg"
             alt="rambo"
             width={416}
             height={234}
             loading="lazy"
            />
            <Image
              src="/img/rambackgroung.png"
             alt="rambo"
             width={416}
             height={416}
             loading="lazy"
            />
          </div>

          
          <div className="space-y-[24px]">
          <Image
              src="/img/Image.png"
             alt="rambo"
             width={416}
             height={416}
             loading="lazy"
            />
            <Image
              src="/img/ramingallery.jpg"
             alt="rambo"
             width={416}
             height={416}
             loading="lazy"
            />
           
          </div>

       </div>
       
    </div>
  )
}

export default Gallery
