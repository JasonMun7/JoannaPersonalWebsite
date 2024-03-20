import { useEffect, useState, useRef } from 'react';
import { gsap } from "gsap";
import { Link } from 'react-router-dom';

// * Import Components 
import Button from '../components/button.jsx'
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';

// * Import Images
import dumpling from '../assets/dumpling.png';
import courseplan from '../assets/courseplan.png';
import spotify from '../assets/spotify.png';
import clubspace from '../assets/clubspace.png';

// * Import Icons
import { IconArrowUpRight } from '@tabler/icons-react';
import { IconChevronDown } from '@tabler/icons-react';

const experiences = [
  {
    image: spotify, 
    title: 'Discovery Map - Navigate New Music',
    price: '$10.14',
    description: 'The mango is thought to be native to India, where the tropical drupe is so popular its the national fruit',
    link: 'https://joanna-chen.medium.com/spotify-discovery-map-navigating-your-way-to-new-music-ce6895f0fe7c'
  },
  {
    image: clubspace, 
    title: 'Courseplan - Cornells course scheduling platform',
    price: '$10.99',
    description: 'The mango is thought to be native to India, where the tropical drupe is so popular its the national fruit',
    link: 'https://enchanted-marten-96e.notion.site/Case-Study-on-my-work-on-Clubspace-011dcafceaa44fdb98f2357ba82f1ae3'
  },
  {
    image: courseplan, 
    title: 'Clubspace - club exploration platform',
    price: '$10.99',
    description: 'The mango is thought to be native to India, where the tropical drupe is so popular its the national fruit',
    link: 'https://courseplan.io/login'
  }
]
export default function Home() {
  const secondPortionRef = useRef(null); 

  const scrollToSecondPortion = () => {
    secondPortionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    var path = document.querySelector('#vector');
    var l = path.getTotalLength();

    gsap.set(path, { strokeDasharray: l });
    gsap.fromTo(path, { strokeDashoffset: l }, { strokeDashoffset: 0, duration: 5 });
  }, []);

  return (
    <>
    <div id="root" className=''>

      {/* Navbar */}
      <Navbar/>

      <div className='sticky z-20'>
        {/* Text */}
        <div className='flex flex-col pl-44 pt-64'>
          <div className='text-gray-500 text-2xl'>{`Welcome to my kitchen :)`}</div>
          <div className='flex flex-row space-x-5'>
            <div className="text-[150px] font-bold">HEY</div>
            <img className='mt-[-50px]' style={{transform: "scale(1.2)"}} src={dumpling} alt="dumpling" />
          </div>

          <div className="flex flex-row space-x-10 mt-[-50px]">
            <div className="text-[150px] font-bold">IT's JOANNA.</div>
          </div>

          <div className='flex flex-col space-y-2'>
            <div className='text-3xl'>{`A digital product designer with a love for serving delicious, user-centric, and human experiences.`}</div>
            <div className='text-3xl flex flex-row items-center space-x-2 text-[#AEAEAE]'>
              <div>Currently Studying</div>
              <a href='https://cis.cornell.edu/' className='cursor-pointer flex flex-row space-x-1 hover:underline underline-offset-8'>
                <div>@Cornell</div>
                <IconArrowUpRight size={30}/>
              </a>
            </div>
          </div>
        </div>

        <div onClick={scrollToSecondPortion} className='group flex flex-col space-y-4 items-center hover:cursor-pointer justify-center mt-24 mb-24'>
          <IconChevronDown size={60} color='#FFDEAC'/>
          <div className="invisible group-hover:visible text-black font-semibold">Scroll to see Dishes</div> {/* This is your text */}
        </div>
      </div >


      {/* Second Portion */}
      <div ref={secondPortionRef} id="second-portion" className='bg-[#060606] flex flex-col relative'>
        <div className='mt-[15%] mx-[15%] space-y-[15%] sticky z-20'>
          {experiences.map(experience => <Button link={experience.link} image={experience.image} description={experience.description} title={experience.title} price={experience.price}/> )}
        </div>
        <Footer/>
      </div>
      {/* End of Second Portion */}


      {/* Line SVG */}
      <div className="flex absolute z-10 top-0">
        <svg className='w-screen h-auto' viewBox="0 0 1223 2605" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="vector" opacity="0.1" d="M864.389 -41.1842C742.391 -9.7161 555.12 125.386 538.116 307.999C521.112 490.613 744.59 497.44 874.395 478.853C948.215 464.989 1069.97 412.997 1155.12 327C1261.55 219.504 1149.29 67.4461 970.461 128.625C791.636 189.803 725.415 442.89 721.223 530C716.625 625.559 913.427 603.137 931.223 703.424C955.059 797.823 901.938 1038.75 503.502 1110.4C5.45669 1199.96 297.21 935.011 466.496 1045C635.781 1154.99 395.366 1238.56 197.192 1197.5C93.9663 1176.11 21.209 1131.16 -68.5067 1237.8C-100.299 1312.53 -136.004 1446.6 35.9961 1519C241.496 1605.5 373.496 1494 466.496 1442C559.496 1390 860.116 1289.5 1059.62 1421C1259.12 1552.5 1191.34 1716 1164.12 1778C1136.9 1840 1082.27 1893.34 985.115 1911.5C832.615 1940 794.116 1915 832.616 1835.5C871.116 1756 1007.62 1706 1114.12 1744.5C1220.62 1783 1239.69 2428.32 492.616 2274C386.116 2252 215.616 2228 92.6156 2413C69.5384 2441.67 30.307 2522.1 57.9997 2614.5" stroke="#FFBE62" stroke-width="50"/>
        </svg>
      </div>
    </div>
    </>
  );
}
