import { sum } from "../sum";

test("test case for sum", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
})