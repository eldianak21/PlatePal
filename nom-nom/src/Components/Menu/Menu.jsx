import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../Components/Cart/CartContext';

const Menu = () => {
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/menu')
            .then(response => response.json())
            .then(data => setMenuItems(data))
            .catch(error => console.error('Error fetching menu:', error));
    }, []);

    const handleAddToCart = (item) => {
        addToCart(item);
        navigate('/cart');
    };

    return (
        <div className="p-5 bg-white">
            <h1 className="text-3xl font-bold text-center mb-6">Our Menu</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems.map(item => (
                    <div key={item.id} className="border rounded-lg shadow-lg p-4">
                        <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-t-lg" />
                        <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
                        <p className="text-gray-600">{item.price} Birr</p>
                        <button
                            onClick={() => handleAddToCart(item)}
                            className="mt-2 bg-red-500 text-white font-bold py-1 px-2 rounded hover:bg-red-600 transition duration-300">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;