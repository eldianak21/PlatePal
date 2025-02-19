import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleSendVerification = () => {
    // Implement Firebase logic to send verification email
    console.log('Verification link sent to:', email);
    setStep(2); // Move to the next step
  };

  const handleVerifyCode = () => {
    // Implement logic to verify the code
    console.log('Verification code:', verificationCode);
    setStep(3); // Move to the next step
  };

  const handleResetPassword = () => {
    // Implement Firebase logic to reset password
    console.log('New password set for:', email);
    navigate('/login'); // Redirect after password reset
  };

  const handleResendCode = () => {
    // Implement logic to resend the verification code
    console.log('Verification code resent to:', email);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex items-center justify-center bg-yellow-50">
        <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md text-center">
          {step === 1 && (
            <>
              <h1 className="text-4xl font-bold mb-6">Forgot Password</h1>
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="border p-3 mb-6 w-full text-lg"
              />
              <button 
                onClick={handleSendVerification} 
                className="bg-red-500 text-white py-3 px-6 rounded text-lg">
                Send Verification Link
              </button>
            </>
          )}
          
          {step === 2 && (
            <>
              <h1 className="text-4xl font-bold mb-6">Verification Code</h1>
              <p className="mb-4">A verification code has been sent to your email.</p>
              <input 
                type="text" 
                placeholder="Enter verification code" 
                value={verificationCode} 
                onChange={(e) => setVerificationCode(e.target.value)} 
                className="border p-3 mb-6 w-full text-lg"
              />
              <button 
                onClick={handleVerifyCode} 
                className="bg-red-500 text-white py-3 px-6 rounded text-lg">
                Verify Code
              </button>
              <button 
                onClick={handleResendCode} 
                className="text-red-500 font-semibold mt-4">
                Resend Code
              </button>
            </>
          )}

          {step === 3 && (
            <>
              <h1 className="text-4xl font-bold mb-6">Set New Password</h1>
              <input 
                type="password" 
                placeholder="New Password" 
                value={newPassword} 
                onChange={(e) => setNewPassword(e.target.value)} 
                className="border p-3 mb-6 w-full text-lg"
              />
              <button 
                onClick={handleResetPassword} 
                className="bg-red-500 text-white py-3 px-6 rounded text-lg">
                Reset Password
              </button>
            </>
          )}
          
          <p className="mt-4">
            Remembered your password? 
            <button 
              onClick={() => navigate('/login')} 
              className="text-red-500 font-semibold ml-1">
              Login
            </button>
          </p>
        </div>
      </div>
     
    </div>
  );
};

export default ForgotPassword;