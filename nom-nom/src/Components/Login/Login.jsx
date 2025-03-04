import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase"; // Adjust the path based on your directory structure
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Sign in the user with email and password
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", { email });
      navigate("/Payment"); // Redirect to checkout on success
    } catch (error) {
      setError(error.message); // Set error message if login fails
    }
  };

  const handleCreateAccountRedirect = () => {
    navigate("/create-account");
  };

  const handleForgotPasswordRedirect = () => {
    navigate("/forgot-password");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex items-center justify-center bg-yellow-50">
        <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md text-center">
          <h1 className="text-4xl font-bold mb-6">Login</h1>
          {error && <p className="text-red-500">{error}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 mb-3 w-full text-lg"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3 mb-6 w-full text-lg"
            required
          />
          <button
            onClick={handleLogin}
            className="bg-red-500 text-white py-3 px-6 rounded text-lg"
          >
            Login
          </button>
          <p className="mt-4">
            Don't have an account?
            <button
              onClick={handleCreateAccountRedirect}
              className="text-red-500 font-semibold ml-1"
            >
              Create Account
            </button>
          </p>
          <p className="mt-2">
            <button
              onClick={handleForgotPasswordRedirect}
              className="text-red-500 font-semibold"
            >
              Forgot Password?
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
