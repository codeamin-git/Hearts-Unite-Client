import { useEffect, useState } from "react";

const MarriageStories = () => {
    const [stories, setStories] = useState([]);
    const [sortOrder, setSortOrder] = useState('ascending');
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/success-stories`)
        .then(res => res.json())
        .then(data => setStories(data))
    }, [])
    
    // Function to sort stories by marriageDate
    const sortStories = (stories, order) => {
        return stories.sort((a, b) => {
            const dateA = new Date(a.marriageDate);
            const dateB = new Date(b.marriageDate);
            return order === 'ascending' ? dateA - dateB : dateB - dateA;
        });
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    const sortedStories = sortStories([...stories], sortOrder);

    return (
        <div>
            <h2 className='text-4xl font-medium my-6 text-center'>~Success Stories~</h2>
            {/* sorting */}
            <div className="mb-4 w-full flex items-center justify-center text-center gap-2">
                <label htmlFor="sortOrder" className="block text-gray-700 font-bold mb-2">
                    Sort Reviews by Marriage Date:
                </label>
                <select
                    id="sortOrder"
                    name="sortOrder"
                    value={sortOrder}
                    onChange={handleSortChange}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 max-w-sm"
                >
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {
                sortedStories?.map(story => <div key={story?._id} className="flex flex-col md:flex-row max-w-2xl rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                    <img src={story?.image} alt="" className="object-cover object-center w-72 rounded-t-md dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-xl tracking-wide"><span className="font-semibold">Marriage Date:</span> {story?.marriageDate}</h2>
                            <p className="dark:text-gray-800"><span className="font-semibold">Personal Rating:</span> {story?.ratings}🌟</p>
                        </div>
                        <p>
                        <span className="font-semibold">Our Story:</span> {story?.successStory}
                        </p>
                    </div>
                </div>)
            }
        </div>
        </div>
    );
};

export default MarriageStories;