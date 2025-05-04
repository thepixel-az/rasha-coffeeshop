import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
            <p>&copy; 2023 My Company. All rights reserved.</p>
            <ul className="flex justify-center space-x-4 mt-2">
            <li><a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            <li><a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a></li>
            </ul>
        </div>
        </footer>
    );
    }
export default Footer;