import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {
  const products = useSelector((state) => state.productReducer.products);
  console.log(products);

  const render = products.map((product) => {
    return (
      <div className="w-[30%]  mr-3 mb-3 border shadow" key={product.id}>
        <img className="w-full h-[45vh]   object-cover" src={product.image} alt="" />
        <h1>{product.title}</h1>
        <small>{product.description.slice(0, 100)}...</small>
        <div className="mt-3 flex justify-between items-center p-5 flex-wrap">
          <p>{product.price}</p>
          <button>Add to cart</button>
          <Link className="w-1/2  m-auto block" to={`/product/:${product.id}`}>More info ...</Link>
        </div>
      </div>
    );
  });
  return products.length > 0 ? (
    <div className="overflow-auto flex flex-wrap">{render}</div>
  ) : (
    "Loading....."
  );
};

export default Products;
