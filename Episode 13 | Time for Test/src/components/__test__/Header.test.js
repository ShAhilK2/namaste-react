import { fireEvent, getByText, render,screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
test("should button inside header componnet",()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}> 
<Header />
        </Provider>
        </BrowserRouter>);


//Quering 

const loginButton = screen.getByRole("button",{name:"SignIn"});

//Assertion 

expect(loginButton).toBeInTheDocument();



})

test("should cart items 0 in  header componnet",()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}> 
<Header />
        </Provider>
        </BrowserRouter>);


//Quering 

// const cartItems = screen.getByText("Cart (0 items)");

const cartItems = screen.getByText(/Cart/);

//Assertion 
expect(cartItems).toBeInTheDocument();



})

test("should chnage Login Button to LogOut Button in  header componnet",()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}> 
<Header />
        </Provider>
        </BrowserRouter>);


//Quering 
const signIn = screen.getByRole("button",{name:"SignIn"});

fireEvent.click(signIn);

const signOut = screen.getByRole("button",{name:"SignOut"});

//Assertion 
expect(signOut).toBeInTheDocument();



})