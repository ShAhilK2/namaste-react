import { render ,screen} from "@testing-library/react";
import ContactUs from "../ContactUs"
import "@testing-library/jest-dom"


describe("Contact Us Page Test Cases",()=>{

test("Should load Contact Us Component",()=>{

    render(<ContactUs />);

    const heading = screen.getByRole('heading');

    //Assertion
    expect(heading).toBeInTheDocument();

})


it("Should load Button inside Contact Us Component",()=>{

    render(<ContactUs />);

    const button = screen.getByText('Submit');

    //Assertion
    expect(button).toBeInTheDocument();

})


it("Should load input text  inside Contact Us Component",()=>{

    render(<ContactUs />);

    const inputText = screen.getByPlaceholderText("name");

    //Assertion
    expect(inputText).toBeInTheDocument();

})

test("Should load 2 input boxes inside Contact Us Component",()=>{

    render(<ContactUs />);

    //Querying
    const inputboxes = screen.getAllByRole("textbox");

    //Assertion
    expect(inputboxes.length).toBe(2);

})

})