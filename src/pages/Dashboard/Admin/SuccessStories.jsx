import { Button, Modal, Table } from "flowbite-react";
import { GiGlassCelebration } from "react-icons/gi";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { BsArrowThroughHeartFill } from "react-icons/bs";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";

const SuccessStories = () => {
    const [openModal, setOpenModal] = useState(false);
    const [handleModal, setHandleModal] = useState('')
    const axiosSecure = useAxiosSecure()
    const {data: stories = [], isLoading} = useQuery({
        queryKey: ['success-stories'],
        queryFn: async()=>{
            const {data} = await axiosSecure('/success-stories')
            return data
        }
    })

    const showModal = (story) => {
        setHandleModal(story)
    }

    if(isLoading) return <LoadingSpinner />
    return (
        <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Male Biodata Id</Table.HeadCell>
          <Table.HeadCell>Female Biodata Id</Table.HeadCell>
          <Table.HeadCell>Stories</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {
            stories?.map(story => <Table.Row key={story._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-pink dark:text-white">
                {story?.selfBiodataId}
                </Table.Cell>
                <Table.Cell>{story?.partnerBiodataId}</Table.Cell>
                <Table.Cell>
                <Button gradientMonochrome='pink' className="p-0 flex items-center"  onClick={() => {
                    setOpenModal(true)
                    showModal(story?.successStory)
                }}
                    ><GiGlassCelebration className="text-xl mr-2"/> View Story
                </Button>
                </Table.Cell>
              </Table.Row>
            )
          }
        </Table.Body>
      </Table>
    {/* dynamic modal */}
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <BsArrowThroughHeartFill className="mx-auto mb-4 h-14 w-14 text-pink-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {handleModal}
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Close
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
    );
};

export default SuccessStories;