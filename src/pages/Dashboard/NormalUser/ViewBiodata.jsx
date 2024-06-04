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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                biodatas.map(biodata => <Card key={biodata._id} className="max-w-sm">
                <div className="flex flex-col pb-4 items-center">
                  <img
                    src={biodata?.profileImage}
                    className="mb-3 rounded-full shadow-lg h-24 w-24"
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Biodata Id: {biodata?.biodataId}</h5>
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Biodata Type: {biodata?.biodataType}</h5>
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Name: {biodata?.name}</h5>
                  <span className=" text-gray-900 dark:text-gray-400">Date Of Birth: {biodata?.dateOfBirth}</span>
                  <span className=" text-gray-900 dark:text-gray-400">Height: {biodata?.height}</span>
                  <span className=" text-gray-900 dark:text-gray-400">Weight: {biodata?.weight}</span>
                  <span className=" text-gray-900 dark:text-gray-400">Age: {biodata?.age}</span>
                  <span className=" text-gray-900 dark:text-gray-400">Occupation: {biodata?.occupation}</span>
                  <span className=" text-gray-900 dark:text-gray-400">Race: {biodata?.race}</span>
                  <span className=" text-gray-900 dark:text-gray-400">Father's Name: {biodata?.fathersName}</span>
                  <span className=" text-gray-900 dark:text-gray-400">Mother's Name: {biodata?.mothersName}</span>
                  <span className="text-gray-900 dark:text-gray-400">Permanent Address: {biodata?.permanentDivision}</span>
                  <span className="text-gray-900 dark:text-gray-400">Present Address: {biodata?.presentDivision}</span>
                  <span className="text-gray-900 dark:text-gray-400">Expected Partner's Age: {biodata?.expectedPartner?.age}</span>
                  <span className="text-gray-900 dark:text-gray-400">Expected Partner's Height: {biodata?.expectedPartner?.height}</span>
                  <span className="text-gray-900 dark:text-gray-400">Expected Partner's Weight: {biodata?.expectedPartner?.weight}</span>

                  {/* contact email & mobile number for premium member */}
                  <span className="text-gray-900 dark:text-gray-400">Contact Email: {biodata?.contactEmail}</span>
                  <span className="text-gray-900 dark:text-gray-400">Phone Number: {biodata?.mobileNumber}</span>
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