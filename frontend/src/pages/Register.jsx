import { useForm } from "react-hook-form";
// import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
const Register = () => {
  const { register, reset, handleSubmit } = useForm();
  const registerHandler = (user) => {
    
    console.log(user);
    reset();
  };
  return (
    <form
      className="flex flex-col w-1/4 "
      onSubmit={handleSubmit(registerHandler)}
    >
      <input
        {...register("username")}
        type="text"
        placeholder="Enter username"
        className="mb-3 outline-0 border-b  p-2 text-3xl"
      />
      <input
        {...register("email")}
        type="email"
        placeholder="Enter email id"
        className="mb-5 outline-0 border-b  p-2 text-3xl"
      />
      <input
        {...register("password")}
        type="password"
        placeholder="Enter password"
        className="mb-5 outline-0 border-b  p-2 text-3xl"
      />
      <button className=" rounded  px-4 py-2 mt-5 bg-blue-400  w-fit ">Register</button>
      <p className="mt-5 ">Already have an account ? <Link to="/login" className="text-blue-400">Login</Link></p>
    </form>
  );
};

export default Register;
