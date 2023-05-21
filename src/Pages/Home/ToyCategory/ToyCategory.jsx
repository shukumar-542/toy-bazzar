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
        <div className='bg-gray-200 py-20  '>
            <h1 className='text-center mb-10 text-2xl font-bold'>Categories</h1>
            <div className=" w-3/4  mx-auto grid grid-cols-1 md:grid-cols-3 px-10 text-center justify-center">
                
                    <div className='border bg-white py-5 hover:shadow-xl' >
                        <img src={learn} className='h-28  mx-auto' alt="" data-aos="fade-left" />
                        <h2>learning toys</h2>
                    </div>

                    <div className='border bg-white py-5 hover:shadow-xl' >
                        <img src={math} className='h-28  mx-auto' alt="" data-aos="fade-left" />
                        <h2>Math Toys</h2>
                    </div>
                
           
                    <div className='border bg-white py-5  hover:shadow-xl' >
                        <img src={engin} className='h-28  mx-auto' alt="" data-aos="fade-left"/>
                        <h2>engineering Toys</h2>
                    </div>

                    <div className='border bg-white py-5  hover:shadow-xl' >
                        <img src={cons} className='h-28  mx-auto' alt="" data-aos="fade-left"/>
                        <h2>Construction Toys</h2>
                    </div>
              
               
                    <div className='border bg-white  py-5 hover:shadow-xl'>
                        <img src={creat} className='h-28  mx-auto' alt="" data-aos="fade-down"/>
                        <h2>engineering Toys</h2>
                    </div>
                    <div className='border bg-white py-5 hover:shadow-xl' >
                        <img src={elec} className='h-28  mx-auto' alt="" data-aos="fade-right"/>
                        <h2>Robotics Toys</h2>
                    </div>
               
            </div>
        </div>
    );
};

export default ToyCategory;