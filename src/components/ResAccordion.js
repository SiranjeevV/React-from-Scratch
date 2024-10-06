import ItemCards from "./ItemCards";
import { useState } from "react";
const ResAccordion = ({ resMenu, showAcc, setShow }) => {
    // const [showAcc, setShowAcc] = useState(false);
    // const { resMenu } = props;
    const handleClick = () => {
        setShow();
    }
    return (<div className="w-10/12 mt-2 bg-slate-50 shadow-xl border-gray-200 border-spacing-1 m-auto">
        <div className=" flex justify-between px-8  my-1 py-3 mb-2 rounded-md cursor-pointer" onClick={handleClick}>
            <h3 className="font-bold">{resMenu.title}-({resMenu.itemCards.length})</h3>
            <p>+</p>
        </div>

        {showAcc && resMenu?.itemCards.map((res) => (<ItemCards key={res.card.info.id} itemCard={res.card.info} />))}
    </div >)
}
export default ResAccordion;