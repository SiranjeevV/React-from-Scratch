import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h3>{err.status}:{err.statusText}</h3>
            <h1>
                Oops.......
            </h1>
            <h2>Something Went Wrong</h2>
        </div>
    )
}
export default Error;