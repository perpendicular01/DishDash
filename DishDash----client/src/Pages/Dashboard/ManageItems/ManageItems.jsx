import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxioSecure from "../../../hooks/useAxioSecure";
import useMenu from "../../../hooks/useMenu";
import { FaEdit, FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const axioSecure = useAxioSecure()
    const [menu, , refetch] = useMenu()

    const handleDelete = item => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axioSecure.delete(`menu/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();

                            Swal.fire({
                                position: "bottom-end",
                                icon: "success",
                                title: `${item.name} has been deleted.`,
                                showConfirmButton: false,
                                timer: 1500
                            });


                        }
                    })


            }
        });
    }


    return (
        <div className="bg-gray-200">
            <div className="pt-5 mb-12">
                <SectionTitle
                    heading={"Managee all Items"}
                    description={"---Hurry Up---"} >
                </SectionTitle>
            </div>

            <div className="overflow-x-auto w-[80%]  mx-auto bg-white p-10 mb-10 ">
                <div className="flex justify-between mb-7 ">
                    <h2 className="font-bold text-2xl"> Total Items: <span className="text-red-900"> {menu.length}</span> </h2>


                </div>
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr className="uppercase bg-[#D1A054] text-white font-medium">
                            <td> # </td>
                            <td>Item image</td>
                            <td>image name</td>
                            <td>price</td>
                            <td>action</td>
                            <td>action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3 ml-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    <h2 className="ml-2">{item.name}</h2>
                                </td>
                                <td>
                                    <h2 className="ml-1">{item.price}</h2>
                                </td>
                                <th>
                                    <Link to={`/dashboard/updateItem/${item._id}`}>

                                        <button
                                            className=" btn px-2 py-3 text-xl bg-[#D1A054] text-white rounded-md   ">
                                            <FaEdit />
                                        </button>
                                    </Link>
                                </th>
                                <th>
                                    <button
                                        onClick={() => handleDelete(item)}
                                        className=" btn px-1 py-2 text-lg bg-red-700 text-white rounded-md  ml-3 ">
                                        <RiDeleteBin6Line />
                                    </button>
                                </th>
                            </tr>
                            )
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageItems;