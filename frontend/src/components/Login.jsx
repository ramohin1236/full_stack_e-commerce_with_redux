/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLoginUserMutation } from "../redux/features/auth/authApi";
import Swal from 'sweetalert2'
const Login = () => {
//   const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //  mutation user kkorle [] user korte hoy
  // query use korle {} use korte hoy
  // eslint-disable-next-line no-unused-vars
  const [loginUser, { isLoading, error }] = useLoginUserMutation();

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data).unwrap();
      Swal.fire(`${response?.user?.userName} logged in successfully!`);
      navigate("/");
    } catch (err) {
         Swal.fire(err?.data?.message);
    }
  };
  return (
    <section className="h-screen flex items-center justify-center p-2">
      <div className="shadow bg-white p-8 max-w-sm mx-auto">
        <h2 className="text-2xl font-semibold pt-5">Please Login!</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3 max-w-sm mx-auto pt-6"
        >
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email"
            className="w-full bg-gray-100 focus:outline-none px-5 py-3"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Password"
            className="w-full bg-gray-100 focus:outline-none px-5 py-3"
          />

          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}

          <button className="w-full mt-5 bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-md">
            Login
          </button>
        </form>
        <div className="my-5 italic text-sm text-center">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-red-700 px-1 underline cursor-pointer"
          >
            Register
          </Link>{" "}
          here.
        </div>
      </div>
    </section>
  );
};

export default Login;
