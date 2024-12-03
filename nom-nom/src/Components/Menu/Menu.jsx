import React from 'react'

const Menu = () =>  {
    const menuItems = [
      { id: 1, name: 'Delicious Burger', price: 5.99, image: '/images/burger.png' },
      { id: 2, name: 'Tasty Pizza', price: 7.99, image: '/images/pizza.png' },
      { id: 3, name: 'Spicy Chicken Wings', price: 6.49, image: '/images/wings.png' },
      // Add more items as needed
    ];
  
    return (
      <div className="p-5 bg-white">
        <h1 className="text-3xl font-bold text-center mb-6">Our Menu</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map(item => (
            <div key={item.id} className="border rounded-lg shadow-lg p-4">
              <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-t-lg" />
              <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
              <button className="mt-2 bg-red-500 text-white font-bold py-1 px-2 rounded hover:bg-red-600 transition duration-300">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
export default Menu