import { FaArrowRight } from 'react-icons/fa';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';


const Banner = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className="hero min-h-screen bg-center " style={{ backgroundImage: `url("https://i.ibb.co/tHDgTBT/banner.webp")` }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="flex  justify-center lg:justify-end text-neutral-content  ">
                <div className="w-1/2" data-aos="fade-left">
                    <button className='btn btn-secondary mb-3 rounded-none'>Big Discount</button>
                    <h1 className="mb-5 text-5xl font-bold text-blue-500">Toy Bazar </h1>
                    <p className="mb-5 text-xl">We design toys not just for kids but with kids. Get Toy At Lowest Price!!.We design toys not just for kids but with kids</p>
                    <button className="btn primary-btn rounded-full "> Shop Now <FaArrowRight className='ms-2'/></button>
                </div>
            </div>
        </div>

    );
};

export default Banner;