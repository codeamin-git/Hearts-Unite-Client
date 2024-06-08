import { useQuery } from "@tanstack/react-query";
import { Button, Table } from "flowbite-react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import { IoTrashBinOutline } from "react-icons/io5";
import toast from "react-hot-toast";

const FavouritesBiodata = () => {
    const axiosSecure = useAxiosSecure()
    const {data: biodatas = [], refetch, isLoading} = useQuery({
        queryKey: ['favBiodatas'],
        queryFn: async () => {
            const {data} = await axiosSecure('/favBiodatas')
            return data
        }
    })

    const handleDelete = async id =>{
        try{
            const {data} = await axiosSecure.delete(`/favBiodata/${id}`)
            console.log(data);
            if(data.deletedCount > 0){
                toast.success('Biodata Deleted Successfully from Favorite Biodatas!')
                refetch()
            }
        }catch(err){
            console.log(err);
        }
    }
    if(isLoading) return <LoadingSpinner />
    return (
        <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Biodata Id</Table.HeadCell>
          <Table.HeadCell>Permanent Address</Table.HeadCell>
          <Table.HeadCell>Occupation</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {
            biodatas.map(biodata => <Table.Row key={biodata._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {biodata?.name}
                </Table.Cell>
                <Table.Cell>{biodata?.biodataId}</Table.Cell>
                <Table.Cell>
                    {biodata?.permanentAddress}
                </Table.Cell>
                <Table.Cell>
                {biodata?.occupation}
                </Table.Cell>
                <Table.Cell>
                <Button gradientMonochrome="failure" className="p-0 flex items-center" onClick={() =>handleDelete(biodata?._id)
                    }
                    ><IoTrashBinOutline className="text-xl mr-2"/> Delete</Button>
                </Table.Cell>
              </Table.Row>
            )
          }
        </Table.Body>
      </Table>

      
    </div>
    );
};

export default FavouritesBiodata;