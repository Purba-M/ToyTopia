
import { useLocation } from "react-router";
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import toast from "react-hot-toast";

const ForgetPassword = () => {
  const auth = getAuth();
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || "");

  const handleReset = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast("Password reset email sent! Check your Gmail inbox.");
        window.location.href = "https://mail.google.com";
      })
      .catch((error) => {
        toast( error.message);
      });
  };

  
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
        <h2 className="font-semibold text-center">Reset Your Password</h2>

        <form onSubmit={handleReset} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input w-full"
              placeholder="Enter your email"
              required
            />
            <button type="submit" className="btn btn-neutral mt-4 w-full">
              Reset Password
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
