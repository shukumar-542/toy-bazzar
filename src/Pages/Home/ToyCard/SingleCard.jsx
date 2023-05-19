/* eslint-disable react/prop-types */

const SingleCard = ({toy}) => {
    const {name, description,img} = toy
    return (
        <div>
             <div className="card w-96 bg-base-100 shadow-xl my-5">
                <figure><img src={img} alt="img" className="h-48" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description.slice(0,100)}....</p>
                    
                </div>
            </div>

        </div>
    );
};

export default SingleCard;