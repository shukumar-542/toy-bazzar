/* eslint-disable react/prop-types */



const TabToy = ({toy}) => {
    const {img,name,price,rating} = toy
    return (
        
            <div className="card  card-side  shadow-xl">
                <figure><img src={img} className="" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price : ${price}</p>
                    <p>Rating: {rating}</p>
                    <div className="card-actions justify-start">
                        <button className="btn primary-btn">view Details</button>
                    </div>
                </div>
            </div>
       
    );
};

export default TabToy;