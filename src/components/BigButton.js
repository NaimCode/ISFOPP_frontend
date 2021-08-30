import { Link } from "react-router-dom";
const BigButton = ({ title, link, color }) => {
  return (
    <Link to={link}>
      <div
        className={`font-semibold font-title px-7 py-1 border-2 border-${color} text-${color} text-lg rounded-2xl transition-all duration-300 hover:bg-${color} hover:text-white overflow-hidden`}
      >
        {title}
      </div>
    </Link>
  );
};

export default BigButton;
