import grup from '../assets/Group.png'

const Card = () => {
    return (
        <div className="lg:flex gap-36  bg-[#02242A] p-10">
            <div className="card   shadow-xl mb-5 hover:scale-105 hover:duration-150 bg-[#1eadc6]">
                <div className="card-body">
                    <img className='size-5' src={grup} alt="" />
                    <h2 className="card-title text-white">You’re in Control</h2>
                    <p className='text-white'>aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.</p>
                    <div className="card-actions justify-end">
                        
                    </div>
                </div>
            </div>
            <div className="card hover:scale-105 hover:duration-150 bg-[#2091a4] shadow-xl mb-5">
                <div className="card-body">
                    <img className='size-5' src={grup} alt="" />
                    <h2 className="card-title text-white">Infinitely Scalable</h2>
                    <p className='text-white'>Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.</p>
                    <div className="card-actions justify-end">
                     
                    </div>
                </div>
            </div>
            <div className="card hover:scale-105 hover:duration-150 bg-[#3cc0d7] mb-5 shadow-xl">
                <div className="card-body">
                    <img className='size-5' src={grup} alt="" />
                    <h2 className="card-title text-white">Incredibly Flexible</h2>
                    <p className='text-white'>Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.</p>
                    <div className="card-actions justify-end">
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;