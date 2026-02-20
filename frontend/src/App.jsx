import { useDispatch } from "react-redux";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { useEffect } from "react";
import { asynccurrentuser } from "./store/actions/UserActions";
import { asyncLoadProduct } from "./store/actions/ProductActions";
const App = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(asynccurrentuser())
    dispatch(asyncLoadProduct())
  },[])
 
  return (
  
  
  <div className="bg-gray-800 w-screen font-thin h-screen text-white px-[5%]" >
    <Nav/>
    <Mainroutes/>
  </div>
  
  )
};

export default App;
