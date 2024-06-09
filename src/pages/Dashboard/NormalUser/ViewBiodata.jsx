/* eslint-disable react/no-unescaped-entities */
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import { Button, Card, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import toast from 'react-hot-toast'

const ViewBiodata = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const [openModal, setOpenModal] = useState(false);

    // fetching biodatas of one user by email
    const { data: biodatas = [], isLoading } = useQuery({
        queryKey: ['viewBiodata', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/viewBiodata/${user?.email}`);
            return data;
        }
    });

    // biodata premium request in modal
    const makePremium = async (id) => {
      try{
        const {data} = await axiosSecure.patch(`/biodata/${id}`)
      console.log(data);
      if(data.modifiedCount > 0){
        toast.success('Requested to make this biodata to premium!')
      }
      if(data.modifiedCount === 0){
        toast.success('Wait for admin approval.')
      }
      }catch(err){
        console.log(err);
      }
    }

    if(isLoading) return <LoadingSpinner></LoadingSpinner>

    return (
        <div>
            <h2 className="text-3xl font-semibold mb-6">Welcome to your biodata section!</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {
                biodatas.map(biodata => <Card key={biodata._id} className="max-w-sm">
                <div className="flex flex-col pb-4 items-center">
                  <img
                    src={biodata?.profileImage}
                    className="mb-3 rounded-full shadow-lg h-24 w-24"
                  />

                 <div>
                 <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white"><span className="font-bold">Biodata Id:</span> {biodata?.biodataId}</h5>
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white"><span className="font-bold">Biodata Type:</span> {biodata?.biodataType}</h5>
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white"><span className="font-bold">Name:</span> {biodata?.name}</h5>
                  <p className=" text-gray-900 dark:text-gray-400"><span className="font-bold">Date Of Birth:</span> {biodata?.dateOfBirth}</p>
                  <p className=" text-gray-900 dark:text-gray-400"><span className="font-bold">Height:</span> {biodata?.height}</p>
                  <p className=" text-gray-900 dark:text-gray-400"><span className="font-bold">Weight:</span> {biodata?.weight}</p>
                  <p className=" text-gray-900 dark:text-gray-400"><span className="font-bold">Age:</span> {biodata?.age}</p>
                  <p className=" text-gray-900 dark:text-gray-400"><span className="font-bold">Occupation:</span> {biodata?.occupation}</p>
                  <p className=" text-gray-900 dark:text-gray-400"><span className="font-bold">Race:</span> {biodata?.race}</p>
                  <p className=" text-gray-900 dark:text-gray-400"><span className="font-bold">Father's Name:</span> {biodata?.fathersName}</p>
                  <p className=" text-gray-900 dark:text-gray-400"><span className="font-bold">Mother's Name:</span> {biodata?.mothersName}</p>
                  <p className="text-gray-900 dark:text-gray-400"><span className="font-bold">Permanent Address:</span> {biodata?.permanentDivision}</p>
                  <p className="text-gray-900 dark:text-gray-400"><span className="font-bold">Present Address:</span> {biodata?.presentDivision}</p>
                  <p className="text-gray-900 dark:text-gray-400"><span className="font-bold">Expected Partner's Age:</span> {biodata?.expectedPartner?.age}</p>
                  <p className="text-gray-900 dark:text-gray-400"><span className="font-bold">Expected Partner's Height:</span> {biodata?.expectedPartner?.height}</p>
                  <p className="text-gray-900 dark:text-gray-400"><span className="font-bold">Expected Partner's Weight:</span> {biodata?.expectedPartner?.weight}</p>

                  {/* contact email & mobile number for premium member */}
                  <span className="text-gray-900 dark:text-gray-400"><span className="font-bold">Contact Email:</span> {biodata?.contactEmail}</span>
                  <span className="text-gray-900 dark:text-gray-400"><span className="font-bold">Phone Number:</span> {biodata?.mobileNumber}</span>
                 </div>

                  <div className="mt-4 flex space-x-3 lg:mt-6">

                  <Button outline gradientDuoTone="purpleToPink" onClick={() => setOpenModal(true)}>Make Biodata To Premium</Button>
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
                makePremium(biodata?._id)
              }
              }>
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
                </div>
              </Card>)
            }
             
        </div>
        </div>
    );
};

export default ViewBiodata;