import { AiOutlineLoading } from "react-icons/ai";

export const Loader = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <AiOutlineLoading className="animate-spin text-4xl text-blue-500"/>
    </div>
  );
};
