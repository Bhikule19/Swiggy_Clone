// import { SHIMMER_ICON } from "../utils/constant";

const Shimmer = () => {
  return (
    <div className="shimmer-container flex flex-col justify-center items-center">
      <div className="loading-icecream-banner bg-[#171a29] w-full h-[340px] flex flex-col justify-center items-center gap-12">
        {/* <div className="flex justify-center items-center relative">
          <div className="spinner"></div>
          <img src={SHIMMER_ICON} className="absolute h-10 w-10" />
        </div> */}
        <p className="font-montserrat text-2xl text-white opacity-80">
          Looking for great food near you ...
        </p>
      </div>
      <div className="restaurant-list-shimmer w-9/12 m-auto">
        <div className="w-32 h-4 m-8 ml-[105px] bg-gray-200 shimmer-effect"></div>
        <div className="flex flex-wrap w-10/12 m-auto gap-8">
          <div className="flex flex-col items-start justify-center">
            <div className="shimmer-card m-3 w-[270px] h-[170px] bg-gray-200 shimmer-effect"></div>
            <div className="bg-gray-200 w-[135px] h-3 mt-2 mx-3 mb-1 shimmer-effect"></div>
            <div className="bg-gray-200 w-[100px] h-3 mt-2 mx-3 shimmer-effect"></div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="shimmer-card m-3 w-[270px] h-[170px] bg-gray-200 shimmer-effect"></div>
            <div className="bg-gray-200 w-[135px] h-3 mt-2 mx-3 mb-1 shimmer-effect"></div>
            <div className="bg-gray-200 w-[100px] h-3 mt-2 mx-3 shimmer-effect"></div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="shimmer-card m-3 w-[270px] h-[170px] bg-gray-200 shimmer-effect"></div>
            <div className="bg-gray-200 w-[135px] h-3 mt-2 mx-3 mb-1 shimmer-effect"></div>
            <div className="bg-gray-200 w-[100px] h-3 mt-2 mx-3 shimmer-effect"></div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="shimmer-card m-3 w-[270px] h-[170px] bg-gray-200 shimmer-effect"></div>
            <div className="bg-gray-200 w-[135px] h-3 mt-2 mx-3 mb-1 shimmer-effect"></div>
            <div className="bg-gray-200 w-[100px] h-3 mt-2 mx-3 shimmer-effect"></div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="shimmer-card m-3 w-[270px] h-[170px] bg-gray-200 shimmer-effect"></div>
            <div className="bg-gray-200 w-[135px] h-3 mt-2 mx-3 mb-1 shimmer-effect"></div>
            <div className="bg-gray-200 w-[100px] h-3 mt-2 mx-3 shimmer-effect"></div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="shimmer-card m-3 w-[270px] h-[170px] bg-gray-200 shimmer-effect"></div>
            <div className="bg-gray-200 w-[135px] h-3 mt-2 mx-3 mb-1 shimmer-effect"></div>
            <div className="bg-gray-200 w-[100px] h-3 mt-2 mx-3 shimmer-effect"></div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="shimmer-card m-3 w-[270px] h-[170px] bg-gray-200 shimmer-effect"></div>
            <div className="bg-gray-200 w-[135px] h-3 mt-2 mx-3 mb-1 shimmer-effect"></div>
            <div className="bg-gray-200 w-[100px] h-3 mt-2 mx-3 shimmer-effect"></div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="shimmer-card m-3 w-[270px] h-[170px] bg-gray-200 shimmer-effect"></div>
            <div className="bg-gray-200 w-[135px] h-3 mt-2 mx-3 mb-1 shimmer-effect"></div>
            <div className="bg-gray-200 w-[100px] h-3 mt-2 mx-3 shimmer-effect"></div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="shimmer-card m-3 w-[270px] h-[170px] bg-gray-200 shimmer-effect"></div>
            <div className="bg-gray-200 w-[135px] h-3 mt-2 mx-3 mb-1 shimmer-effect"></div>
            <div className="bg-gray-200 w-[100px] h-3 mt-2 mx-3 shimmer-effect"></div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="shimmer-card m-3 w-[270px] h-[170px] bg-gray-200 shimmer-effect"></div>
            <div className="bg-gray-200 w-[135px] h-3 mt-2 mx-3 mb-1 shimmer-effect"></div>
            <div className="bg-gray-200 w-[100px] h-3 mt-2 mx-3 shimmer-effect"></div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="shimmer-card m-3 w-[270px] h-[170px] bg-gray-200 shimmer-effect"></div>
            <div className="bg-gray-200 w-[135px] h-3 mt-2 mx-3 mb-1 shimmer-effect"></div>
            <div className="bg-gray-200 w-[100px] h-3 mt-2 mx-3 shimmer-effect"></div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="shimmer-card m-3 w-[270px] h-[170px] bg-gray-200 shimmer-effect"></div>
            <div className="bg-gray-200 w-[135px] h-3 mt-2 mx-3 mb-1 shimmer-effect"></div>
            <div className="bg-gray-200 w-[100px] h-3 mt-2 mx-3 shimmer-effect"></div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="shimmer-card m-3 w-[270px] h-[170px] bg-gray-200 shimmer-effect"></div>
            <div className="bg-gray-200 w-[135px] h-3 mt-2 mx-3 mb-1 shimmer-effect"></div>
            <div className="bg-gray-200 w-[100px] h-3 mt-2 mx-3 shimmer-effect"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
