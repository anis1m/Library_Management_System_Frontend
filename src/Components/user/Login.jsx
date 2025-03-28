import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-white shadow-md rounded-md p-6 w-full max-w-sm me-25">
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
        Login
      </h2>

      <form method="post" className="space-y-4">
        {/* Username */}
        <div>
          <label htmlFor="username" className="block text-gray-700 text-sm font-medium">
            Username
          </label>
          <InputText
            id="username"
            placeholder="Enter your username"
            required
            className="w-full border rounded-md px-2 py-2 text-sm"
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-gray-700 text-sm font-medium">
            Password
          </label>
          <div className="w-full">
            <Password
              id="password"
              placeholder="Enter your password"
              required
              className="w-full"
              inputClassName="w-full border rounded-md px-2 py-2 text-sm"
              feedback={false}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-2">
          <Button
            label="Login"
            type="button"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md text-sm"
          />
        </div>

        {/* Register Message */}
        <p className="text-center text-gray-600 text-sm mt-3">
          Don't have an account?{" "}
          <Link to={"/register"}>
          <span className="text-blue-500">Register here</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
