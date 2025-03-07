import React, { useState } from "react";
import validator from "validator";
import ShoppingCart from "../SmallProjects/ShoppingCart";

const Method4 = () => {
  const [formData, setFormData] = useState({
    name: "",
    pass: "",
    email: "",
    rePass: "",
    number: "",
  });

  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData)
    setActive(true);
  };

  const formValidating = (e) => {
    e.preventDefault();
    console.log("Form was Submitted", formData);

    const { name, pass, email, rePass, number } = formData;

    if (name.trim() === "") {
      alert("Username is required");
      return;
    }
    if (name.length < 4) {
      alert("Username must be at least 4 characters");
      return;
    }

    if (pass.trim() === "") {
      alert("Password is required");
      return;
    }

    if (!validator.isStrongPassword(pass, { minLength: 6, minLowercase: 1, minUppercase: 1, minNumbers: 1 })) {
      alert("Password must be at least 6 characters and contain uppercase, lowercase, and a number.");
      return;
    }

    if (rePass.trim() === "") {
      alert("Retype password is required");
      return;
    }

    if (pass !== rePass) {
      alert("Passwords do not match");
      return;
    }

    if (email.trim() === "") {
      alert("Email is required");
      return;
    }

    if (!validator.isEmail(email)) {
      alert("Invalid email format");
      return;
    }

    if (number.trim() === "") {
      alert("Phone number is required");
      return;
    }

    if (!validator.isMobilePhone(number, ["en-IN", "en-US"])) {
      alert("Invalid phone number");
      return;
    }

    setCount(1);
  };

  return (
    <>
      {count === 0 ? (
        <form onSubmit={formValidating} className="flex flex-col gap-4 p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg text-black">
          <div className="flex flex-col">
            <label className="font-medium">Username</label>
            <input
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="name"
              onChange={handleChange}
            />
            {formData.name.length < 4 && active && <p className="text-red-500">Username is short</p>}
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Password</label>
            <input
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="password"
              name="pass"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Retype Password</label>
            <input
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="password"
              name="rePass"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Email</label>
            <input
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Phone No</label>
            <input
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="tel"
              name="number"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      ) : (
        <ShoppingCart name={formData.name} />
      )}
    </>
  );
};

export default Method4;
