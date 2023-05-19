import learn from '../../../assets/learning.jpg'
import engin from '../../../assets/engin.jpg'
import math from '../../../assets/math.jpg'
import creat from '../../../assets/crea.jpeg'
import cons from '../../../assets/cons.jpg'
import elec from '../../../assets/elec.jpg'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Aos from 'aos';
const ToyCategory = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className='bg-gray-200 py-20'>
            <h1 className='text-center mb-10 text-2xl font-bold'>Categories</h1>
            <div className=" w-1/2 mx-auto grid grid-cols-2 md:grid-cols-3 text-center justify-center">
                
                    <div className='border bg-white py-5 px-10 hover:shadow-xl' data-aos="fade-right">
                        <img src={learn} className='h-28 w-28 mx-auto' alt="" />
                        <h2>learning toys</h2>
                    </div>

                    <div className='border bg-white py-5 px-10 hover:shadow-xl' data-aos="fade-left">
                        <img src={math} className='h-28 w-28 mx-auto' alt="" />
                        <h2>Math Toys</h2>
                    </div>
                
           
                    <div className='border bg-white py-5 px-10 hover:shadow-xl' data-aos="fade-down">
                        <img src={engin} className='h-28 w-28 mx-auto' alt="" />
                        <h2>engineering Toys</h2>
                    </div>

                    <div className='border bg-white py-5 px-10 hover:shadow-xl' data-aos="fade-left">
                        <img src={cons} className='h-28 w-28 mx-auto' alt="" />
                        <h2>Construction Toys</h2>
                    </div>
              
               
                    <div className='border bg-white py-5 px-10 hover:shadow-xl' data-aos="fade-down">
                        <img src={creat} className='h-28 w-28 mx-auto' alt="" />
                        <h2>engineering Toys</h2>
                    </div>
                    <div className='border bg-white py-5 px-10 hover:shadow-xl' data-aos="fade-right">
                        <img src={elec} className='h-28 w-28 mx-auto' alt="" />
                        <h2>Robotics Toys</h2>
                    </div>
               
            </div>
        </div>
    );
};

export default ToyCategory;