import learn from '../../../assets/learning.jpg'
import engin from '../../../assets/engin.jpg'
import math from '../../../assets/math.jpg'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Aos from 'aos';
const ToyCategory = () => {
    useEffect(()=>{
        Aos.init({duration : 2000})
    },[])
    return (
        <div className='bg-gray-200 py-20'>
            <h1 className='text-center mb-10 text-2xl font-bold'>Categories</h1>
            <div className="w-1/2 mx-auto text-center ">
            <div className="flex justify-between hover:shadow-2xl ">
                <div className='border w-full bg-white hover:shadow-lg py-5' data-aos="fade-right">
                    <img src={learn} className='h-28 mx-auto' alt="" />
                    <h2>learning toys</h2>
                </div>
                <div className='border w-full bg-white hover:shadow-lg' data-aos="fade-left">
                <img src={math} className='h-28 mx-auto' alt="" />
                    <h2>Math Toys</h2>
                </div>
            </div>
            <div className='border w-50 bg-white hover:shadow-lg py-5' data-aos="fade-down">
            <img src={engin} className='h-28 mx-auto' alt="" />
                <h2>engineering Toys</h2>
            </div>
        </div>
        </div>
    );
};

export default ToyCategory;