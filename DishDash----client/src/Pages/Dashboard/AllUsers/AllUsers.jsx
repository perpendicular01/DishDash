import { RiDeleteBin6Line } from "react-icons/ri";
import useUsers from "../../../hooks/useUsers";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxioSecure from "../../../hooks/useAxioSecure";
import { PiUsersThreeFill } from "react-icons/pi";

const AllUsers = () => {
    const axioSecure = useAxioSecure()
    const [users, refetch] = useUsers()


    const handleDelete = id => {
        console.log(id)
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
                axioSecure.delete(`users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                            refetch();

                        }
                    })


            }
        });
    }


    return (
        <div className="bg-gray-200">
            <div className="pt-5 mb-12">
                <SectionTitle
                    heading={"WANNA ADD MORE?"}
                    description={"---My Cart---"} >
                </SectionTitle>
            </div>

            <div className="overflow-x-auto w-[80%]  mx-auto bg-white p-10 mb-10 ">
                <div className="flex justify-between mb-7 ">
                    <h2 className="font-bold text-2xl"> Total Users: <span className="text-red-900"> {users.length}</span> </h2>


                </div>
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr className="uppercase bg-[#D1A054] text-white font-medium">
                            <td> # </td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Role</td>
                            <td>action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    <h2 className="">{user.email}</h2>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(user._id)}
                                        className=" btn px-2 py-1 text-lg bg-[#D1A054] text-white rounded-md  ">
                                        <PiUsersThreeFill />
                                    </button>

                                </td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(user._id)}
                                        className=" btn px-1 py-2 text-lg bg-red-700 text-white rounded-md  ml-4 ">
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

export default AllUsers;