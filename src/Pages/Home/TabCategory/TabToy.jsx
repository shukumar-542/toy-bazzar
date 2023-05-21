/* eslint-disable react/prop-types */

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useContext } from 'react';
import { Link,} from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../Provider/AuthProvider';


const TabToy = ({toy}) => {
    const {_id,img,name,price,rating} = toy
    const {user} = useContext(AuthContext)
    const notify = () => toast("You have to log in first to view details!");
    const showToster =()=>{
        if(!user){
            notify()
            
        }
    }
    return (
        
            <div className="card  card-side  shadow-xl">
                <figure><img src={img} className="" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price : ${price}</p>
                    <div className='flex'>Rating : <Rating style={{ maxWidth: 100 }} value={rating} readOnly /></div>
                    <div className="card-actions justify-start">
                        <Link to={`/toy/${_id}`} onClick={showToster}  state={'ToyDetails'}><button className="btn primary-btn">view Details</button></Link>
                    </div>
                </div>
            </div>
       
    );
};

export default TabToy;