/* eslint-disable react/prop-types */

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const TabToy = ({toy}) => {
    const {img,name,price,rating} = toy
    return (
        
            <div className="card  card-side  shadow-xl">
                <figure><img src={img} className="" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price : ${price}</p>
                    <div className='flex'>Rating : <Rating style={{ maxWidth: 100 }} value={rating} readOnly /></div>
                    <div className="card-actions justify-start">
                        <button className="btn primary-btn">view Details</button>
                    </div>
                </div>
            </div>
       
    );
};

export default TabToy;