import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";
// import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemsList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  // console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="block">
          <div className="block">
            <div className="block pb-4">
              <div className="flex items-start justify-between pb-5">
                <div className="restmenu-width block">
                  <div>
                    <i className="leading-5 text-base align-middle mt-[-2px] inline-block">
                      {item?.card?.info?.itemAttribute?.vegClassifier === "VEG"
                        ? "🟩"
                        : "🟥"}
                    </i>
                    {item?.card?.info?.ribbon?.text ? (
                      <span className="inline-block leading-5 text-sm text-[#ee9c00] font-medium ml-2 align-middle">
                        <span className="text-[.86rem]">
                          {/* <FontAwesomeIcon icon={faAngleDown} /> */}
                        </span>
                        {item?.card?.info?.ribbon?.text}
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-1 block">
                    <h3 className="mr-1 text-xl font-medium text-[#3e4152] break-words">
                      {item.card.info.name}
                    </h3>
                  </div>
                  <div className="mt-1">
                    <span className="text-base mr-2 font-normal text-[#3e4152]">
                      {/* {item.card.info.price ? (
                        <span className="text-[0.7rem] font-light	line-through	mt-[-6px] mr-1">
                          Rs. {item.card.info.price / 100}
                        </span>
                      ) : null} */}
                      {item.card.info.price ? (
                        <span>Rs. {item.card.info.price / 100}</span>
                      ) : (
                        <span>Rs. {item.card.info.defaultPrice / 100}</span>
                      )}
                    </span>
                    {item?.card?.info?.offerTags ? (
                      <span className="bg-[#fae8e3] text-[#db6742] border-l-[#db6742] py-[2px] pl-[5px] pr-1 text-[.7rem] leading-5 border-l-2 border-solid	inline-block align-middle mr-2">
                        <span className="font-semibold">
                          {item?.card?.info?.offerTags[0]?.title}
                        </span>
                        <span className="text-0.7rem">
                          {" "}
                          | {item?.card?.info?.offerTags[0]?.subTitle}
                        </span>
                      </span>
                    ) : null}
                  </div>
                  <div className="recipy-des w-full mt-3 leading-[1.3]	text-[#282c3f73] tracking-[-.3px] text-[14px]">
                    {item?.card?.info?.description}
                  </div>
                </div>
                <div className=" recipy-img relative ml-4 min-w-[118px] h-[120px]">
                  <div className="imgrecipe  ">
                    <button className="w-[118px] h-[96px] object-cover rounded-md ">
                      <img
                        srcSet={CDN_URL + item.card.info.imageId}
                        className="w-[118px] h-[96px] object-cover rounded-md"
                      />
                    </button>
                  </div>
                  <div className="add-button absolute left-[50%] bottom-2 translate-x-[-50%] z-[0]">
                    <div className="w-[96px] h-9 relative min-h-9 left-[50%] bottom-2 translate-x-[-50%] shadow-[0_3px_8px_#e9e9eb;] rounded border inline-block border-solid border-[#d4d5d9] text-[#60b246] text-sm font-semibold leading-8 text-center	 bg-white">
                      <div
                        className="w-full h-full cursor-pointer"
                        onClick={() => handleAddItem(item)}
                      >
                        ADD
                      </div>
                      <div className="absolute right-[2px] top-[-35%] origin-[-6px_6px] rotate-0	  ">
                        +
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-gray-200 border-b-2"></div>
            </div>
          </div>
        </div>

        // <div
        //   key={item.card.info.id}
        //   className="p-2 m-2 border-gray-200 border-b-2 text-left flex">
        //   <div className="block" >
        //     <div className="block" >

        //       <span>{item?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? "🟩" : "🟥"} </span>
        //       <span className="text-orange-500">{item.card.info.ribbon.text}</div>
        //     <div className="absolute">
        //       <button onClick={() => handleAddItem(item)} className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg">Add +</button>
        //     </div>
        //     <img src={CDN_URL + item.card.info.imageId} className="w-20  mr-5"/>
        //   </div>
        //   <div>
        //     <div className="font-bold	">
        //       <span className="pr-4">{item.card.info.name}</span>
        //       <span>
        //         -Rs.{" "}
        //         {item.card.info.price / 100 ||
        //           item.card.info.defaultPrice / 100}
        //       </span>
        //     </div>
        //     <p className="text-xs">{item.card.info.description}</p>
        //   </div>
        // </div>
      ))}
    </div>
  );
};

export default ItemsList;
