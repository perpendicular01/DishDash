import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from "react-icons/fa6";
import useAxioSecure from '../../../hooks/useAxioSecure';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_Image_Upload_token;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
    const axioPublic = useAxiosPublic()
    const axioSecure = useAxioSecure()

    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async(data) => {
        console.log(data)
        const imageFile = {image : data.image[0]}
        const res = await axioPublic.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
              }
        })
        console.log(res.data)
        if(res.data.success){
            const menuItem = {
                name : data.name,
                recipe : data.recipe,
                image : res.data.data.display_url,
                category : data.category,
                price : data.price
            }

            const menuRes = await axioSecure.post('/menu', menuItem);
            console.log(menuRes.data)
            if(menuRes.data.insertedId){
                reset()
                Swal.fire({
                    position: "bottom-end",
                    icon: "success",
                    title: `${data.name} is added to menu`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
    }
        

    return (
        <div className="bg-gray-200">
            <div className='pt-5'>
                <SectionTitle
                    description="---What's new?---"
                    heading="Add an Item"
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
                            className="input input-bordered w-full pb-2 "
                            {...register("name", {required: true})}
                            placeholder="Recipe Name" />

                    </div>

                    <div className='flex  gap-6'>
                        <div className='form-control w-full'>
                            <label className='label'>
                                <span className='label-text text-black pb-2 pt-4 font-medium'>Category*</span>
                            </label>
                            <select defaultValue="Category" 
                            {...register("category", {required: true})}
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
                                className="input input-bordered w-full pb-2 "
                                {...register("price", {required: true})}
                                placeholder="Price" />
                        </div>
                    </div>


                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text text-black pb-2 pt-4  font-medium'>Recipe Details*</span>
                        </label>
                        <textarea className="textarea h-32 w-full"
                        {...register("recipe", {required: true})}
                        placeholder="Recipe Details"></textarea>
                        
                    </div>


                    <div className='form-control w-full pt-5'>
                    
                        <input type="file" 
                        {...register("image", {required: true})}
                        className="file-input" />
                        
                    </div>


                    <button 
                    className='btn bg-[#835D23] text-white text-base mt-5 px-10 py-4 rounded-md'>
                        Add Item <FaUtensils className='ml-1'></FaUtensils>
                    </button>




                    
                </form>
            </div>
        </div>
    );
};

export default AddItems;