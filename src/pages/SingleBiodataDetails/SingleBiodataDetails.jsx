/* eslint-disable react/no-unescaped-entities */
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import { useParams } from "react-router-dom";
import { Button } from "flowbite-react";
import { GiLoveMystery } from "react-icons/gi";
import { TbInfoTriangle } from "react-icons/tb";

const SingleBiodataDetails = () => {
    const {id} = useParams()
    const axiosSecure = useAxiosSecure()

    const {data: biodata = {}, isLoading}= useQuery({
        queryKey: ['biodata', id],
        queryFn: async () => {
            const {data} = await axiosSecure.get(`/biodata/${id}`)
            return data
        }
    })
    if(isLoading) return <LoadingSpinner></LoadingSpinner>
    return (
        <div>
            {biodata && <div>
                
                <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-evenly">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={biodata?.profileImage} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-lg" />
		</div>

		<div className="flex flex-col justify-center items-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            {/* biodata information */}
			<div>
            <div>
            <h1 className="text-3xl font-semibold leading-none sm:text-2xl">Biodata Id: {biodata?.biodataId}
			</h1>
			<h1 className="text-3xl font-semibold leading-none sm:text-2xl">Biodata Type: {biodata?.biodataType}
			</h1>
			<h1 className="text-5xl font-bold leading-none sm:text-4xl">
				Name: {biodata?.name}
			</h1>

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
            </div>

            {/* TODO: premium user can see contactEmail and phone number here */}

			<div className="flex flex-col gap-4 mt-4">
               <Button outline gradientDuoTone='purpleToPink'>
               <GiLoveMystery  className="text-pink-400 text-2xl mr-2"/>
               Add to Favourites
               </Button>

                <Button outline gradientDuoTone='greenToBlue'>
                <TbInfoTriangle className="mr-2 text-xl text-yellow-300"/>
                    Request Contact Information
                </Button>
            </div>
            </div>
		</div>
	</div>
</section>
                
                </div>}
        </div>
    );
};

export default SingleBiodataDetails;