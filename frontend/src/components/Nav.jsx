import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asynclogoutuser } from "../store/actions/UserActions";

const Nav = () => {
  const dispatch=useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.userReducer.users);
  
  const logoutHandler = ()=>{
    dispatch(asynclogoutuser())
    navigate("/")
  }
  return (
    <nav className="flex justify-center items-center gap-x-5 p-10 mb-10">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      {user ? (
        <>
          <NavLink to="/admin/create-product"> Create Products</NavLink>
          <button onClick={logoutHandler}>Logout</button>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </nav>
  );
};

export default Nav;
