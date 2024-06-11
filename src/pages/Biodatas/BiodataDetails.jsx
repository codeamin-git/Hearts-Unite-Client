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
        <div>
        <h5 className="mb-1 text-xl text-gray-900 dark:text-white"><span className="font-medium">Biodata Id:</span> {biodata.biodataId}</h5>
        <h5 className="mb-1 text-xl text-gray-900 dark:text-white"><span className="font-medium">Name:</span> {biodata.name}</h5>
        <p className="text-sm text-gray-900 dark:text-gray-400"><span className="font-medium">Permanent Address:</span> {biodata.permanentDivision}</p>
        <p className="text-sm text-gray-900 dark:text-gray-400"><span className="font-medium">Age:</span> {biodata.age}</p>
        <p className="text-sm text-gray-900 dark:text-gray-400"><span className="font-medium">Occupation:</span> {biodata.occupation}</p>
        </div>
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