/* eslint-disable react/prop-types */


const ToyTable = ({toy,index}) => {
    const {seller,name, category,price,quantity} = toy
    return (
        <tr>
        <th>{index+1}</th>
        <td>{seller}</td>
        <td>{name}</td>
        <td>{category}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>
        <button className="btn primary-btn">View Details</button>
        </td>
      </tr>
    );
};

export default ToyTable;