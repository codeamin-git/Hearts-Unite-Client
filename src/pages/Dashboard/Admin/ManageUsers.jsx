import { useQuery } from "@tanstack/react-query";
import { Button, Modal, Table } from "flowbite-react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useState } from "react";
const ManageUsers = () => {
    const axiosSecure = useAxiosSecure()
    const [openModal, setOpenModal] = useState(false);
    const [modalAction, setModalAction] = useState('')

    // fetch users from usersCollection db
    const {data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const {data} = await axiosSecure.get('/users')
            return data
        }
    })

    const adminModalHandler = () => {
        console.log('Changing status to admin');
    }
    const premiumModalHandler = () => {
        console.log('Changing status premium');
    }
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
                    <Button gradientMonochrome="failure" className="p-0" onClick={() => 
                        {
                            setOpenModal(true);
                            setModalAction('admin')
                        }
                    }
                    >Make Admin</Button>
                </Table.Cell>
                <Table.Cell>
                <Button gradientMonochrome="lime" className="p-0" onClick={()=>{
                    setOpenModal(true);
                    setModalAction('premium')
                }}>Make Premium</Button>
                </Table.Cell>
              </Table.Row>)
          }
        </Table.Body>
      </Table>

      {/* modal for confirmation */}
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure to make your biodata premium?
            </h3>
            <div className="flex justify-center gap-4">
              <Button outline gradientDuoTone='redToYellow' onClick={() => {
                setOpenModal(false);
                if(modalAction === 'admin'){
                    adminModalHandler();
                }
                else if (modalAction === 'premium'){
                    premiumModalHandler()
                }
              }}>
                {"Yes, I'm sure"}
              </Button>
              <Button outline gradientDuoTone='pinkToOrange' onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
    );
};

export default ManageUsers;