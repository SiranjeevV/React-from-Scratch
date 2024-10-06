import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import Grocery from "./components/Grocery";
import appStore from "./utils/appStore";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import Cart from "./components/Cart"
const AppLayout = () => {
    // const { loggedInUser } = useContext(userContext);
    const [userName, setUserName] = useState();
    useEffect(() => {
        const data = {
            loggedInUser: "Siranjeev"
        };
        setUserName(data.loggedInUser);
    });
    return (
        <div className="app">
            {/* <Provider store={appStore}> */}
            <Provider store={appStore}>
                <Header />
                <Outlet />
            </Provider>
            {/* </Provider> */}

        </div>
    );
};
const Grocery = lazy(() => import('./components/Grocery'));
const appRouter = createBrowserRouter([{
    path: '/',
    element: <AppLayout />,
    children: [
        {
            path: '/',
            element: <Body />,
        },
        {
            path: '/about',
            element: <About />,
        }, {
            path: '/contact',
            element: <Contact />,
        },
        {
            path: '/restaurants/:resId',
            element: <RestaurantMenu />
        }, {
            path: '/grocery',
            element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>
        },{
            path: '/cart',
            element: <Cart/>
        }
    ],
    errorElement: <Error />,

}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);