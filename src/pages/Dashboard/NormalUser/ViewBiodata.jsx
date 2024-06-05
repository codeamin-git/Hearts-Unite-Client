/* eslint-disable react/no-unescaped-entities */
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";

const ViewBiodata = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: biodatas = [], isLoading } = useQuery({
        queryKey: ['viewBiodata', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/viewBiodata/${user?.email}`);
            return data;
        }
    });

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
                    <Link to={`/biodata/${biodata._id}`}>
                    <Button gradientDuoTone="purpleToBlue">
                      Make Biodata to Premium
                    </Button>
                    </Link>
                  </div>
                </div>
              </Card>)
            }
             
        </div>
        </div>
    );
};

export default ViewBiodata;