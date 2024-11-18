import { sum } from "../sum"

test("Sum Fubction Should Calculate the sum of two Numbers",()=>{
    const result = sum(10,20);

    //Assertion
    expect(result).toBe(30);
    
})