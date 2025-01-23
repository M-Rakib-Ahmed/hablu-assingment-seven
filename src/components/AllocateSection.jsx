import all from '../assets/rakib.png'

const AllocateSection = () => {
    return (
        <div className="lg:flex justify-between hover:scale-105 duration-150 shadow-2xl lg:p-24 p-10 mt-20 rounded-2xl  bg-[#07292F] ">
            <div className=" text-white w-full">
                <h2 className="lg:text-4xl mb-3">Allocate effort where your reps make an inpact.</h2>
                <p>let us handle hte rest</p>
                <p>keep your reps in the air --out in the field and on the phone <br /> where they can build relationships.</p>
                <div className="lg:flex lg:text-start text-center gap-5 mt-10 w-full ">
                    <div className=' '>
                        <h2 className="text-5xl font-bold">32%
                            
                        </h2>
                        <p className="text-[#5acade]">Improvement in  <br /> Open Rates</p>
                    </div>
                    <div>
                        <h2 className="text-5xl font-bold">32%
                            
                        </h2>
                        <p className=" text-[#5acade]">Improvement in  <br /> Open Rates</p>
                    </div>
                    <div>
                        <h2 className="text-5xl font-bold">32%
                            
                        </h2>
                        <p className="text-[#5acade]">Improvement in  <br /> Open Rates</p>
                    </div>
                </div>
            </div>
            <div className='w-full'>
              <img className='w-full mt-5 rounded-md' src={all} alt="" />
            </div>
       </div>
    );
};

export default AllocateSection;