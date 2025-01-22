import all from '../assets/Screenshot_87.png'

const AllocateSection = () => {
    return (
        <div className="lg:flex justify-between hover:scale-105 duration-150 shadow-2xl p-24 mt-20 rounded-2xl  bg-[#07292F] ">
            <div className=" text-white w-full">
                <h2 className="text-4xl mb-3">Allocate effort where your reps make an inpact.</h2>
                <p>let us handle hte rest</p>
                <p>keep your reps in the air --out in the field and on the phone <br /> where they can build relationships.</p>
                <div className="flex gap-5 mt-10 w-full">
                    <div>
                        <h2 className="text-3xl font-bold">32%
                            
                        </h2>
                        <p className="text-[#5acade]">Improvement in  <br /> Open Rates</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">32%
                            
                        </h2>
                        <p className="text-[#5acade]">Improvement in  <br /> Open Rates</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">32%
                            
                        </h2>
                        <p className="text-[#5acade]">Improvement in  <br /> Open Rates</p>
                    </div>
                </div>
            </div>
            <div className='w-full'>
              <img className='w-full' src={all} alt="" />
            </div>
       </div>
    );
};

export default AllocateSection;