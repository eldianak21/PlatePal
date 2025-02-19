import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleCreateAccount = (event) => {
    event.preventDefault();

    // Example logic for creating an account (replace with actual API call)
    if (username && password) {
      // Simulate account creation success
      // You can replace this with an API call
      console.log("Account created for:", username);
      navigate("/checkout"); // Redirect to checkout on success
    } else {
      setError("All fields are required.");
    }
  };

  return (
    <div className="p-5 bg-yellow-50 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Create Account</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleCreateAccount} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border border-gray-400 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border border-gray-400 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default CreateAccount;
