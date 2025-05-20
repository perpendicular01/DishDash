import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from "react-icons/fa6";
import useAxioSecure from '../../../hooks/useAxioSecure';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { useLoaderData, useNavigate } from 'react-router-dom';

const image_hosting_key = import.meta.env.VITE_Image_Upload_token;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {

    const menuItem = useLoaderData();
    console.log("Loaded menu item:", menuItem);
    const navigate = useNavigate()

    const { name, recipe, price, image, _id, category } = menuItem || {};

    const axioPublic = useAxiosPublic()
    const axioSecure = useAxioSecure()

    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async (data) => {
        let imageUrl = image; 
      
        if (data.image && data.image[0]) {
          const imageFile = { image: data.image[0] };
          const res = await axioPublic.post(image_hosting_api, imageFile, {
            headers: {
              "content-type": "multipart/form-data",
            }
          });
          if (res.data.success) {
            imageUrl = res.data.data.display_url;
          }
        }
      
        const menuItem = {
          name: data.name,
          recipe: data.recipe,
          image: imageUrl,
          category: data.category,
          price: data.price
        };
      
        const menuRes = await axioSecure.patch(`/menu/${_id}`, menuItem);
      
        if (menuRes.data.modifiedCount > 0) {
          reset();
          Swal.fire({
            position: "bottom-end",
            icon: "success",
            title: `${data.name} has been updated!`,
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/dashboard/mangeItems');
        }
      };
      

    return (
        <div className="bg-gray-200">
            <div className='pt-5'>
                <SectionTitle
                    description="---Want to update the item?---"
                    heading={`update ${name}`}
                ></SectionTitle>
            </div>

            <div className="overflow-x-auto w-[80%]  mx-auto bg-white p-10 mb-10 ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text text-black pb-2 font-medium'>Recipe Name*</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={name}
                            className="input input-bordered w-full pb-2 "
                            {...register("name", { required: true })}
                            placeholder="Recipe Name" />

                    </div>

                    <div className='flex  gap-6'>
                        <div className='form-control w-full'>
                            <label className='label'>
                                <span className='label-text text-black pb-2 pt-4 font-medium'>Category*</span>
                            </label>
                            <select defaultValue={category}
                                {...register("category", { required: true })}
                                className="select w-full">
                                <option disabled={true}>Category</option>
                                <option value="salad"> Salad</option>
                                <option value="pizza"> Pizza</option>
                                <option value="soup"> Soup</option>
                                <option value="dessert"> Dessert</option>
                                <option value="drinks"> Drinks </option>
                            </select>

                        </div>


                        <div className='form-control w-full'>
                            <label className='label'>
                                <span className='label-text text-black pb-2 pt-4  font-medium'>price*</span>
                            </label>
                            <input
                                type="number"
                                defaultValue={price}
                                className="input input-bordered w-full pb-2 "
                                {...register("price", { required: true })}
                                placeholder="Price" />
                        </div>
                    </div>


                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text text-black pb-2 pt-4  font-medium'>Recipe Details*</span>
                        </label>
                        <textarea defaultValue={recipe}
                            className="textarea h-32 w-full"
                            {...register("recipe", { required: true })}
                            placeholder="Recipe Details"></textarea>

                    </div>

                    {image && (
                        <div className="mb-4">
                            <p className="text-sm font-medium text-black pb-2">Current Image:</p>
                            <img src={image} alt="Current" className="w-40 h-40 object-cover rounded" />
                        </div>
                    )}


                    <div className='form-control w-full pt-5'>

                        <input type="file"
                            {...register("image")}
                            className="file-input" />

                    </div>


                    <button
                        className='btn bg-[#835D23] text-white text-base mt-5 px-10 py-4 rounded-md'>
                        Update Item <FaUtensils className='ml-1'></FaUtensils>
                    </button>





                </form>
            </div>
        </div>
    );
};

export default UpdateItem;