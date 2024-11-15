import React from 'react';
import logo1 from '../assets/asai.jpeg';

const Navbar = () => {
    return (
        <nav className="bg-gray-900 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* Replace the title with logos */}
                <div className="flex items-center space-x-2">
                    <img src={logo1} alt="Logo 1" className="h-10" />
                </div>

                <ul className="flex space-x-4">
                    <li><a href="about" className="hover:text-blue-400">About</a></li>
                    <li><a href="project" className="hover:text-blue-400">Projects</a></li>
                    <li><a href="contact" className="hover:text-blue-400">Contact</a></li>
                    <li><a href="admin" className="hover:text-blue-400">Admin</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;