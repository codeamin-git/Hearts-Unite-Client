import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { LuHeartHandshake } from 'react-icons/lu';

const Footer = () => {
    return (
        <footer className="bg-black text-ivory mt-6 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Website Logo and Name */}
                    <div className="flex items-center mb-4 md:mb-0">
                        <LuHeartHandshake className="h-12 w-12 mr-2 text-red-500"/>
                        <span className="text-4xl font-bold">Hearts Unite</span>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-6 mb-4 md:mb-0">
                        <a className="text-blue-500 hover:text-gray-200">
                            <FaFacebook size={24} />
                        </a>
                        <a className="text-blue-200 hover:text-gray-200">
                            <FaTwitter size={24} />
                        </a>
                        <a className="text-red-600 hover:text-gray-200">
                            <FaInstagram size={24} />
                        </a>
                        <a className="text-blue-800 hover:text-gray-200">
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>
                {/* Copyright */}
                <div className="text-center mt-4">
                    <p className="text-sm">&copy; 2024 Hearts Unite. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
