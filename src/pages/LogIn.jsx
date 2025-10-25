import React, { use, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router";
import { Authcontext } from "../provider/AuthProvider";

const LogIn = () => {
  const [error, setError] = useState();
  const [email, setEmail] = useState("");

  const location = useLocation();
  console.log(location);
  const { signin, googleSignIn } = use(Authcontext);
  const navigate = useNavigate();

  const handlelogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    signin(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        alert("Logged in successfully!");
        navigate(location.state?.pathname || "/", { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errormsg=error.message;
        setError(errorCode);
        //  alert("Invalid email or password!");
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((res) => {
        alert("Logged in with Google!");
        navigate(location.state?.pathname || "/", { replace: true });
      })
      .catch((error) => {
        setError(error.code);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center bg-gradient-to-br from-pink-100 via-blue-100 to-yellow-100">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-center text-[30px] text-red-600">Welcome Back!</h2>
        <p className="text-center font-semibold text-lime-500">Log in to your Toy World</p>
        <form className="card-body " onSubmit={handlelogin}>
          <fieldset className="fieldset ">
            <label className="label text-black font-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full rounded-[20px]"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="label text-black font-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="input w-full rounded-[20px]"
              placeholder="Password"
              required
            />
            <Link
              to="/forget"
              state={{ email }}
              className="link link-hover text-black font-semibold"
            >
              Forgot password?
            </Link>

            {error && <p className="text-red-500 text-center mt-2">{error}</p>}
           {/*LOGIN BUTTON  */}
            <button type="submit" className="btn text-white mt-4 w-full rounded-[20px] bg-red-600">
              Let's Go! 🚀
            </button>
            {/* Google Login Button */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn btn-outline mt-3 w-full rounded-[20px]"
            >
              Continue with Google
            </button>
            <Link to="/auth/register"  className="block text-center text-pink-500 font-medium text-sm pt-3 hover:underline">
              Dont’t Have An Account ? Register
            </Link>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
