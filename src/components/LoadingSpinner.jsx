import { CgSpinner } from "react-icons/cg";

export const LoadingSpinner = ({size = 35}) => {
  return (
    <section className="flex flex-col justify-center items-center h-[50vh] text-2xl text-darkOrange">
      <CgSpinner className="animate-spin duration-200" size={size} />
    </section>
  );
};
