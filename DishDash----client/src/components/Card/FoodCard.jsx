
import { AuthContext } from '../../providers/AuthProvider';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const FoodCard = ({ item }) => {
    const { _id, image, price, name, recipe } = item
    const { user } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    

    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name: name,
                image: image,
                price: price,
            }

            axios.post('http://localhost:5000/', cartItem)
                .then(res => {
                    console.log(res.data)
                    if(res.data.insertedId){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }

                })
        }
        else {
            Swal.fire({
                title: "To order you have to logged in",
                text: "Do you want to log in",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes"
            }).then((result) => {
                if (result.isConfirmed) {

                    navigate('/login', { state: { from: location } })
                }
            });
        }

    }


    return (
        <div className="card bg-gray-100 w-96 shadow-sm">
            <figure className="px-3 pt-2">
                <img
                    src={image}
                    alt=""
                    className="rounded-xl" />
            </figure>
            <p className='absolute right-0 mr-5 mt-3 rounded-md text-white bg-black px-2 py-1'>
                ${price}
            </p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={handleAddToCart} className="btn btn-outline hover:bg-black hover:border-b-0 border-0 border-b-4 border-[#BB8506] text-[#BB8506] px-12 uppercase">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;