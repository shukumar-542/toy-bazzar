/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ToyTable = ({toy,index}) => {
    const {_id,seller,name, category,price,quantity} = toy
   
    return (
        <tr>
        <th>{index+1}</th>
        <td>{seller}</td>
        <td>{name}</td>
        <td>{category}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>
        <Link to={`/toy/${_id}`}><button className="btn primary-btn">View Details</button></Link>
        </td>
      </tr>
    );
};

export default ToyTable;