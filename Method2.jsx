import React, { useState } from "react";
import validator from "validator";
import ShoppingCart from "../SmallProjects/ShoppingCart";

const Method2 = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [rePass, setRePass] = useState("");
  const [number, setNumber] = useState("");
  const [count, setCount] = useState(0);
  const [active,setActive]=useState(false);
  const formValidating = (e) => {
    e.preventDefault();
    console.log("Form was Submitted");
    console.log({ name, pass, email, rePass, number });

    if (name === "") {
      alert("Username is required");
      setActive(true);
      return;
    }

    if (pass === "") {
      alert("Password is required");
      return;
    }
    if (!validator.isStrongPassword(pass)) {
      alert("Password does not fulfill all the criteria");
      return;
    }
    if (rePass === "") {
      alert("Retype password is required");
      return;
    }

    if (pass !== rePass) {
      alert("Passwords do not match");
      return;
    }

    if (email === "") {
      alert("Email is required");
      return;
    }

    if (!validator.isEmail(email)) {
      alert("Invalid email format");
      return;
    }

    if (number === "") {
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
              name="Username"
              onChange={(e) => setActive(true)}
            />

            
            {(name.length<4&&active?("Username is short"):(""))}
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Password</label>
            <input
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="password"
              name="password"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Retype Password</label>
            <input
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="password"
              name="reenter"
              onChange={(e) => setRePass(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Email</label>
            <input
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Phone No</label>
            <input
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="tel"
              name="number"
              onChange={(e) => setNumber(e.target.value)}
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
        <ShoppingCart name={name} />
      )}
    </>
  );
};

export default Method2;
