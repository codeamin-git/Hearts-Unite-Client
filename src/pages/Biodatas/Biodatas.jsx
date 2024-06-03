import {useQuery} from '@tanstack/react-query'
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import LoadingSpinner from '../../components/Shared/LoadingSpinner';
import BiodataDetails from '../BiodataDetails/BiodataDetails';
const Biodatas = () => {
    const axiosSecure = useAxiosSecure()

    const {data: biodatas=[], isLoading} = useQuery({
        queryKey: ['biodatas'],
        queryFn: async () => {
            const {data} = await axiosSecure.get('/biodatas')
            return data
        }
    })

    if(isLoading) return <LoadingSpinner />
    return (
        <div className="flex flex-col md:flex-row md:p-4">
            <div className="md:w-4/12">
           
            </div>

            {/* all biodatas div */}
            <div className="flex-1 md:ml-8">
                {
                    biodatas.map(biodata => <BiodataDetails key={biodata._id} biodata={biodata}></BiodataDetails>)
                }
            </div>
        </div>
    );
};

export default Biodatas;