import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ToyDetails = () => {
    const { id } = useParams()
    const [toys, setToys] = useState({})


    useEffect(() => {
        fetch(`https://toy-bazar-server-mauve.vercel.app/toy/${id}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [id])
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row gap-20 shadow-md bg-gray-200 py-16">
                <img src={toys?.img}className="max-w-sm rounded-lg shadow-2xl" />
                <div className="">
                    <h1 className="text-5xl font-bold">{toys?.name}</h1>
                    <p className="py-6">{toys?.description}</p>

                    <div className="flex gap-10">
                        <p className="font-bold">price: ${toys?.price}</p>
                        <p>Quantity : {toys?.quantity}</p>
                        <div className='flex'>Rating : <Rating style={{ maxWidth: 100 }} value={toys?.rating} readOnly /></div>
                    </div>
                    <div className="flex gap-10 my-10 font-bold">
                        <p>Seller : {toys?.seller}</p>
                        <p>Email : {toys?.email}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;