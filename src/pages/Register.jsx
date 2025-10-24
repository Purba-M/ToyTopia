import React, { use, useContext } from 'react';
import { Link } from 'react-router';
import { Authcontext } from '../provider/AuthProvider';

const Register = () => {
    const {createuser,setuser}=useContext(Authcontext)
    const handleregister=(e)=>{
        e.preventDefault();
        console.log(e.target)
        const form=e.target;
        const name=form.name.value;
        const photo=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,photo,email,password)
        createuser(email,password)
        .then(result=>{
            const user=result.user;
            setuser(user)
        })

      .catch((error)=>{
           const errorcode=error.code;
           const errormsg=error.message;
           alert(errormsg)
      })

    }
    return (
         <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-center">This is our login page</h2>
        <form onSubmit={handleregister} className="card-body ">
          <fieldset className="fieldset ">
            {/* name */}
              <label className="label">Name</label>
            <input name='name' type="text" className="input w-full" placeholder="name" />

            {/* photo */}
              <label className="label">Photo</label>
            <input name='photo' type="" className="input w-full" placeholder="photo" />

            {/* email */}
            <label className="label">Email</label>
            <input name='email' type="email" className="input w-full" placeholder="Email" />
          

            <label className="label">Password</label>
            <input name='password' type="password" className="input w-full" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4 w-full">Register</button>
            <Link to='/auth/login' className="text-secondary text-center pt-5">Dont’t Have An Account ? Login</Link>
          </fieldset>
        </form>
      </div>
    </div>
    );
};

export default Register;