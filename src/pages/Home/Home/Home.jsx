import {Helmet} from 'react-helmet-async'
import Banner from '../Banner/Banner';
import PremiumMember from '../PremiumMember/PremiumMember';
import HowItWorks from '../HowItWorks/HowItWorks';
import SuccessCounter from '../SuccessCounter/SuccessCounter';
import MarriageStories from '../MarriageStories/MarriageStories';
const Home = () => {
    return (
        <div className='bg-ivory bg-opacity-25'>
            <Helmet>
                <title>HeartsUnite | Home</title>
            </Helmet>
            {/* banner section */}
            <div className='h-96 mb-[350px]'>
            <Banner></Banner>
            </div>
            {/* premium member section */}
            <div className='mx-auto w-full'>
            <PremiumMember></PremiumMember>
            </div>
            {/* how it works section */}
            <div className='flex items-center justify-center w-full'>
            <HowItWorks></HowItWorks>
            </div>
            {/* success counter section */}
            <div>
                <SuccessCounter></SuccessCounter>
            </div>
            {/* success stories section */}
            <div className='flex items-center justify-center'>
                <MarriageStories></MarriageStories>
            </div>

        </div>
    );
};

export default Home;