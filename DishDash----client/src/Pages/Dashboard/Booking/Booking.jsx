import { RiDeleteBin6Line } from "react-icons/ri";

import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxioSecure from "../../../hooks/useAxioSecure";
import useBooking from "../../../hooks/useBook";
import logo from '../../../assets/logo.png'

const Booking = () => {
    const axioSecure = useAxioSecure()
    const [booking, refetch] = useBooking()
    const totalPrice = booking.reduce((total, item) => total + item.price, 0)

    const handleDelete = id => {
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
                axioSecure.delete(`booking/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Item has been deleted.",
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
                    heading={"MY bookings"}
                    description={"---Excellent Ambience---"} >
                </SectionTitle>
            </div>

            <div className="overflow-x-auto w-[80%]  mx-auto bg-white p-10 mb-10 ">
                <div className="flex justify-between mb-7 ">
                    <h2 className="font-bold text-2xl"> Total Bookings: <span className="text-red-900"> demo </span> </h2>
                    <h2 className="font-bold text-2xl mr-20"> Total Price: <span className="text-red-900"> demo  </span></h2>
                    <button className=" btn hover:bg-amber-400 hover:text-black bg-[#D1A054] px-3 py-2  text-white font-medium rounded-md">
                        Pay

                    </button>

                </div>
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr className="uppercase bg-[#D1A054] text-white font-medium">
                            <td> # </td>
                            <td>Item image</td>
                            <td>Guest Number</td>
                            <td>Category</td>
                            <td>price</td>
                            <td>action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {/* {
                            booking.map((item, index) => <tr key={item._id}> */}
                            <tr>
                                <th>
                                    {/* {index + 1} */}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={logo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    <h2 className=""> demo </h2>
                                </td>
                                <td>
                                    <h2 className="ml-5"> demo </h2>
                                </td>
                                <td>
                                    <h2 className="ml-5"> demo </h2>
                                </td>
                                <th>
                                    <button
                                        // onClick={() => handleDelete(item._id)}
                                        className=" btn px-1 py-2 text-lg bg-red-700 text-white rounded-md  ml-4 ">
                                        <RiDeleteBin6Line />
                                    </button>
                                </th>
                            </tr>
                            {/* )
                        } */}

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Booking;