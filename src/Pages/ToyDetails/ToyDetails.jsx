import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ToyDetails = () => {
    const { id } = useParams()
    const [toys, setToys] = useState({})


    useEffect(() => {
        fetch(`http://localhost:5000/toy/${id}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [id])
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <img src={toys?.img}className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{toys?.name}</h1>
                    <p className="py-6">{toys?.description}</p>

                    <div className="flex gap-10">
                        <p className="font-bold">price: ${toys?.price}</p>
                        <p>Quantity : {toys?.quantity}</p>
                        <p>Rating : {toys?.rating}</p>
                    </div>
                    <div className="flex gap-10 my-10">
                        <p>seller: {toys?.seller}</p>
                        <p>email : {toys?.email}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;