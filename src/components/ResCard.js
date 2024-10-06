// const styleCard = ;
const ResCard = (props) => {
    const { resData } = props;

    return (<div className="m-4 p-4 w-[260px] h-[380px] rounded-lg flex-col justify-around flex hover:shadow-lg" >
        <img className="rounded-lg h-[150px] w-80" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/" + resData.info.cloudinaryImageId} />
        <h3 className="font-bold py-2 text-lg">{resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(', ')}</h4>
        <h4>{resData.info.avgRating}</h4>
        <h4>{resData.info.costForTwo}</h4>
    </div>);
};

//higher order component card to enhanced card 

// input ==> card , output====> promoted labled card
export const WithPromotedLabel = (ResCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white p-1 m-3 px-3 mt-5 ml-8">Promoted</label>
                <ResCard{...props} />
            </div>
        )
    }
}
export default ResCard;