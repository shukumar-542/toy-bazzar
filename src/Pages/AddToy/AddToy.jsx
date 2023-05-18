import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddToy = () => {
    const {user} = useContext(AuthContext)
    const notify = () => toast("Toy Added successfully!");
    const handleAddToy =(e)=>{
        e.preventDefault();
        const form = e.target;
        const img = form.img.value;
        const name = form.name.value;
        const seller = form.seller.value;
        const email= form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const data = {img,name,seller,email,category,price,rating,quantity,description};
        fetch('http://localhost:5000/addToy',{
            method :"POST",
            headers : {"content-type" : "application/json"},
            body  :JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId ){
                notify()
            }
        })


    }
    return (
        <div className="max-w-7xl mx-auto">
            <form onSubmit={handleAddToy}>
                <div className=' bg-white'>
                    <div className='flex p-5 gap-4'>
                        <input type="url" name="img" placeholder="Picture url" className="input w-full border-gray-400 " />
                        <input type="text" name="name" placeholder="Enter Name" className="input w-full border-gray-400 " />

                    </div>
                    <div className='flex p-5 gap-4'>
                        <input type="text" name="seller" defaultValue={user?.displayName} placeholder="Seller Name" className="input w-full border-gray-400 " />
                        <input type="email" name="email" defaultValue={user?.email}  placeholder="Enter Email" className="input w-full border-gray-400 " />

                    </div>
                    <div className='flex p-5 gap-4'>
                        <input type="text" name="category" placeholder="Category Name" className="input w-full border-gray-400 " />
                        <input type="text" name="price" placeholder="Enter Price" className="input w-full border-gray-400 " />
                        <input type="text" name="rating" placeholder="Rating" className="input w-full border-gray-400 " />

                    </div>
                    <div className='flex p-5 gap-4'>
                        <input type="text" name="quantity" placeholder="quantity" className="input w-1/2 border-gray-400 " />
                        <textarea name='description' className="textarea w-full border-gray-400 " placeholder="Description"></textarea>

                    </div>
                </div>
                    
                    <input type="submit" className='btn primary-btn my-5' value="Submit" />
                  

            </form>
            <ToastContainer />

        </div>
    );
};

export default AddToy;