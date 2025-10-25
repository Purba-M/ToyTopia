import React, { use, useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Authcontext } from "../provider/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const { createuser, setuser, updateuser, googleSignIn } =
  useContext(Authcontext);
  const [nameError, setNameError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");


  const handleregister = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    setPasswordError("");
    setConfirmError("");

    if (name.length < 5) {
      setNameError("Name should be more than 5 characters");
      return;
    } else {
      setNameError("");
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      alert("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      alert("Password must contain at least one lowercase letter.");
      return;
    }

    if (password !== confirmPassword) {
      setConfirmError("Passwords do not match.");
      return;
    }

    console.log(name, photo, email, password);
    createuser(email, password)
      .then((result) => {
        const user = result.user;
        updateuser({ displayName: name, photoURL: photo })
          .then(() => {
            setuser({ ...user, displayName: name, photoURL: photo });
             navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setuser(user);
          });
      })

       .catch((error) => {
        setPasswordError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setuser(user);
        alert("Signed in with Google successfully!");
      })
      .catch((error) => {
        setPasswordError(error.message);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-gradient-to-br from-pink-200 via-yellow-100 to-lime-100">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-center text-[20px]">  🎠 Create Your ToyStore Account</h2>
        <form onSubmit={handleregister} className="card-body 	bg-white">
          <fieldset className="fieldset ">
            {/* name */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input w-full rounded-[20px] "
              placeholder="name"
            />
            {nameError && (
              <p className="text-red-500 text-center mt-2">{nameError}</p>
            )}

            {/* photo */}
            <label className="label">Photo</label>
            <input
              name="photo"
              type=""
              className="input w-full rounded-[20px]"
              placeholder="photo"
            />

            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full rounded-[20px]"
              placeholder="Email"
            />

            <label className="label">Password</label>
             <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              className="input w-full rounded-[20px]"
              placeholder="Password"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 cursor-pointer text-sm text-gray-500"
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>
            {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}

            {/* confirm password */}
            <label className="label">Confirm Password</label>
             <div className="relative">
            <input
              name="confirmPassword"
              type={showConfirm ? "text" : "password"}
              className="input w-full rounded-[20px]"
              placeholder="Confirm Password"/>
            <span onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-3 cursor-pointer text-sm text-gray-500">
              {showConfirm?"Hide":"Show"}
            </span>
          </div>
           {confirmError && <p className="text-red-500 text-sm">{confirmError}</p>}

          {/* REGISTER BUTTON */}
            <button type="submit" className="btn mt-4 w-full rounded-[20px] bg-red-600 text-white">
              Register
            </button>
            <div className="divider">or</div>

            {/* CONTINUE WITH GOOGLE */}
            <button type="button" onClick={handleGoogleLogin}
              className="btn btn-outline w-full rounded-[20px]">
              Continue with Google
            </button>

              {/* Go back to Login */}
            <Link to="/auth/login"  className="block text-center text-pink-500 font-medium text-sm pt-3 hover:underline">
              Dont’t Have An Account ? Login
            </Link>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
