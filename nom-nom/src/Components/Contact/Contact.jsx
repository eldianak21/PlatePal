// import React, { useState } from 'react';
// import axios from 'axios';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const [status, setStatus] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/contact', formData); // Update the endpoint as needed
//       setStatus('Message sent successfully!');
//       setFormData({ name: '', email: '', message: '' }); // Reset form
//     } catch (error) {
//       setStatus('Error sending message. Please try again later.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-yellow-50">
//       <div className="w-full max-w-4xl mx-auto bg-yellow-75 rounded-lg shadow-lg p-8">
//         <h1 className="text-4xl font-bold text-center text-white bg-red-500 rounded p-4 mb-6">Contact Us</h1>
//         {status && <p className="text-center mb-4 text-red-600">{status}</p>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
//             <input
//               className="w-full border border-gray-300 p-2 rounded placeholder-gray-500" // Added placeholder-gray-500
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter your name" // Added placeholder text
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
//             <input
//               className="w-full border border-gray-300 p-2 rounded placeholder-gray-500" // Added placeholder-gray-500
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email" // Added placeholder text
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
//             <textarea
//               className="w-full border border-gray-300 p-2 rounded placeholder-gray-500" // Added placeholder-gray-500
//               id="message"
//               name="message"
//               rows="4"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Write your message here" // Added placeholder text
//               required
//             ></textarea>
//           </div>
//           <button className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-300" type="submit">
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    emailjs
      .send(
        "service_9gqlh8t",
        "template_ahkm723",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "EmyHGZd4g0woMoadX"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setStatus("Error sending message. Please try again later.");
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-yellow-50">
      <div className="w-full max-w-4xl mx-auto bg-yellow-75 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-white bg-red-500 rounded p-4 mb-6">
          Contact Us
        </h1>
        {status && <p className="text-center mb-4 text-red-600">{status}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full border border-gray-300 p-2 rounded placeholder-gray-500"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full border border-gray-300 p-2 rounded placeholder-gray-500"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full border border-gray-300 p-2 rounded placeholder-gray-500"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here"
              required
            ></textarea>
          </div>
          <button
            className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-300"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
