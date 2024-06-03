import {useQuery} from '@tanstack/react-query'
import axios from 'axios';
const Biodatas = () => {
    const biodatas = useQuery({
        queryKey: ['biodatas'],
        queryFn: axios.get()
    })

    return (
        <div className="flex flex-col md:flex-row md:p-4">
            <div className="md:w-4/12">
           
            </div>

            {/* all biodatas div */}
            <div className="flex-1 md:ml-8">
                <p>all bio data</p>
            </div>
        </div>
    );
};

export default Biodatas;