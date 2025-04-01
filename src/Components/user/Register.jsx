import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const nav = useNavigate();
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handlechange(e) {
    setdata({ ...data, [e.target.id]: e.target.value });
  }
  return (
    <div className="bg-white shadow-md rounded-md p-6 w-full max-w-lg max-h-[calc(100vh-2rem)] overflow-hidden me-25">
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
        User Registration
      </h2>

      <form method="post" className="space-y-3">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-medium"
          >
            Name
          </label>
          <InputText
            id="name"
            onChange={handlechange}
            placeholder="Enter your name"
            required
            className="w-full border rounded-md px-2 p-inputtext-sm text-sm"
            keyfilter="alpha"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-medium"
          >
            Email
          </label>
          <InputText
            id="email"
            placeholder="Enter your email"
            type="email"
            onChange={handlechange}
            required
            keyfilter={/^[a-zA-Z0-9@._-]*$/}
            className="w-full border rounded-md px-2 p-inputtext-sm text-sm"
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label
            htmlFor="mobile"
            className="block text-gray-700 text-sm font-medium"
          >
            Mobile Number
          </label>
          <InputText
            id="mobile"
            placeholder="Enter your mobile number"
            required
            onChange={handlechange}
            keyfilter="int"
            className="w-full border rounded-md px-2 p-inputtext-sm text-sm"
          />
        </div>

        {/* Username */}
        <div>
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-medium"
          >
            Username
          </label>
          <InputText
            id="username"
            placeholder="Enter your username"
            onChange={handlechange}
            required
            className="w-full border rounded-md px-2 p-inputtext-sm text-sm"
          />
        </div>

        {/* Password */}
        <div className="flex justify-between w-full">
          <div className="w-{50%}">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-medium"
            >
              Password
            </label>
            <Password
              id="password"
              placeholder="Enter password"
              required
              onChange={handlechange}
              className=" w-{50%}  rounded-md p-inputtext-sm"
              feedback={false}
            />
          </div>

          {/* Confirm Password */}
          <div className="w-{50%}">
            <label
              htmlFor="confirmpass"
              className="block text-gray-700 text-sm font-medium"
            >
              Confirm Password
            </label>
            <Password
              placeholder="Confirm password"
              id="confirmpass"
              required
              onChange={handlechange}
              className="w-{50%}  rounded-md  p-inputtext-sm"
              feedback={false}
            />
          </div>
        </div>

        {/* Submit Button */}

        <div className="flex justify-center gap-4 items-center mt-5">
          <Button
            label="Register"
            type="button"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold  rounded-md text-sm"
          />
          <a onClick={() => nav("/")} href="#">
            Back to login
          </a>
        </div>
      </form>
    </div>
  );
};

export default Register;
