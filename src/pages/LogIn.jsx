import React, { use } from "react";
import { Link } from "react-router";
import { Authcontext } from "../provider/AuthProvider";

const LogIn = () => {
    const { signin } = use(Authcontext);

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
        })
        .catch((error)=>{
            const errorCode=error.code;
            const errormsg=error.message
            alert(errorCode,errormsg)
        })
    }    
      return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-center">This is our login page</h2>
        <form className="card-body " onSubmit={handlelogin}>
          <fieldset className="fieldset ">
            <label className="label">Email</label>
            <input type="email" name='email' className="input w-full" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" name='password' className="input w-full" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type='submit' className="btn btn-neutral mt-4 w-full">Login</button>
            <Link to='/auth/register' className="text-secondary text-center pt-5">Dont’t Have An Account ? Register</Link>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LogIn;