import { Button } from "flowbite-react";

const BiodataFilterForm = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold text-center mb-6">Filter according to your choice!</h2>
            <form>
            {/* biodata type */}
            <div className="mb-4">
            <label htmlFor="biodataType" className="block text-gray-700 font-bold mb-2">Biodata Type</label>
            <select name="biodataType" id="biodataType" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400">
                <option value="">Default</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
        </div>
            
            {/* age range */}
            <div className="flex gap-2">
            <div className="mb-4">
            <label htmlFor="ageFrom" className="block text-gray-700 font-bold mb-2">Age From</label>
            <input id="ageFrom" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="From" />
        </div>
        <div className="mb-4">
            <label htmlFor="ageTo" className="block text-gray-700 font-bold mb-2">Age To</label>
            <input id="ageTo" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="To" />
        </div>
            </div>

            {/* filter by division */}
            <div className="mb-4">
            <label htmlFor="division" className="block text-gray-700 font-bold mb-2">Choose A Division</label>
            <select name="division" id="division" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400">
                <option value="">Default</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chattagram">Chattagram</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Barisal">Barisal</option>
                <option value="Khulna">Khulna</option>
                <option value="Maymansign">Maymansign</option>
                <option value="Sylhet">Sylhet</option>
            </select>
        </div>

        <div className="mb-4">
            <Button type="submit" outline gradientDuoTone='greenToBlue' className="w-full">Filter</Button>
        </div>
            </form>
        </div>
    );
};

export default BiodataFilterForm;