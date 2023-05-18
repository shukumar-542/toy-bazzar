import { useEffect, useState } from "react";
import ToyTable from "./ToyTable";

const AllToys = () => {
    const [toys, setToys] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/toys')
        .then(res => res.json())
        .then(data => setToys(data))
    },[])

    return (
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
        toys.map((toy, index) => <ToyTable
        key={toy._id}
        index={index}
        toy={toy}
        ></ToyTable>)
      }
      
    </tbody>
  </table>
</div>
    );
};

export default AllToys;