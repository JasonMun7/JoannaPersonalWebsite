import { useEffect } from 'react'
import { gsap } from "gsap";
import { Link } from 'react-router-dom';
import chefhat from '../assets/chefhat.png'
import joanna from '../assets/joanna.png'
import dumpling from '../assets/dumpling.png'
import about1 from '../assets/about1.png'
import about2 from '../assets/about2.png'
import about3 from '../assets/about3.png'
import about4 from '../assets/about4.png'



export default function About() {
  useEffect(() => {
    var path = document.querySelector('#vector2');
    var l = path.getTotalLength();

    gsap.set(path, { strokeDasharray: l });
    gsap.fromTo(path, { strokeDashoffset: l }, { strokeDashoffset: 0, duration: 5 });
  }, []);

  return (
    <>
    <div className=''>
      {/* Back Button */}
      <Link className="text-2xl text-black flex flex-row items-center absolute -top-10 left-[8%] hover:underline" to="/">
        <div>{`< Back`}</div>
        <img className='-ml-24' style={{transform: "scale(0.3)"}} src={dumpling} alt="dumpling" />
      </Link>

      <div className='grid grid-cols-4 mt-[15%] mx-[13%] space-y-14'>
        {/* Row 1 */}
        <div className='col-span-3 flex flex-col -space-y-8 mr-44'>
          <div className='text-gray-500 text-2xl'>Who Cooked Here?</div>
          <div className='flex flex-row items-center space-x-10'>
            <div className="text-[150px] font-bold">ABOUT</div>
            <div className='flex flex-col relative '>
              <img className='absolute left-14 -top-14 w-24 h-auto' src={chefhat} alt="chefhat" />
              <img className='w-44 h-auto' src={joanna} alt="joanna"/>
            </div>
          </div>
          <div className="text-[150px] font-bold">THE CHEF</div>
          <div className='text-3xl'>I study Information Science through the lens of UX design and Interactive Technology, minoring in Fine Arts. </div>
        </div>

        <div className='col-span-1 flex flex-col items-center'>
          <img className='mb-4' src={about1} alt="about1"/>
          <div className='font-bold text-xl'>Working at my parents restaurant</div>
          <div className='text-lg'>College alumni revisiting us after 15 years!</div>
        </div>

        {/* Row2 */}
        <div className='col-span-2 flex flex-col items-center'>
          <img className='mb-4' src={about2} alt="about2"/>
          <div className='font-bold text-xl'>Apart of a dance crew</div>
          <div className='text-lg'>won 1st at comp</div>
        </div>

        <div className='col-span-2 flex flex-col space-y-4 pt-24 mx-32 text-lg'>
          <div>With play and positivity as my base, I hope to create an easily accessible world through storytelling, digital design, and research. I grew up serving customers at my parents restaurant and loved hearing the stories of those from all walks of life. As I continue to building my worldview, I try to bring this mindset into the designs I create. </div>
          <div>Currently, Im designing for Courseplan, Cornells course scheduling platform, building community-centered digital architecture and launchin’ new features for our core product. My previous work as a sole designer at Clubspace, potential club discovery platform -- taught me how to balance engineering constraints and business goals as I unrelentingly advocated for the user.</div>
          <div className='flex flex-col'>
            <div>If you also love to cook in design/technology/food spaces, send a warm hello to !</div>
            <a href='mailto:jc2887@cornell.edu' className='hover:underline cursor-pointer'>jc2887@cornell.edu</a>
          </div>
        </div>

        {/* Row 3 */}
        <div className='col-span-2 flex flex-col items-center'>
          <img className='mb-4' src={about3} alt="about3"/>
          <div className='font-bold text-xl'>Caffeinating students </div>
          <div className='text-lg'>luv my Cafe Jennie family</div>
        </div>

        <div className='col-span-2 flex flex-col items-center pt-32'>
          <img className='mb-4' src={about4} alt="about4"/>
          <div className='font-bold text-xl'>Taking on new hobbies</div>
          <div className='text-lg'>graduated from bunny slopes</div>
        </div>

      </div>

      {/* Svg */}
      <div className='absolute top-0 -z-10' style={{ pointerEvents: 'none' }}>
        <svg className='w-screen h-auto' viewBox="0 0 1208 1500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="vector2" opacity="0.2" d="M270.107 -12.7153C261.677 274.744 639.821 177.948 532 86.9998C401 -23.5001 292.605 270.266 484.803 285C742.968 304.791 853.5 525.5 501 654C245.5 771.5 20.111 713.153 149.5 803.001C774.5 1237 -244.5 1041.5 74.9996 1374C184.473 1487.93 58.5163 1452 150.258 1359.5C242 1267 396.199 1511.2 386.999 1624C382.881 1674.5 351.424 1715.86 285.999 1707.5C58.9993 1678.5 41.9066 2037.22 324.999 2004C520.999 1981 555 1866.5 743.5 1843.5C809.501 1835.45 1087.5 1869 1183.5 2156.5" stroke="#FFBE62" stroke-width="50"/>
        </svg>
      </div>
    </div>
    </>
  )
}