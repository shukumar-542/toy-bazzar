import { useEffect, useState } from "react";
import ToyTable from "./ToyTable";

const AllToys = () => {
    const [toys, setToys] = useState([])
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])


    const handleSearch = () => {
        fetch(`http://localhost:5000/searchToy/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setToys(data);
            });
    }



    return (
        <div className="flex flex-col  justify-center items-center">
            <div className="form-control py-10">
                <div className="input-group">
                    <input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Search…" className="input input-bordered" />
                    <button className="btn btn-square" onClick={handleSearch}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
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
        </div>
    );
};

export default AllToys;