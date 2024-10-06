import { CDN } from "../utils/constant"
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState("Log-in");
    const onlineStatus = useOnlineStatus();
    const data = useContext(useRestaurantMenu);
    const cart = useSelector((store) => store.cart.items);
    console.log(cart);
    return (
        <div className="flex justify-between shadow-lg mb-3">
            <div>
                <img className="logo w-36 ml-4" src={CDN} />
            </div>

            <ul className="flex  mr-4 items-center">
                <li className="px-3">  <Link >{onlineStatus ? "online✅" : "offline❌"}</Link></li>
                <li className="px-3">    <Link to="/">Home</Link></li>
                <li className="px-3">     <Link to="/about">About</Link> </li>
                <li className="px-3">     <Link to="/contact">Contact</Link> </li>
                <li className="px-3">    <Link to="/grocery">Grocery</Link> </li>
                <li className="px-3 font-bold text-lg">     <Link to="/cart"> {"CART - " + cart.length} </Link> </li>
                <li className="px-3">   <button className="login-button " onClick={
                    () => {
                        if (btnName === "Log-in")
                            setBtnName("Log-out");
                        else
                            setBtnName("Log-in");

                    }
                }>{btnName}</button></li>
                {/* <li className="px-3">     <Link to="/cart">{data.loggedInUser}</Link> </li> */}

            </ul>

        </div>
    );
};
export default Header;