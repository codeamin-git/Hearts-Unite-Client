import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import { Button, Table } from "flowbite-react";
import { IoTrashBinOutline } from "react-icons/io5";
import useAuth from "../../../../hooks/useAuth";

const MyContactRequest = () => {
    const axiosSecure = useAxiosSecure()
    const {user, loading} = useAuth()
    const {data: biodatas = [], refetch, isLoading} = useQuery({
        queryKey: ['myContactReqs', user?.email],
        queryFn: async () => {
            const {data} = await axiosSecure(`/contactReqs/${user?.email}`)
            console.log(data);
            return data
        }
    })

    const handleDelete = async id =>{
        try{
            const {data} = await axiosSecure.delete(`/contactReqs/${id}`)
            console.log(data);
            if(data.deletedCount > 0){
                toast.success('Biodata Deleted Successfully from My Contact Requests!')
                refetch()
            }
        }catch(err){
            console.log(err);
        }
    }
    if(isLoading || loading) return <LoadingSpinner />
    return (
        <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Biodata Id</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Mobile No</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
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
                    {biodata?.requestStatus}
                </Table.Cell>
                <Table.Cell>
                {biodata?.requestStatus === 'Approved' ? biodata?.mobileNumber : 'Pending'}
                </Table.Cell>
                <Table.Cell>
                {biodata?.requestStatus === 'Approved' ? biodata?.contactEmail : 'Pending'}
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

export default MyContactRequest;