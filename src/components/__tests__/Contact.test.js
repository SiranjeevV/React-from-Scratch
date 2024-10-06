import { render, screen } from "@testing-library/react";
import Contact from "../Contact"
import "@testing-library/jest-dom"


test("test case for component", () => {
    render(<Contact />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
});
it("test case for button", () => {
    render(<Contact />);
    const btn = screen.getByText('Contact : 8608676684');
    expect(btn).toBeInTheDocument();
})
test("test case for array of elems", () => {
    render(<Contact />);
    const btn = screen.getAllByRole('heading');
    expect(btn.length).toBe(1);
    // expect(btn.length).not.toBe(3);

    // expect(btn).toBeInTheDocument();  
})