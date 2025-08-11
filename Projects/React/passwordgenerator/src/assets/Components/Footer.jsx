import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

                <div className="flex space-x-6 text-sm mb-4 md:mb-0">
                    <a href="/" className="hover:text-white transition-colors">Home</a>
                    <a href="/about" className="hover:text-white transition-colors">About</a>
                    <a href="/contact" className="hover:text-white transition-colors">News</a>
                    <a href="/contact" className="hover:text-white transition-colors">Achievements</a>
                    <a href="/contact" className="hover:text-white transition-colors">Security</a>
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-5">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white">
                        <FaFacebookF size={18} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white">
                        <FaTwitter size={18} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white">
                        <FaInstagram size={18} />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white">
                        <FaGithub size={18} />
                    </a>
                </div>
            </div>

            {/* Bottom line */}
            <div className="mt-4 border-t border-gray-700 pt-8 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} Password Generator. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer
