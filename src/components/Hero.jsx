import rak from '../assets/rakib.png'
import { IoArrowForwardCircle } from "react-icons/io5";
const Hero = () => {
    return (
        <div className="text-white lg:flex items-center">
          <div className='w-full'>
                <h2 className='text-[#0FF1F6]'>AI SDRs (aiDRs)</h2>
                <h1 className='lg:text-6xl text-2xl mt-5'>More leads, <br /> less people.</h1>
                <p className='mt-5'>Train an aiDR on your ICP and messaging matrix. <br /> Activate it on a patch. It will send personalized <br /> sequences to every target contact.</p>
                <button className='btn bg-[#0FF1F6] mt-5'>
                    <IoArrowForwardCircle className='text-2xl -rotate-45'></IoArrowForwardCircle>
                    Sign Up for the Beta
                    
                </button>
            </div>  
          <div className='w-full'>
            <img className='w-full' src={rak} alt="" />
            </div>  
        </div>
    );
};

export default Hero;