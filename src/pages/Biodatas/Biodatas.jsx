import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../components/Shared/LoadingSpinner';
import BiodataDetails from './BiodataDetails';
import BiodataFilterForm from './BiodataFilterForm';
import useAxiosCommon from '../../../hooks/useAxiosCommon';
import { Pagination } from "flowbite-react";

const Biodatas = () => {
    const axiosCommon = useAxiosCommon()

    const [filters, setFilters] = useState({
        biodataType: '',
        ageFrom: '',
        ageTo: '',
        permanentDivision: ''
    });

    const [currentPage, setCurrentPage] = useState(1);
    const biodatasPerPage = 4;

    const { data: biodataData = { biodatas: [], total: 0 }, isLoading, refetch } = useQuery({
        queryKey: ['biodatas', currentPage],
        queryFn: async () => {
            const { data } = await axiosCommon.get('/biodatas', {
                params: {
                    page: currentPage,
                    limit: biodatasPerPage
                }
            });
            return data;
        }
    });

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
        setCurrentPage(1)
        refetch()
    };

    const filteredBiodatas = biodataData.biodatas.filter(biodata => {
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

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage)
        console.log(newPage);
        refetch()
    };

    if (isLoading) return <LoadingSpinner />;

    return (
        <div>
        <div className="flex flex-col md:flex-row md:p-4">
            <div className="md:w-4/12 lg:w-3/12">
                <BiodataFilterForm onFilterChange={handleFilterChange} />
            </div>

            <div className="grid md:grid-cols-2 flex-1 md:ml-8 p-2 gap-6">
                {filteredBiodatas.map(biodata => (
                    <BiodataDetails key={biodata._id} biodata={biodata} />
                ))}
            </div>
        </div>
        {/* pagination */}
        <div className="flex overflow-x-auto sm:justify-center">
      <Pagination currentPage={currentPage} totalPages={Math.ceil(biodataData.total / biodatasPerPage)} onPageChange={handlePageChange} showIcons />
    </div>
        </div>
    );
};

export default Biodatas;
