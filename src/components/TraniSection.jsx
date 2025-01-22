import voctor from '../assets/Vector.png'
const TraniSection = () => {
    return (
        <div className="text-center shadow-2xl bg-[#07292F] text-white p-10">
            <h2 className="text-3xl font-bold">Train your aiDR on your...</h2>  
            <p className="font-serif text-2xl text-[#0DBFC4]">prefered email st|</p>
            <p className="mt-5">You’re in control. Train your aiDR on <br /> elements of your Marketing strategy.</p>
            <div>
               <ul className="flex justify-center gap-20 mt-10">
                    <li className='flex items-center gap-2'>
                        <img className='size-4' src={voctor} alt="" />
                        Quick to ramp
                        
                    </li>
                    <li className='flex items-center gap-2'>
                        <img className='size-4' src={voctor} alt="" />
                        Easy to optimize
                        
                    </li>
                
                </ul> 
               <ul className="flex justify-center gap-20 mt-10">
                    <li className='flex items-center gap-2'>
                        <img className='size-4' src={voctor} alt="" />
                        Quick to scale up
                        
                    </li>
                    <li className='flex items-center gap-2'>
                        <img className='size-4' src={voctor} alt="" />
                        Works with all your existing tools
                        
                    </li>
                
                </ul> 
                
            </div>
        </div>
    );
};

export default TraniSection;