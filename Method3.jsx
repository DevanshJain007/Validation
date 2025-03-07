import React, { useState } from "react";
import validator from "validator";
import ShoppingCart from "../SmallProjects/ShoppingCart";

const Method3 = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [rePass, setRePass] = useState("");
  const [number, setNumber] = useState("");
  const [count, setCount] = useState(0);
  const [errors, setErrors] = useState({});

  const formValidating = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!name.trim()) newErrors.name = "Username is required";
    if (!pass) newErrors.pass = "Password is required";
    else if (!validator.isStrongPassword(pass)) newErrors.pass = "Weak password";

    if (!rePass) newErrors.rePass = "Retype password is required";
    else if (pass !== rePass) newErrors.rePass = "Passwords do not match";

    if (!email) newErrors.email = "Email is required";
    else if (!validator.isEmail(email)) newErrors.email = "Invalid email format";

    if (!number) newErrors.number = "Phone number is required";
    else if (!validator.isMobilePhone(number, ["en-IN", "en-US"])) newErrors.number = "Invalid phone number";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setCount(1);
  };

  return (
    <>
      {count === 0 ? (
        <form onSubmit={formValidating} className="flex flex-col gap-4 p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg text-black">
          <div className="flex flex-col">
            <label className="font-medium">Username</label>
            <input
              className={`border p-2 rounded-lg focus:outline-none focus:ring-2 ${errors.name ? "border-red-500" : "border-gray-300 focus:ring-blue-400"}`}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Password</label>
            <input
              className={`border p-2 rounded-lg focus:outline-none focus:ring-2 ${errors.pass ? "border-red-500" : "border-gray-300 focus:ring-blue-400"}`}
              type="password"
              onChange={(e) => setPass(e.target.value)}
            />
            {errors.pass && <p className="text-red-500 text-sm">{errors.pass}</p>}
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Retype Password</label>
            <input
              className={`border p-2 rounded-lg focus:outline-none focus:ring-2 ${errors.rePass ? "border-red-500" : "border-gray-300 focus:ring-blue-400"}`}
              type="password"
              onChange={(e) => setRePass(e.target.value)}
            />
            {errors.rePass && <p className="text-red-500 text-sm">{errors.rePass}</p>}
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Email</label>
            <input
              className={`border p-2 rounded-lg focus:outline-none focus:ring-2 ${errors.email ? "border-red-500" : "border-gray-300 focus:ring-blue-400"}`}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Phone No</label>
            <input
              className={`border p-2 rounded-lg focus:outline-none focus:ring-2 ${errors.number ? "border-red-500" : "border-gray-300 focus:ring-blue-400"}`}
              type="tel"
              onChange={(e) => setNumber(e.target.value)}
            />
            {errors.number && <p className="text-red-500 text-sm">{errors.number}</p>}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      ) : (
        <ShoppingCart name={name} />
      )}
    </>
  );
};

export default Method3;
