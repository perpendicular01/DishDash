import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxioSecure from "../../../hooks/useAxioSecure";
import { FaEdit, FaRegEdit } from "react-icons/fa";
import useBooking from "../../../hooks/useBook";

const ManageBooking = () => {
    // const axioSecure = useAxioSecure()
    const [booking, refetch] = useBooking()

    // const handleDelete = id => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             axioSecure.delete(`menu/${id}`)
    //                 .then(res => {
    //                     if (res.data.deletedCount > 0) {
    //                         Swal.fire({
    //                             title: "Deleted!",
    //                             text: "Item has been deleted.",
    //                             icon: "success"
    //                         });
    //                         refetch();

    //                     }
    //                 })


    //         }
    //     });
    // }


    return (
        <div className="bg-gray-200">
            <div className="pt-5 mb-12">
                <SectionTitle
                    heading={"Managee all Bookings"}
                    description={"---At a Glance!---"} >
                </SectionTitle>
            </div>

            <div className="overflow-x-auto w-[80%]  mx-auto bg-white p-10 mb-10 ">
                <div className="flex justify-between mb-7 ">
                    <h2 className="font-bold text-2xl"> Total Booking: <span className="text-red-900"> {booking.length}</span> </h2>
                    

                </div>
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr className="uppercase bg-[#D1A054] text-white font-medium">
                            <td> # </td>
                            <td>User email</td>
                            <td>Phone Number</td>
                            <td>Booking date</td>
                            <td>Booking time</td>
                            <td>activity</td>
                            <td>action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            booking.map((person, index) => <tr key={person._id}>
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
                                    <h2 className="ml-2">{person.email}</h2>
                                </td>
                                <td>
                                    <h2 className="ml-1">{person.number}</h2>
                                </td>
                                <td>
                                    <h2 className="ml-1">{person.date}</h2>
                                </td>
                                <td>
                                    <h2 className="ml-1">{person.time}</h2>
                                </td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className=" btn px-2 py-3 text-xl bg-[#D1A054] text-white rounded-md   ">
                                        <FaEdit/>
                                    </button>
                                </th>
                                <th>
                                    <button
                                        onClick={() => handleDelete(item._id)}
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

export default ManageBooking;