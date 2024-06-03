import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import LoadingSpinner from '../../components/Shared/LoadingSpinner';
import BiodataDetails from './BiodataDetails';
import BiodataFilterForm from './BiodataFilterForm';

const Biodatas = () => {
    const axiosSecure = useAxiosSecure();

    const [filters, setFilters] = useState({
        biodataType: '',
        ageFrom: '',
        ageTo: '',
        permanentDivision: ''
    });

    const { data: biodatas = [], isLoading } = useQuery({
        queryKey: ['biodatas'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/biodatas');
            return data;
        }
    });

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    const filteredBiodatas = biodatas.filter(biodata => {
        const age = parseInt(biodata.age, 10);
        const ageFrom = filters.ageFrom ? parseInt(filters.ageFrom, 10) : 0;
        const ageTo = filters.ageTo ? parseInt(filters.ageTo, 10) : Infinity;

        return (
            (filters.biodataType === '' || biodata.biodataType === filters.biodataType) &&
            (filters.permanentDivision === '' || biodata.permanentDivision === filters.permanentDivision) &&
            (!filters.ageFrom || age >= ageFrom) &&
            (!filters.ageTo || age <= ageTo)
        );
    });

    if (isLoading) return <LoadingSpinner />;

    return (
        <div className="flex flex-col md:flex-row md:p-4">
            <div className="md:w-4/12 lg:w-3/12">
                <BiodataFilterForm onFilterChange={handleFilterChange} />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 flex-1 md:ml-8 p-2 gap-6">
                {filteredBiodatas.map(biodata => (
                    <BiodataDetails key={biodata._id} biodata={biodata} />
                ))}
            </div>
        </div>
    );
};

export default Biodatas;
