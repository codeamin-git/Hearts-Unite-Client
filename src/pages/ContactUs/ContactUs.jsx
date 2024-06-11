import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <div className="py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-navy">Contact Us</h1>
                    <p className="mt-4 text-gray-600">We would love to hear from you. Get in touch with us!</p>
                </div>

                {/* Contact Form and Info */}
                <div className="flex flex-col md:flex-row justify-between items-start">
                    {/* Contact Form */}
                    <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg mb-8 md:mb-0">
                        <h2 className="text-2xl font-bold text-navy mb-4">Send Us a Message</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                                <input type="text" id="name" name="name" placeholder="Your Name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                                <input type="email" id="email" name="email" placeholder="Your Email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                                <textarea id="message" name="message" rows="4" placeholder="Your Message" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-pink-600 text-white font-bold py-2 px-4 rounded-md hover:bg-pink-700">Send Message</button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="md:w-1/2 md:ml-8">
                        <div className="mb-8">
                            <FaPhoneAlt size={24} className="text-maroon inline-block mr-4" />
                            <span className="text-gray-700">+1 (555) 123-4567</span>
                        </div>
                        <div className="mb-8">
                            <FaEnvelope size={24} className="text-maroon inline-block mr-4" />
                            <span className="text-gray-700">info@matrimonywebsite.com</span>
                        </div>
                        <div className="mb-8">
                            <FaMapMarkerAlt size={24} className="text-maroon inline-block mr-4" />
                            <span className="text-gray-700">123 Matrimony St, Love City, Country</span>
                        </div>
                        {/* <div>
                            <img src="path_to_map_image.jpg" alt="Map" className="rounded-lg shadow-lg w-full h-auto" />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
