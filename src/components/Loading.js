import { AiOutlineLoading3Quarters as Loader } from "react-icons/ai";
export const Loading = ({ styles }) => {
  return (
    <div>
      <Loader className={`animate-spin ${styles}`} />
    </div>
  );
};

export const LoadingPage = () => {
  return (
     <div className="w-screen h-screen bg-white">
      <Loader className={`animate-spin text-primary text-2xl`} />
    </div>
  )
}

