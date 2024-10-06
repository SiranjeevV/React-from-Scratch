import { useState } from "react";

const User = () => {
    const [count] = useState(0);
    const [count2] = useState(1);
    return (
        <div className="userCard">
            <h3>{count}</h3>
            <h5>Function</h5>
            <h5>name:Siranjeev</h5>
            <h6>mail: siranjeev @gmail.com</h6>
        </div>)
}
export default User;