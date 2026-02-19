import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
const Login = () => {
  const { register, reset, handleSubmit } = useForm();
  const loginHandler = (user) => {
    user.id = nanoid();
    console.log(user);
    reset();
  };
  return (
    <form
      className="flex flex-col w-1/4 "
      onSubmit={handleSubmit(loginHandler)}
    >
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
      <button className=" rounded  px-4 py-2 mt-5 bg-blue-400 w-fit">Login</button>
      <p className="mt-5 ">Don't have an account ? <Link to="/register" className="text-blue-400">Register</Link></p>
    </form>
  );
};

export default Login;
