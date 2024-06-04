/* eslint-disable react/no-unescaped-entities */

import { Button } from "flowbite-react";
import useAuth from "../../../../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EditBiodata = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()

    const {mutateAsync} = useMutation({
      mutationFn: async (biodata) => {
        const {data} = await axiosSecure.post('/biodata', biodata)
        return data
      },
      onSuccess:()=>{
        console.log('biodata added to the data base successfully!');
        toast.success('Biodata Created Successfully!');
        navigate('/biodatas')
      }
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const biodataType = form.biodataType.value;
        const name = form.name.value;
        const profileImage = form.profileImage.value;
        const dateOfBirth = form.dateOfBirth.value;
        const height = form.height.value;
        const weight = form.weight.value;
        const age = form.age.value;
        const occupation = form.occupation.value;
        const race = form.race.value;
        const fathersName = form.fathersName.value;
        const mothersName = form.mothersName.value;
        const permanentDivision = form.permanentDivision.value;
        const presentDivision = form.presentDivision.value;
        const expectedPartnerAge = form.expectedPartnerAge.value;
        const expectedPartnerHeightFrom = form.expectedPartnerHeightFrom.value;
        const expectedPartnerHeightTo = form.expectedPartnerHeightTo.value;
        const expectedPartnerWeightFrom = form.expectedPartnerWeightFrom.value;
        const expectedPartnerWeightTo = form.expectedPartnerWeightTo.value;
        const contactEmail = form.contactEmail.value;
        const mobileNumber = form.mobileNumber.value;
        
        const expectedPartner = {
          age: expectedPartnerAge,
          height: `${expectedPartnerHeightFrom}-${expectedPartnerHeightTo}`,
          weight: `${expectedPartnerWeightFrom}-${expectedPartnerWeightTo}`
        }
        // console.log(biodataType, name, profileImage, dateOfBirth, height, weight,age, occupation, race, fathersName, mothersName, permanentDivision, presentDivision, expectedPartner, contactEmail, mobileNumber);
        
        try{
          const biodata = {
            biodataType, name, profileImage, dateOfBirth, height, weight,age, occupation, race, fathersName, mothersName, permanentDivision, presentDivision, expectedPartner, contactEmail, mobileNumber
          }
          // post request to server
          await mutateAsync(biodata)
        }catch(err){
          console.log(err);
          toast.error(err.message)
        }

      }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            {/* biodataType / gender */}
            <div className="mb-4">
                    <label htmlFor="biodataType" className="block text-gray-700 font-bold mb-2">Biodata Type</label>
                    <select required name="biodataType" id="biodataType" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400">
                        <option value="">Default</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                {/* name */}
            <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                    <input required type="text" id='name' name='name' placeholder="Enter your name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"/>
                </div>
                {/* profileImage */}
                <div className="mb-4">
                    <label htmlFor="profileImage" className="block text-gray-700 font-bold mb-2">Profile Image</label>
                    <input required type="text" id='profileImage' name='profileImage' placeholder="Image URL" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"/>
                </div>
                {/* date of birth */}
                <div className="mb-4">
                    <label htmlFor="dateOfBirth" className="block text-gray-700 font-bold mb-2">Date Of Birth</label>
                    <input required type="date" id='dateOfBirth' name='dateOfBirth' placeholder="Select your date of birth" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"/>
                </div>
                {/* height & weight */}
                <div className="mb-4 flex gap-6">
                    {/* for height */}
                    <div className="w-full">
                    <label htmlFor="height" className="block text-gray-700 font-bold mb-2">
    Height
  </label>
  <select required
    name="height"
    id="height"
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
  >
    <option value="">Select Height</option>
    {Array.from({ length: 61 }, (_, index) => (
      <option key={index} value={140 + index}>
        {140 + index} cm
      </option>
    ))}
  </select>
                    </div>
                    {/* for weight */}
                    <div className="w-full">
                    <label htmlFor="weight" className="block text-gray-700 font-bold mb-2">
    Weight
  </label>
  <select required
    name="weight"
    id="weight"
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
  >
    <option value="">Select Weight</option>
    {Array.from({ length: 81 }, (_, index) => (
      <option key={index} value={40 + index}>
        {40 + index} kg
      </option>
    ))}
  </select>
                    </div>
                </div>
                {/* age */}
                <div className="mb-4">
                    <label htmlFor="age" className="block text-gray-700 font-bold mb-2">Age</label>
                    <input required type="text" id='age' name='age' placeholder="Enter your age" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"/>
                </div>
                {/* occupation */}
                <div className="mb-4">
                    <label htmlFor="occupation" className="block text-gray-700 font-bold mb-2">Occupation</label>
                    <select required name="occupation" id="occupation" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400">
                        <option value="">Default</option>
                        <option value="Student">Student</option>
                        <option value="Job Holder">Job Holder</option>
                    </select>
                </div>
                {/* race */}
                <div className="mb-4">
                    <label htmlFor="race" className="block text-gray-700 font-bold mb-2">Race</label>
                    <select required name="race" id="race" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400">
                        <option value="">Default</option>
                        <option value="Asian White">Asian White</option>
                        <option value="Asian Brown">Asian Brown</option>
                        <option value="Asian Black">Asian Black</option>
                    </select>
                </div>
                {/* father's name & mother's name */}
                <div className="flex gap-6 mb-4">
                    {/* father */}
                    <div className="w-full">
                    <label htmlFor="fathersName" className="block text-gray-700 font-bold mb-2">Father's Name</label>
                    <input required type="text" id='fathersName' name='fathersName' placeholder="Enter your father's name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"/>
                </div>
                {/* mother */}
                <div className="w-full">
                    <label htmlFor="mothersName" className="block text-gray-700 font-bold mb-2">Mother's Name</label>
                    <input required type="text" id='mothersName' name='mothersName' placeholder="Enter your mother's name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"/>
                </div>
                </div>
                {/* permanentDivision */}
                <div className="mb-4">
                    <label htmlFor="permanentDivision" className="block text-gray-700 font-bold mb-2">Permanent Division</label>
                    <select required name="permanentDivision" id="permanentDivision" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400">
                        <option value="">Default</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chattagram">Chattagram</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Barisal">Barisal</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Mymensingh">Mymensingh</option>
                        <option value="Sylhet">Sylhet</option>
                    </select>
                </div>
                {/* presentDivision */}
                <div className="mb-4">
                    <label htmlFor="presentDivision" className="block text-gray-700 font-bold mb-2">Present Division</label>
                    <select required name="presentDivision" id="presentDivision" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400">
                        <option value="">Default</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chattagram">Chattagram</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Barisal">Barisal</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Mymensingh">Mymensingh</option>
                        <option value="Sylhet">Sylhet</option>
                    </select>
                </div>
                {/* expectedPartnerAge */}
                <div className="mb-4">
                    <label htmlFor="expectedPartnerAge" className="block text-gray-700 font-bold mb-2">Expected Partner Age</label>
                    <input required type="text" id='expectedPartnerAge' name='expectedPartnerAge' placeholder="Enter your expected partner age" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"/>
                </div>
                {/* expectedPartnerHeight */}
                <div className="mb-4">
                    <label htmlFor="expectedPartnerHeight" className="block text-gray-700 font-bold mb-2">Expected Partner Height</label>
                    <div className="flex gap-6">
                        {/* expectedPartnerHeightFrom */}
                    <div className="w-full">
                    <span>from</span>
                    <select required
    name="expectedPartnerHeightFrom"
    id="expectedPartnerHeightFrom"
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
  >
    <option value="">Select Height</option>
    {Array.from({ length: 61 }, (_, index) => (
      <option key={index} value={140 + index}>
        {140 + index} cm
      </option>
    ))}
  </select>
                    </div>
  {/* expectedPartnerHeightTo */}
  <div className="w-full">
  <span>to</span>
  <select required
    name="expectedPartnerHeightTo"
    id="expectedPartnerHeightTo"
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
  >
    <option value="">Select Height</option>
    {Array.from({ length: 61 }, (_, index) => (
      <option key={index} value={140 + index}>
        {140 + index} cm
      </option>
    ))}
  </select>
  </div>
                    </div>
                </div>
                {/* expectedPartnerWeight */}
                <div className="mb-4">
                    <label htmlFor="expectedPartnerWeight" className="block text-gray-700 font-bold mb-2">Expected Partner Weight</label>
                    <div className="flex gap-6">
                        {/* expectedPartnerWeightFrom */}
                    <div className="w-full">
                    <span>from</span>
                    <select required
    name="expectedPartnerWeightFrom"
    id="expectedPartnerWeightFrom"
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
  >
    <option value="">Select Weight</option>
    {Array.from({ length: 81 }, (_, index) => (
      <option key={index} value={40 + index}>
        {40 + index} kg
      </option>
    ))}
  </select>
                    </div>
  {/* expectedPartnerWeightTo */}
  <div className="w-full">
  <span>to</span>
  <select required
    name="expectedPartnerWeightTo"
    id="expectedPartnerWeightTo"
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
  >
   <option value="">Select Weight</option>
    {Array.from({ length: 81 }, (_, index) => (
      <option key={index} value={40 + index}>
        {40 + index} kg
      </option>
    ))}
  </select>
  </div>
                    </div>
                </div>
                {/* contactEmail */}
                    <div className="mb-4">
                    <label htmlFor="contactEmail" className="block text-gray-700 font-bold mb-2">Contact Email</label>
                    <input readOnly value={user?.email} required type="text" id='contactEmail' name='contactEmail' placeholder="Enter your email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"/>
                </div>
                {/* mobileNumber */}
                <div className="mb-4">
                    <label htmlFor="mobileNumber" className="block text-gray-700 font-bold mb-2">Mobile Number</label>
                    <input required type="text" id='mobileNumber' name='mobileNumber' placeholder="Enter your mobile number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"/>
                </div>

                <Button className="w-full" type="submit" gradientDuoTone='greenToBlue'>Save And Publish Now</Button>
            </form>
        </div>
    );
};

export default EditBiodata;