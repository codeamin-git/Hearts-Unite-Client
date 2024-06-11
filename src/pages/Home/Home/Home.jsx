import {Helmet} from 'react-helmet-async'
import Banner from '../Banner/Banner';
import PremiumMember from '../PremiumMember/PremiumMember';
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

        </div>
    );
};

export default Home;