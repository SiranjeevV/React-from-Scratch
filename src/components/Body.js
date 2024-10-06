import ResCard, { WithPromotedLabel } from "./ResCard";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
    // let listOfRestaurants =  
    const [listOfRes, setRes] = useState([]);
    const [copyOfRes, setCopyOfRes] = useState([]);

    const [search, setSearch] = useState("");
    // console.log(search);
    useEffect(() => {
        fetData();
    }, []);
    const PromotedRes = WithPromotedLabel(ResCard);
    console.log(PromotedRes);
    const fetData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0417591&lng=80.2340761&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#');
        const json = await data.json();
        // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setCopyOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        // console.log(listOfRes);

    };

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return (<h1>You're Offline</h1>)
    }
    if (listOfRes == 0) {
        return (
            <div className="body">
                <div className="flex items-center">
                    <div className="search m-4 p-4">
                        <input type="text" className="border border-solid border-black py-1 rounded-md" value={search} onChange={(e) => {
                            setSearch(e.target.value);
                        }} />
                        <button className="px-4 py-1 bg-red-600 mx-1 rounded-sm" onClick={() => {
                            const searchRes = listOfRes.filter((res) => res.info.name.toLowerCase().includes(search.toLowerCase())
                            )
                            setCopyOfRes(searchRes);
                        }} >Search</button>
                    </div>
                    <button className="px-4  py-2 text-white bg-black mx-1 rounded-sm" onClick={() => {
                        const filteredList = listOfRes.filter((result) => result.info.avgRating > 4.5);
                        setCopyOfRes(filteredList);
                    }}>Top Rated Restaurants</button>
                </div>
                <Shimmer />
            </div>);
    }
    return (
        <div className="body">
            <div className="flex items-center justify-start">
                <div className="search m-4 p-4 mx-5 ">
                    <input type="text" className="border border-solid border-black py-1 rounded-md" value={search} onChange={(e) => {
                        setSearch(e.target.value);
                    }} />
                    <button className="px-4 py-1 bg-red-600 mx-1 rounded-sm" onClick={() => {
                        const searchRes = listOfRes.filter((res) => res.info.name.toLowerCase().includes(search.toLowerCase())
                        )
                        setCopyOfRes(searchRes);
                    }} >Search</button>
                </div>
                <button className="px-4  py-2 rounded-lg mx-5 text-white bg-black " onClick={() => {
                    const filteredList = listOfRes.filter((result) => result.info.avgRating > 4.5);
                    setCopyOfRes(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="resContainer flex flex-wrap justify-around">
                {copyOfRes.map((res) => (<Link key={res.info.id} to={`/restaurants/${res.info.id}`} >
                    {(res.info.avgRating > 4.4) ? <PromotedRes resData={res} /> : <ResCard resData={res} />}
                </Link>
                ))}
            </div>
        </div >
    );
};
export default Body;