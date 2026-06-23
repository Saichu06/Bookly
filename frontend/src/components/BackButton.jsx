import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="bg-sky-100 text-sky-800 hover:bg-sky-200 px-4 py-2 rounded-lg flex items-center gap-2">
        <BsArrowLeft className="text-xl" />
        <span>Back</span>
      </Link>
    </div>
  );
};

export default BackButton;