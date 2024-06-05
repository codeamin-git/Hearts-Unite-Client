import {Helmet} from 'react-helmet-async'
import Banner from '../Banner/Banner';
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>HeartsUnite | Home</title>
            </Helmet>
            <div className='h-96'>
            <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;