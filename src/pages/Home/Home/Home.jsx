import {Helmet} from 'react-helmet-async'
import Banner from '../Banner/Banner';
import PremiumMember from '../PremiumMember/PremiumMember';
import HowItWorks from '../HowItWorks/HowItWorks';
const Home = () => {
    return (
        <div>
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
            <div className='flex items-center justify-center w-full bg-ivory'>
            <HowItWorks></HowItWorks>
            </div>

        </div>
    );
};

export default Home;