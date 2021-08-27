import { AiOutlineLoading3Quarters as Loader } from "react-icons/ai";
const Loading = ({ styles }) => {
  return (
    <div>
      <Loader className={`animate-spin ${styles}`} />
    </div>
  );
};

export default Loading;
