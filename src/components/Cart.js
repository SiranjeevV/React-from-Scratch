import { useDispatch, useSelector } from "react-redux";
import ItemCards from "./ItemCards";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
    const items = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    function handleClear() {
        confirm("Are you Sure, do you want to clear the cart ?")
        dispatch(clearCart());
    }
    return (<div>
        <div className="flex justify-around my-4 py-2"><h1 className="font-bold text-lg">Cart</h1>
            <button className="bg-red-500 p-1" onClick={handleClear}>clear</button>
        </div>
        {items.map((res) => <ItemCards key={res.id} itemCard={res} />)}
    </div>);
}
export default Cart;