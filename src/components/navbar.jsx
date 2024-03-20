import { Link } from 'react-router-dom';


// * Import Icons
import sendIcon from '../assets/send.png';
import fileIcon from '../assets/file-description.png';
import pencilIcon from '../assets/pencil.png';
import linkedinIcon from '../assets/brand-linkedin.png';
import smile from '../assets/smile.png';


export default function Navbar(){
  

  return(
    <>
    <div className="flex flex-col items-center z-50 scale-75 space-y-3 absolute right-[5%] top-[5%] bg-[rgba(255,190,98,0.25)] rounded-full w-24 py-3"> 

      <Link to='/about' className="flex justify-center items-center hover:bg-[#FFBE62] h-20 w-20 hover:bg-opacity-50 rounded-full transition duration-150 ease-in-out px-2"> 
        <img src={smile} alt="smileIcon" className="h-16 w-16 "/>
      </Link>

      <a href='https://enchanted-marten-96e.notion.site/Joanna-s-Projects-08895942377b43cb8aa5fbcc6a22a586' className="flex justify-center items-center hover:bg-[#FFBE62] h-20 w-20 hover:bg-opacity-50 rounded-full transition duration-150 ease-in-out px-2">
        <img src={pencilIcon} alt="pencilIcon" className="h-16 w-16 "/>
      </a>

      <a href='https://drive.google.com/file/d/1N3p31OOfOLVmL3Fbg2kCrZjcEGATkboW/view?usp=sharing' className="flex justify-center items-center hover:bg-[#FFBE62] h-20 w-20  hover:bg-opacity-50 rounded-full transition duration-150 ease-in-out px-2">
        <img src={fileIcon} alt="fileIcon" className="h-16 w-16 "/>
      </a>

      <a href='mailto:jc2887@cornell.edu' className="flex justify-center items-center hover:bg-[#FFBE62] h-20 w-20 hover:bg-opacity-50 rounded-full transition duration-150 ease-in-out px-2">
        <img src={sendIcon} alt="sendIcon" className="h-14 w-14 "/>
      </a>

      <a href='https://www.linkedin.com/in/joannachen1014/' className="flex justify-center items-center hover:bg-[#FFBE62] h-20 w-20 hover:bg-opacity-50 rounded-full transition duration-150 ease-in-out px-2 ">
        <img src={linkedinIcon} alt="linkedIcon" className="h-16 w-16 "/>
      </a>
    </div>

    </>
  )
}

