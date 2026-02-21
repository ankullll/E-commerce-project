import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  asyncDeleteProduct,
  asyncUpdateProduct,
} from "../../store/actions/ProductActions";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    productReducer : {products},
    userReducer : {users}
  } = useSelector((state) => state);



  const product = products?.find((product) => product.id === id);
 

  const { register, handleSubmit } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      price: product?.price,
      category: product?.category,
      description: product?.description,
    },
  });


  const UpdateProductHandler = (product) => {
    


    dispatch(asyncUpdateProduct(id, product));
  };

  const deleteHandler = () => {
    dispatch(asyncDeleteProduct(id));
    navigate("/products");
  };
  return product ? (
    <>
      {" "}
      <div className="w-full flex">
        <img className="w-[30%]  object-cover" src={product.image} alt="" />
        <div className="w-1/2 h-1/2 px-5">
          <h1 className="text-6xl mb-10">{product.title}</h1>
          <p className="mb-5 ">{product.description}</p>
          <p className="text-3xl font-bold text-green-500">${product.price}</p>
          <button className="mt-5">Add to cart</button>
        </div>
      </div>
      <hr className="mt-5" />

      {users && users?.isAdmin && (<form
        className="flex flex-col w-1/4 "
        onSubmit={handleSubmit(UpdateProductHandler)}
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
          placeholder="Description"
        ></textarea>
        <input
          {...register("category")}
          type="text"
          placeholder="Enter category"
          className="mb-3 outline-0 border-b  p-2 text-3xl"
        />
        <button className=" rounded  px-4 py-2 mt-5 bg-blue-400  w-fit ">
          Update Product
        </button>
         <button type="button"
        onClick={deleteHandler}
        className=" rounded  px-4 py-2 mt-5 bg-red-400   "
      >
        Delete
      </button>
      </form>)}
      
     
    </>
  ) : (
    "Loading..."
  );
};

export default ProductDetails;
