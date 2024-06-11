/* eslint-disable react/no-unescaped-entities */

import { Button } from "flowbite-react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const GotMarried = () => {
    const axiosSecure = useAxiosSecure()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const selfBiodataId = form.selfBiodataId.value;
        const partnerBiodataId = form.partnerBiodataId.value;
        const image = form.image.value;
        const ratings = form.ratings.value;
        const successStory = form.successStory.value;
        // console.log(selfBiodataId, partnerBiodataId, image, ratings, successStory);
        const story = {
            selfBiodataId, partnerBiodataId, image, ratings, successStory
        }
        try{
            const {data} = await axiosSecure.post('/success-stories', story)
            console.log(data);
            if(data.insertedId){
                toast.success('Your Story Posted Successfully! Thanks for choosing us')
            }
        }catch(err){
            console.log(err);
        }
    }
    return (
        <div className="max-w-xl">
            <form onSubmit={handleSubmit}>
                {/* self biodata id */}
        <div className="mb-4">
                    <label htmlFor="selfBiodataId" className="block text-gray-700 font-bold mb-2">Your Biodata Id</label>
                    <input required type="text" id='selfBiodataId' name='selfBiodataId'
                    placeholder="Male Biodata Id"
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"/>
                </div>
                {/* partner's biodata id */}
                <div className="mb-4">
                    <label htmlFor="partnerBiodataId" className="block text-gray-700 font-bold mb-2">Partner's Biodata Id</label>
                    <input required type="text" id='partnerBiodataId' name='partnerBiodataId'
                    placeholder="Female Biodata Id"
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"/>
                </div>
                {/* couple image url */}
                <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-700 font-bold mb-2">Couple Image URL</label>
                    <input required type="text" id='image' name='image'
                    placeholder="Couple Image URL"
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"/>
                </div>
                {/* ratings */}
                <div className="mb-4">
  <label htmlFor="ratings" className="block text-gray-700 font-bold mb-2">
    Personal Ratings
  </label>
  <select
    required
    id="ratings"
    name="ratings"
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
  >
    <option value="" disabled>Rate Us Out Of 5</option>
    <option value="5">5🌟 (Excellent)</option>
    <option value="4">4🌟 (Not Bad)</option>
    <option value="3">3🌟 (Average)</option>
    <option value="2">2🌟 (Not Satisfied)</option>
    <option value="1">1🌟 (Poor)</option>
  </select>
</div>

                {/* success story */}
                <div className="mb-4">
                    <label htmlFor="successStory" className="block text-gray-700 font-bold mb-2">Personal Ratting</label>
                    <textarea name="successStory" id="successStory" placeholder="Share your valuable feelings for using our website!" rows='4' cols='50' className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400">
                    </textarea>
                </div>

                <Button type="submit" gradientMonochrome='pink'>Submit</Button>

            </form>
        </div>
    );
};

export default GotMarried;