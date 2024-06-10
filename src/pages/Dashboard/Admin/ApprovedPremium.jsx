import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import toast from "react-hot-toast";
import { Button, Table } from "flowbite-react";
import { GiCheckMark } from "react-icons/gi";

const ApprovedPremium = () => {
    const axiosSecure = useAxiosSecure()
    const {data: biodatas = [], refetch, isLoading} = useQuery({
        queryKey: ['makePremium'],
        queryFn: async () => {
            const {data} = await axiosSecure.get('/allPremiumReq')
            // const premiumReq = data.filter((req)=> req.biodataStatus === 'Requested')
            // console.log(premiumReq);
            // return premiumReq;
            return data
        }
    })

    const handleApprove = async id =>{
        try{
            const {data} = await axiosSecure.patch(`/makePremium/${id}`)
            console.log(data);
            if(data.modifiedCount > 0){
                toast.success('Biodata made premium successfully!')
                refetch()
            }
        }catch(err){
            console.log(err);
        }
        console.log(id);
    }
    if(isLoading) return <LoadingSpinner />

    return (
        <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Biodata Id</Table.HeadCell>
          <Table.HeadCell>Make Premium</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {
            biodatas?.map(biodata => <Table.Row key={biodata._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {biodata?.name}
                </Table.Cell>
                <Table.Cell>{biodata?.contactEmail}</Table.Cell>
                <Table.Cell>
                    {biodata?.biodataId}
                </Table.Cell>
                <Table.Cell>
                <Button gradientDuoTone="purpleToPink" className="p-0 flex items-center" onClick={() =>handleApprove(biodata?._id)
                    }
                    ><GiCheckMark className="text-xl mr-2"/> Approve</Button>
                </Table.Cell>
              </Table.Row>
            )
          }
        </Table.Body>
      </Table>

      
    </div>
    );
};

export default ApprovedPremium;