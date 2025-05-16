import { useForm } from "react-hook-form";
import axios from "axios";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const car = JSON.parse(localStorage.getItem("car"));
  const qr = localStorage.getItem("qr");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("/api/changePassword", {
        phone: user.phone,
        new_password: data.new_password,
      });

      alert("Password updated successfully!");
      reset();
    } catch (error) {
      alert("Failed to update password. Please try again.");
      console.error(error);
    }
  };
  return (
    <div className=" h-screen pt-16  text-white w-screen flex items-center justify-center px-4 ">
      <div className="bg-white text-blue-900  p-8 min-w-[90%] max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">{user?.name}</h2>
          <p className="text-gray-600">{user?.email}</p>
          <p className="text-gray-600 ">{user?.phone}</p>
        </div>

        <div className="mt-6 border-t pt-4">
          <h3 className="text-xl font-semibold mb-2">Car Details</h3>
          <p className="mb-1">
            <span className="font-semibold">Text Plate:</span> {car?.text_plate}
          </p>
          <p className="mb-1">
            <span className="font-semibold">Number Plate:</span>{" "}
            {car?.number_plate}
          </p>

          <div className="mt-4 text-center">
            <img src={qr} alt="QR Code" className="mx-auto w-32 h-32" />
          </div>
        </div>
        <div className="mt-8 border-t pt-4">
          <h3 className="text-xl font-semibold mb-4">Change Password</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 mx-auto md:w-[40%]"
          >
            <div>
              <label className="block text-sm font-medium mb-1">
                New Password
              </label>
              <input
                type="password"
                {...register("new_password", {
                  required: "New password is required",
                })}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              {errors.new_password && (
                <p className="text-red-600 text-sm">
                  {errors.new_password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
            >
              {isSubmitting ? "Updating..." : "Update Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
