import { nanoid } from 'nanoid';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncCreateProduct } from '../../store/actions/ProductActions';

const CreateProduct = () => {
 const navigate = useNavigate()
  const dispatch = useDispatch();
  const { register, reset, handleSubmit } = useForm();
  const CreateProductHandler = (product) => {
    product.id = nanoid()
    console.log(product);
    reset();
    dispatch(asyncCreateProduct(product));
    navigate("/products/")
  
    
  };
  return (
    <form
      className="flex flex-col w-1/4 "
      onSubmit={handleSubmit(CreateProductHandler)}
    >
      <input
        {...register("image")}
        type="url"
        placeholder="image url"
        className="mb-3 outline-0 border-b  p-2 text-3xl"
      />
      <input
        {...register("title")}
        type="text"
        placeholder="Enter title"
        className="mb-3 outline-0 border-b  p-2 text-3xl"
      />
      <input
        {...register("price")}
        type="number"
        placeholder="Enter price"
        className="mb-5 outline-0 border-b  p-2 text-3xl"
      />
      <textarea 
      {...register("description")}
        className="mb-5 outline-0 border-b  p-2 text-3xl"
        placeholder='Description'
      >
        
      </textarea>
      <input
        {...register("category")}
        type="text"
        placeholder="Enter category"
        className="mb-3 outline-0 border-b  p-2 text-3xl"
      />
      <button className=" rounded  px-4 py-2 mt-5 bg-blue-400  w-fit ">Create Product</button>
     
    </form>
  );
};

export default CreateProduct
