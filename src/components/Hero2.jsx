import image from '../assets/frame.png'


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
                   <img src={image} alt="" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                    
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                          
                   
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