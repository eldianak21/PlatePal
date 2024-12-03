import React from 'react'

const Contact = () => {
    return (
      <div className="p-5 bg-white">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
            <input
              className="w-full border border-gray-300 p-2 rounded"
              type="text"
              id="name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              className="w-full border border-gray-300 p-2 rounded"
              type="email"
              id="email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
            <textarea
              className="w-full border border-gray-300 p-2 rounded"
              id="message"
              rows="4"
              required
            ></textarea>
          </div>
          <button className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-300" type="submit">
            Send Message
          </button>
        </form>
      </div>
    );
  };

export default Contact