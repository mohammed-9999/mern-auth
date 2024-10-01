import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [lodinge, setLoding] = useState(false);

  const handleChange = (e) => {
    setLoding(false);
    setError(false);
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    setError(false)
    e.preventDefault();
    try {
      setLoding(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success == false) {
        setError(true);
        setLoding(false);
      } else {
        setError(false);
        setLoding(false);
      }
    } catch (error) {
      console.log("error :", error);
    }
  };

  return (
    <div className="mx-auto max-w-lg">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={handleChange}
          className="bg-slate-100 p-3 rounded-lg"
        ></input>
        <input
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
          className="bg-slate-100 p-3 rounded-lg"
        ></input>
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
          className="bg-slate-100 p-3 rounded-lg"
        ></input>
        <button
          disabled={lodinge}
          className="text-center uppercase bg-slate-700 rounded-lg p-3 text text-white hover:opacity-95  disabled:opacity-80"
        >
          {lodinge ? "Loding..." : "Sign Up"}
        </button>
      </form>

      <div className="flex gap-2 mt-5">
        <p className="">Have an account ? </p>
        <span className="text-blue-500 ">
          <Link to="/sign-in">sign in</Link>
        </span>
      </div>
      <p className="text-red-700 mt-5">{error && "Somthing went wrong !"}</p>
    </div>
  );
}
