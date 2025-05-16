import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        "/api/login",
        {
          identifier: String(data.identifier),
          password: String(data.password),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("car", JSON.stringify(response.data.user.car));
      localStorage.setItem("qr", response.data.qr_code_path);

      setIsLoggedIn(true);

      navigate("/");
    } catch (error) {
      alert("Login failed. Please check your credentials.", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  text-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white text-black px-8 rounded flex flex-col justify-center gap-6   h-[70vh] shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">
          Login
        </h2>

        <div className="mb-4">
          <label htmlFor="identifier" className="block mb-1 font-medium">
            Phone Number
          </label>
          <input
            type="text"
            id="identifier"
            {...register("identifier", { required: "Identifier is required" })}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          {errors.identifier && (
            <p className="text-red-600 text-sm mt-1">
              {errors.identifier.message}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block mb-1 font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "Password is required" })}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
          {errors.password && (
            <p className="text-red-600 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {isSubmitting ? "Logging in.." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
