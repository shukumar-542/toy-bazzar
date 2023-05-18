import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToyTable from "./MyToyTable";

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [toys, setToys] =  useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/myToys/${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            setToys(data)
        })
    },[user])
    return (
        <div className="flex flex-col  justify-center items-center">
          
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head*/}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>
                                view Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            toys.map((toy, index) => <MyToyTable
                                key={toy._id}
                                index={index}
                                toy={toy}
                                toys={toys}
                                setToys={setToys}
                            ></MyToyTable>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;