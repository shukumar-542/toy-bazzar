import { useEffect, useState } from 'react';
import SingleCard from './SingleCard';
const ToyCard = () => {
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('https://toy-bazar-server-mauve.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20 gap-5 px-5 max-w-7xl mx-auto'>
           {
                            toys.map((toy, index) => <SingleCard
                                key={toy._id}
                                index={index}
                                toy={toy}
                                
                            ></SingleCard>)
                        }

        </div>
    );
};

export default ToyCard;