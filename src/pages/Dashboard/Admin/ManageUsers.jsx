import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Table } from "flowbite-react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import toast from "react-hot-toast";
import useAuth from "../../../../hooks/useAuth";

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {user: loggedInUser} = useAuth()

    // fetch users from usersCollection db
    const {data: users = [], isLoading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const {data} = await axiosSecure.get('/users')
            return data
        }
    })

    const {mutateAsync} = useMutation({
      mutationFn: async ({email, user}) =>{
        const {data} = await axiosSecure.patch(`/users/update/${email}`, user)
        return data
      },
      onSuccess: (data) => {
        toast.success(`User role updated!`)
        refetch()
        console.log(data);
      }
     })

    const adminModalHandler = async (email) => {
        if(loggedInUser.email === email){
          return toast.error('Action Not Allowed!')
        }
        console.log('Changing status to admin');
        const user = {
          role: 'admin',
        }
        try{
          const data = await mutateAsync({email, user})
          console.log(data);
        }catch(err){
          console.log(err);
        }
        console.log(email);
    }
    const premiumModalHandler = async (email) => {
      if(loggedInUser.email === email){
        return toast.error('Action Not Allowed!')
      }
        console.log('Changing status premium');
        const user = {
          role: 'premium member',
        }
        try{
          const data = await mutateAsync({email, user})
          console.log(data);
        }catch(err){
          console.log(err);
        }
    }

    if(isLoading) return <LoadingSpinner></LoadingSpinner>

    return (
        <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>User Name</Table.HeadCell>
          <Table.HeadCell>User Email</Table.HeadCell>
          <Table.HeadCell>Change Status</Table.HeadCell>
          <Table.HeadCell>Change Status</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {
            users.map(user => <Table.Row key={user._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {user?.username}
                </Table.Cell>
                <Table.Cell>{user?.email}</Table.Cell>
                <Table.Cell>
                    <Button gradientMonochrome="failure" className="p-0" onClick={() =>adminModalHandler(user?.email)
                    }
                    >Make Admin</Button>
                </Table.Cell>
                <Table.Cell>
                <Button gradientMonochrome="lime" className="p-0" onClick={()=>premiumModalHandler(user?.email)}>Make Premium</Button>
                </Table.Cell>
              </Table.Row>
            )
          }
        </Table.Body>
      </Table>

      
    </div>
    );
};

export default ManageUsers;