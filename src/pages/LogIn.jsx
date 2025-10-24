import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Authcontext } from "../provider/AuthProvider";

const LogIn = () => {
  const[error,setError]=useState()
  const location=useLocation();
  console.log(location)
  const { signin,googleSignIn } = use(Authcontext);
  const navigate=useNavigate()

    const handlelogin=(e)=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log({email,password})
        signin(email,password)
        .then(res=>{
            const user=res.user;
            console.log(user)
            alert("Logged in successfully!")
            navigate(location.state?.pathname || '/home', { replace: true })
        })
        .catch((error)=>{
          const errorCode=error.code;
          // const errormsg=error.message;
        setError(errorCode)
            //  alert("Invalid email or password!");
        })
    }  
    
    const handleGoogleLogin = () => {
    googleSignIn()
      .then((res) => {
        alert("Logged in with Google!");
        navigate(location.state?.pathname || "/home", { replace: true });
      })
      .catch((error) => {
        setError(error.code);
      });
  };
      return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-center">This is our login page</h2>
        <form className="card-body " onSubmit={handlelogin}>
          <fieldset className="fieldset ">
            <label className="label">Email</label>
            <input type="email" name='email' className="input w-full" placeholder="Email" required/>
            <label className="label">Password</label>
            <input type="password" name='password' className="input w-full" placeholder="Password" required />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {error && <p className="text-red-500 text-center mt-2">{error}</p>}


            <button type='submit' className="btn btn-neutral mt-4 w-full">Login</button>
             {/* Google Login Button */}
            <button type="button" onClick={handleGoogleLogin} className="btn btn-outline mt-3 w-full">
              Continue with Google
            </button>
            <Link to='/auth/register' className="text-secondary text-center pt-5">Dont’t Have An Account ? Register</Link>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LogIn;