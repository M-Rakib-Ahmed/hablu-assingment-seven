import image from '../assets/frame.png'
import head from '../assets/head.png'

const Hero2 = () => {
    return (
        <div className='mt-10'>
            <div className="carousel  bg-[#011f24] h-[300px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={image}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='flex  items-start mr-20m ml-[300px]  lg:ml-[600px] mt-10 '>
                        <img  src={head} alt="" /> 
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                    <p className='text-white text-center lg:text-3xl'>Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc <br />vulputate libero et velit interdum, adipiscing elit ac aliquet odio mattis.</p> <br />
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <h2 className= ' text-3xl absolute mt-[200px] text-[#0FF1F6]  ml-72 lg:ml-[600px]'>Jone Done</h2>
                    <p className='text-white  absolute mt-60 right-40 lg:right-[480px]'>Chief Strategy Officer @ Company</p>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img className='w-full' src={image} alt="" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img  className='w-full' src={image} alt="" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero2;