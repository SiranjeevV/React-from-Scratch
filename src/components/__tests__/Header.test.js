import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
it("should render header iwt login btn", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>);
})
it("should render header iwt  cart", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>);
    const cart = screen.getByText(/CART/);
    // const loginBtn = screen.getByText('login');
    expect(cart).toBeInTheDocument();
})
// it("should render header iwt login btn", () => {
//     const loginBtn = screen.getByRole('button', { name: "Log-in" });
//     // const loginBtn = screen.getByText('login');
//     expect(loginBtn).toBeInTheDocument();
// })
it("should render header iwt login btn", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>);
    const loginBtn = screen.getByRole('button', { name: "Log-in" });
    // const loginBtn = screen.getByText('login');
    fireEvent.click(loginBtn);
    const logoutBtn = screen.getByRole('button', { name: "Log-out" });

    expect(logoutBtn).toBeInTheDocument();
})