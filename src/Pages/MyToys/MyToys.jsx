import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToyTable from "./MyToyTable";


const options = [
    { value: "ascending" },
    { value: "descending" },
]
const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([])
    const [selected, setSelected] = useState(options[0])
    const handleChangeSelectedValue = (e) => {
        setSelected(e.target.value)
    }
    //  const [value,type] =selected.value.split('-').map(item => item.toLowerCase())
    //  console.log(value,type);
    // const [value,type] =selected.value.split('-').map(item => item.toLowerCase())
    // console.log(selected);

    useEffect(() => {
        // const [value,type] = selected.value.split('-')
        // console.log(value,type);

        fetch(`https://toy-bazar-server-mauve.vercel.app/myToys/${user?.email}?value=${selected}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [user, selected])
    // console.log(toys);
    return (
        <div className="flex flex-col  justify-center items-center">
            <div className="flex items-center space-x-4 my-5 ">
                <label htmlFor="inputState" className="form-label">
                    Sort By Price :
                </label>
                <select
                    id="inputState"
                    name="categoryName"
                    className="form-select"
                    value={selected}
                    onChange={handleChangeSelectedValue}
                >
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.value}
                        </option>
                    ))}
                </select>
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