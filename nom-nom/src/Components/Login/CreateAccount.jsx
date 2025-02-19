import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    // Implement Firebase logic for account creation
    console.log('Account created:', { email, password });
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex items-center justify-center bg-yellow-50">
        <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md text-center">
          <h1 className="text-4xl font-bold mb-6">Create Account</h1>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="border p-3 mb-3 w-full text-lg"
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="border p-3 mb-6 w-full text-lg"
          />
          <button 
            onClick={handleCreateAccount} 
            className="bg-red-500 text-white py-3 px-6 rounded text-lg">
            Create Account
          </button>
          <p className="mt-4">
            Already have an account? 
            <button 
              onClick={handleLoginRedirect} 
              className="text-red-500 font-semibold ml-1">
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;