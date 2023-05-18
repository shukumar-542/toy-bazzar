import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const MyToyTable = ({ toy, index, toys, setToys }) => {
    // eslint-disable-next-line react/prop-types
    const { _id, seller, name, category, price, quantity } = toy;

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/toy/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                        }
                        // eslint-disable-next-line react/prop-types
                        const remaining = toys.filter(to => to._id !== id)
                        setToys(remaining)

                    })

            }
        })

    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{seller}</td>
            <td>{name}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
                <Link to={`/update/${_id}`}><button className="btn primary-btn me-2">Edit</button></Link>
               
                <button className="btn btn-error" onClick={() => handleDelete(_id)}>Delete</button>
            </td>
        </tr>
    );
};

export default MyToyTable;