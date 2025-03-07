import React, { useState } from "react";
import validator from "validator";
import ShoppingCart from "../SmallProjects/ShoppingCart";

const Method5 = () => {
    const {formData,setFormData}=useState({
        name:"",
        pass:"",
        email:"",
        rePass:"",
        number:"",
    });
    const handleChange =(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
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
  )
}

export default Method5
