import { useEffect, useState } from 'react';
import { IoPeopleSharp } from "react-icons/io5";
import { SlUserFemale } from 'react-icons/sl';
import { LiaMaleSolid } from "react-icons/lia";
import { LuHeartHandshake } from "react-icons/lu";

const SuccessCounter = () => {
    const [counts, setCounts] = useState({})
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/admin-stat`)
        .then(res => res.json())
        .then(data => setCounts(data))
    }, [])
    console.log(counts);
    return (
        <div>
            <h2 className='text-4xl font-medium my-6 text-center'>~Our Engagements~</h2>
            <div className="mt-12 border border-maroon border-r-0 border-l-0 flex items-center justify-center flex-col md:flex-row mx-12 gap-8 uppercase">
            <div className=" md:border-r border-maroon flex flex-col items-center justify-center space-y-4 p-8">
                <IoPeopleSharp className='text-3xl'/>
                <h2 className='text-navy font-semibold text-xl'>Total Biodata</h2>
                <p className='text-2xl font-medium'>{counts?.totalBiodata}</p>
            </div>
            <div className="md:border-r border-maroon flex flex-col items-center justify-center space-y-4 p-8">
                <SlUserFemale className='text-2xl'/>
                <h2 className='text-purple-500 font-semibold text-xl'>Female Biodata</h2>
                <p className='text-2xl font-medium'>{counts?.femaleBiodata}</p>
            </div>
            <div className="md:border-r border-maroon flex flex-col items-center justify-center space-y-4 p-8">
                <LiaMaleSolid className='text-3xl'/>
                <h2 className='text-maroon font-semibold text-xl'>Male Biodata</h2>
                <p className='text-2xl font-medium'>{counts?.maleBiodata}</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 p-8">
                <LuHeartHandshake className='text-3xl'/>
                <h2 className='text-pink-500 font-semibold text-xl'>Total Marriage</h2>
                <p className='text-2xl font-medium'>{counts?.totalMarriage}</p>
            </div>
        
        </div>
        </div>
    );
};

export default SuccessCounter;