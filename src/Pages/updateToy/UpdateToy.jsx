import { useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const UpdateToy = () => {
    const toys = useLoaderData()
    const {_id, price, quantity, description } = toys;
    const handleUpdate =(e)=>{
        e.preventDefault()
        const form = e.target;
        const price = parseInt(form.toyPrice.value);
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updatedToy = {price,quantity,description};

        fetch(`https://toy-bazar-server-mauve.vercel.app/update/${_id}`,{
            method :"PATCH",
            headers : {"content-type" : "application/json"},
            body : JSON.stringify(updatedToy)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Coffee update successfully!',
                  })
            }
        })


    }
    return (
        <div className="max-w-7xl mx-auto w-1/2 my-4">
            <form className="space-y-4 items-center" onSubmit={handleUpdate}>
                <input type="text" name="toyPrice" defaultValue={price} placeholder="Price" className="input w-full border-gray-400 " />
                <input type="text" name="quantity" defaultValue={quantity} placeholder="Quantity" className="input w-full border-gray-400 " />
                <textarea name='description' defaultValue={description} className="textarea w-full border-gray-400 " placeholder="Description"></textarea>
                <input type="submit" className='btn primary-btn my-4 w-full' value="Submit" />
            </form>
            <ToastContainer />

        </div>
    );
};

export default UpdateToy;