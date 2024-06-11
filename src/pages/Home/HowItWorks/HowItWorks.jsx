import './HowItWorks.css'
const HowItWorks = () => {
    return (
        <div className="flex flex-col items-center mt-6">
            <h2 className='text-4xl font-medium my-6'>~How It Works~</h2>
            {/* First step */}
            <div className="flex gap-8 max-w-md">
                {/* Left Side - Image */}
                <div className="w-1/2 p-4">
                    <img src="https://i.ibb.co/CQpLsyD/rings.png" alt="Step 1" className="w-28" />
                </div>
                {/* Vertical Divider */}
                <div className="relative w-px bg-maroon h-96">
                <div className='absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-maroon rounded-full border-4'>
                </div>
                </div>
                {/* Right Side - Text */}
                <div className="w-1/2 p-4">
                    <h3 className="text-3xl font-medium">Register</h3>
                    <p className='text-pink-500 mb-2 font-medium'>Hurry Up!</p>
                    <p className="text-gray-600">Join our community by creating an account. Fill in your details, upload a photo, and complete your profile. Registration is quick and easy!</p>
                </div>
            </div>
            
            {/* Second step */}
            <div className="flex gap-8 max-w-md">
                {/* Left Side - Image */}
                <div className="w-1/2 p-4">
                    <h3 className="text-3xl font-medium">Find Your Match</h3>
                    <p className='text-pink-500 mb-2 font-medium'>Hurry Up!</p>
                    <p className="text-gray-600">Browse through profiles of eligible individuals. Use our advanced search filters to narrow down your preferences. Discover potential matches based on compatibility, interests, and values</p>
                </div>
                {/* Vertical Divider */}
                <div className="relative w-px bg-maroon h-96">
                <div className='absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-maroon rounded-full border-4'>
                </div>
                </div>
                {/* Right Side - Text */}
                <div className="w-1/2 p-4">
                    <img src="https://i.ibb.co/6012hmv/wedding-2.png" alt="Step 1" className="w-28" />
                </div>
            </div>
            
            {/* Third step */}
            <div className="flex gap-8 max-w-md">
                {/* Left Side - Image */}
                <div className="w-1/2 p-4">
                    <img src="https://i.ibb.co/k82KYBZ/love-birds.png" alt="Step 1" className="w-28" />
                </div>
                {/* Vertical Divider */}
                <div className="relative w-px bg-maroon h-96">
                <div className='absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-maroon rounded-full border-4'>
                </div>
                </div>
                {/* Right Side - Text */}
                <div className="w-1/2 p-4">
                    <h3 className="text-3xl font-medium">Send Interest</h3>
                    <p className='text-pink-500 mb-2 font-semibold'>Hurry Up!</p>
                    <p className="text-gray-600">Express your interest in someone you like. Send a ‘like’ or a personalized message to initiate a conversation. Show that you’re interested in getting to know them better.</p>
                </div>
            </div>

            {/* Fourth step */}
            <div className="flex gap-8 max-w-md">
                {/* Left Side - Image */}
                <div className="w-1/2 p-4">
                    <h3 className="text-3xl font-medium">Get Profile Information</h3>
                    <p className='text-pink-500 mb-2 font-medium'>Hurry Up!</p>
                    <p className="text-gray-600">Learn more about your potential match. View their detailed profile, including personal information, family background, education, career, and lifestyle.</p>
                </div>
                {/* Vertical Divider */}
                <div className="relative w-px bg-maroon h-96">
                <div className='absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-maroon rounded-full border-4'>
                </div>
                </div>
                {/* Right Side - Text */}
                <div className="w-1/2 p-4">
                    <img src="https://i.ibb.co/br3GcPz/network.png" alt="Step 1" className="w-28" />
                </div>
            </div>

            {/* Fifth step */}
            <div className="flex gap-8 max-w-md">
                {/* Left Side - Image */}
                <div className="w-1/2 p-4">
                    <img src="https://i.ibb.co/9yzQWzP/chat.png" alt="Step 1" className="w-28" />
                </div>
                {/* Vertical Divider */}
                <div className="relative w-px bg-maroon h-96">
                <div className='absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-maroon rounded-full border-4'>
                </div>
                </div>
                {/* Right Side - Text */}
                <div className="w-1/2 p-4">
                    <h3 className="text-3xl font-medium">Start Meetups</h3>
                    <p className='text-pink-500 mb-2 font-semibold'>Hurry Up!</p>
                    <p className="text-gray-600">Take the next step by arranging meetups. Chat online, exchange messages, or schedule video calls. Get to know each other better and explore the possibility of a meaningful relationship.</p>
                </div>
            </div>

            {/* Sixth step */}
            <div className="flex gap-8 max-w-md">
                {/* Left Side - Image */}
                <div className="w-1/2 p-4">
                    <h3 className="text-3xl font-medium">Getting Married</h3>
                    <p className='text-pink-500 mb-2 font-medium'>Hurry Up!</p>
                    <p className="text-gray-600">Congratulations! You’ve found your perfect match. Plan your wedding, celebrate with family and friends, and embark on a beautiful journey together. Wishing you a lifetime of love and happiness!</p>
                </div>
                {/* Vertical Divider */}
                <div className="relative w-px bg-maroon h-96">
                <div className='absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-maroon rounded-full border-4'>
                </div>
                </div>
                {/* Right Side - Text */}
                <div className="w-1/2 p-4">
                    <img src="https://i.ibb.co/GWJzBV2/wedding-couple.png" alt="Step 1" className="w-28" />
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;