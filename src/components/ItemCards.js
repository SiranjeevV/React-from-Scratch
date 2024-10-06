import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
const ItemCards = (props) => {
    const { itemCard } = props;
    const dispatch = useDispatch();
    const handleClick = (item) => {
        dispatch(addItems(item))
    }
    return (<div className="flex justify-between px-5 py-7 border-b-2 border-gray-200">
        <div className="w-3/6">
            <h2 className="text-left font-bold mb-3">{itemCard.name}-(Rs.{itemCard.price / 100})</h2>
            <h2 className="text-left font-bold mb-1">Rs.{itemCard.price / 100}</h2>

            <h2 className="text-left mb-1">{itemCard.description}</h2>
        </div>
        <div className="relative h-auto" >
            <button className="absolute bg-black py-2 rounded-md px-4 text-white font-bold left-[27%] bottom-0" onClick={() => handleClick(itemCard)}>ADD +</button>
            <img className="w-[170px] h-[110px] shadow-md rounded-sm" src={`https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/${itemCard.imageId}`} />
        </div>
    </div>)

}
export default ItemCards;