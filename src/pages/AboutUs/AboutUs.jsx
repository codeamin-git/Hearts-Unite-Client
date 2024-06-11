import { FaHeart, FaUsers, FaShieldAlt, FaSmile } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <div className="bg- py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-navy">About Us</h1>
                    <p className="mt-4 text-gray-600">Connecting hearts and building futures.</p>
                </div>

                {/* Mission Section */}
                <div className="flex flex-col md:flex-row items-center mb-12">
                    <div className="md:w-1/2 p-4">
                        <img src="https://i.ibb.co/swyGkZ9/about-us.jpg" alt="Mission" className="rounded-lg shadow-lg w-full h-auto" />
                    </div>
                    <div className="md:w-1/2 p-4 text-center md:text-left">
                        <h2 className="text-2xl font-bold text-maroon">Our Mission</h2>
                        <p className="mt-4 text-gray-600">At Matrimony Website, our mission is to bring people together and help them find their perfect match. We believe in the power of love and the importance of a supportive and nurturing relationship.</p>
                    </div>
                </div>

                {/* Values Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-lg">
                        <FaHeart size={40} className="text-pink-600 mr-4" />
                        <div>
                            <h3 className="text-xl font-bold text-maroon">Love</h3>
                            <p className="mt-2 text-gray-600">We are committed to fostering genuine connections and love stories that last a lifetime.</p>
                        </div>
                    </div>
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-lg">
                        <FaUsers size={40} className="text-pink-600 mr-4" />
                        <div>
                            <h3 className="text-xl font-bold text-maroon">Community</h3>
                            <p className="mt-2 text-gray-600">Building a supportive community where individuals can connect and share their journeys.</p>
                        </div>
                    </div>
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-lg">
                        <FaShieldAlt size={40} className="text-pink-600 mr-4" />
                        <div>
                            <h3 className="text-xl font-bold text-maroon">Safety</h3>
                            <p className="mt-2 text-gray-600">Ensuring a safe and secure platform for all our members to interact with confidence.</p>
                        </div>
                    </div>
                    <div className="flex items-center p-4 bg-white rounded-lg shadow-lg">
                        <FaSmile size={40} className="text-pink-600 mr-4" />
                        <div>
                            <h3 className="text-xl font-bold text-maroon">Happiness</h3>
                            <p className="mt-2 text-gray-600">Our goal is to bring happiness and joy by helping people find their life partners.</p>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold text-maroon">Meet Our Team</h2>
                    <p className="mt-4 text-gray-600">A dedicated team working tirelessly to bring you the best matchmaking experience.</p>
                </div>
                <div className="flex flex-wrap justify-center items-center space-x-6">
                    <div className="w-40 h-40 mb-6">
                        <img src="https://i.ibb.co/vVD6whT/LRM-EXPORT-239614077798459-20190925-062020067.jpg" alt="Team Member 1" className="rounded-full w-full h-full object-cover shadow-lg" />
                        <h3 className="mt-4 text-navy font-bold">Member 1</h3>
                        <p className="text-gray-600"><span className='font-bold text-navy'>Position:</span> Founder & CEO</p>
                    </div>
                    {/* Add more team members as needed */}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
