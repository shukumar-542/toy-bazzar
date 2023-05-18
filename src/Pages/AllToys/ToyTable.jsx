/* eslint-disable react/prop-types */


const ToyTable = ({toy,index}) => {
    const {_id,seller,name, category,price,quantity} = toy
    const handleToyDetails =(id)=>{
        console.log(id);
        fetch(`http://localhost:5000/toy/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <tr>
        <th>{index+1}</th>
        <td>{seller}</td>
        <td>{name}</td>
        <td>{category}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>
        <button className="btn primary-btn" onClick={()=>handleToyDetails(_id)}>View Details</button>
        </td>
      </tr>
    );
};

export default ToyTable;