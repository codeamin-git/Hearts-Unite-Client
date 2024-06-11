import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";

const BiodataDetails = ({biodata}) => {
    return (
        <div>
            <Card className="max-w-sm bg-purple-50">
      <div className="flex flex-col items-center pb-4">
        <img
          src={biodata.profileImage}
          className="mb-3 rounded-full shadow-lg h-24 w-24"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Biodata Id: {biodata.biodataId}</h5>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Name: {biodata.name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Permanent Address: {biodata.permanentDivision}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">Age: {biodata.age}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">Occupation: {biodata.occupation}</span>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <Link to={`/biodata/${biodata._id}`}>
          <Button outline gradientDuoTone="purpleToPink">
            View Profile
          </Button>
          </Link>
        </div>
      </div>
    </Card>
        </div>
    );
};


export default BiodataDetails;