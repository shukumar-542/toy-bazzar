import { FaArrowRight } from 'react-icons/fa';
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/tHDgTBT/banner.webp")` }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="flex justify-end  text-neutral-content  ">
                <div className="w-1/2">
                    <h1 className="mb-5 text-5xl font-bold">Toy Bazar </h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn primary-btn rounded-full "> Shop Now <FaArrowRight className='ms-2'/></button>
                </div>
            </div>
        </div>

    );
};

export default Banner;