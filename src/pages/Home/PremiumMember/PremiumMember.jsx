import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useScramble } from "use-scramble";
import { SlSymbolMale, SlSymbleFemale } from "react-icons/sl";

const PremiumMember = () => {
    const axiosSecure = useAxiosSecure()
    const [sortOrder, setSortOrder] = useState('');
    const {data: biodatas = [], isLoading} = useQuery({
        queryKey: ['allPremium'],
        queryFn: async () => {
            const {data} = await axiosSecure.get('/allPremiumMember')
            const limit = 6;
            const maxMember = data.slice(0, limit)
            return maxMember;
            }
    })

    // sorting functionality
    // Function to extract numeric age from the age string
    const extractAge = (ageString) => {
      const match = ageString.match(/(\d+)/);
      return match ? parseInt(match[0], 10) : 0;
  };

  // Function to sort biodatas based on the selected order
  const sortedBiodatas = () => {
      const sorted = [...biodatas];
      if (sortOrder === 'ascending') {
          return sorted.sort((a, b) => extractAge(a.age) - extractAge(b.age));
      }
      if (sortOrder === 'descending') {
          return sorted.sort((a, b) => extractAge(b.age) - extractAge(a.age));
      }
      return sorted;
  };

  // Handle change in select option
  const handleSortChange = (e) => {
      setSortOrder(e.target.value);
  };

  const {ref, replay} = useScramble({
    text: "Premium Member",
    speed: 0.6,
    tick: 1,
    step: 1,
    scramble: 10,
    seed: 0,
  })

  useEffect(() => {
    // Autoplay after few seconds
    const autoplayTimeout = setTimeout(() => {
      replay();
    }, 4000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(autoplayTimeout);
  }, []);

    if(isLoading) return <LoadingSpinner />
    return (
        <div>
          {/* premium section heading */}
          <div className="mb-4 flex justify-between">
            <div>
                <p className="text-3xl font-medium">These are some of out <span ref={ref} onMouseOver={replay} onMouseEnter={replay} className="text-pink-400 font-bold text-4xl"></span> <br /> You can have a look!</p>
            </div>
                <div>
                <label htmlFor="sortOrder" className="block text-gray-700 font-bold mb-2">
                    Sort by Age
                </label>
                <select
                    id="sortOrder"
                    name="sortOrder"
                    value={sortOrder}
                    onChange={handleSortChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                >
                    <option value="">Default</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
                </div>
            </div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    sortedBiodatas().map(biodata => 
                      <div key={biodata?._id} className="max-w-md shadow-lg dark:bg-gray-50 dark:text-gray-800 flex flex-col relative">
                      <img src={biodata?.profileImage} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                      <div className="flex flex-col justify-between p-6 space-y-4 flex-1 bg-pink-50">
                        <div className="space-y-2">
                          <h2 className="text-2xl font-semibold tracking-wide absolute top-0 right-0">{biodata?.biodataType === "Male" ? <><p className="flex items-center gap-2 bg-ivory px-2 border-b-rounded-xl">Male <SlSymbolMale className="text-purple-500"/></p></> : <><p className="flex items-center gap-2 bg-blush px-2">Female <SlSymbleFemale className="text-pink-400"/></p></>}</h2>
                          <h2 className="text-2xl font-semibold tracking-wide">Biodata ID: {biodata?.biodataId}</h2>
                          <h2 className="text-3xl font-semibold tracking-wide">{biodata?.name}</h2>
                          <p className="dark:text-gray-800 text-xl"><span className="font-semibold">Permanent Division:</span> {biodata?.permanentDivision}</p>
                          <p className="dark:text-gray-800 text-xl"><span className="font-semibold">Age:</span> {biodata?.age}</p>
                          <p className="dark:text-gray-800 text-xl"><span className="font-semibold">Occupation:</span> {biodata?.occupation}</p>
                        </div>
                        <Link to={`/biodata/${biodata?._id}`}>
                        <Button outline gradientDuoTone='purpleToPink'>View Profile</Button>
                        </Link>
                      </div>
                    </div>
                    )
                }
            </div>
        </div>
        </div>
    );
};

export default PremiumMember;