import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResAccordion from "./ResAccordion";
const RestaurantMenu = () => {
    const { resId } = useParams();
    const [showIndex, setShowIndex] = useState(null);

    const resInfo = useRestaurantMenu(resId);
    if (resInfo === null) {
        return <Shimmer />;
    }
    const { name, cuisines, costForTwoMessage, cloudinaryImageId } = resInfo?.cards[2]?.card?.card?.info;
    const types = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.["REGULAR"]?.cards.filter((res) => res?.card?.card?.["@type"] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
    console.log(types);

    return (
        <>
            <div>
                <div className=" text-start w-11/12 m-auto rounded-lg py-5 flex items-center justify-between px-12 bg-gray-200">
                    <div>
                        <h1 className="font-bold  py-2">{name}</h1>
                        <h3 className=" py-1">{cuisines.join(', ')} - ({costForTwoMessage})</h3>
                    </div>
                    <img className="w-[250px] h-[200px] shadow-md rounded-sm" src={`https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/${cloudinaryImageId}`} />
                </div>
                {types.map((type, index) => (<ResAccordion key={type.card.card.title} resMenu={type.card.card} showAcc={index === showIndex ? true : false} setShow={() => setShowIndex(index)}  // Correct function passed here

                />))}

            </div>
        </>
    )
}
export default RestaurantMenu;