import { BrowserRouter, json } from "react-router-dom"
import {act} from "react-dom/test-utils"
import MOCK_DATA from "../../mocks/RestaurantMenu.json"
import RestaurantMenu from "../RestaurantMenu"
import { fireEvent, render ,screen} from "@testing-library/react"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import Header from "../Header"
import Cart from "../Cart"
import "@testing-library/jest-dom"
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : ()=>  {
            
            return Promise.resolve(MOCK_DATA)
        }
    })
})
it("Should load Restauarnt Menu Component",async ()=>{
    await act(async ()=>{
        render(<BrowserRouter>
        <Provider store={appStore  }>
            

            <Header />

            <RestaurantMenu />
            <Cart />
  

        </Provider>
            </BrowserRouter>)
      
    })


    //Quering 
const accordionHeader = screen.getByText("Recommended (20)");
fireEvent.click(accordionHeader)


//Assertion

expect(screen.getAllByTestId("resMenuList").length).toBe(20)

const addbtns = screen.getAllByRole("button",{name:"ADD +"})
console.log(addbtns.length)
fireEvent.click(addbtns[0])

expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();
fireEvent.click(addbtns[1])
expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

expect(screen.getAllByTestId("resMenuList").length).toBe(22)

const clearBtn = screen.getByRole("button",{name:"Clear Cart"})
fireEvent.click(clearBtn);

expect(screen.getAllByTestId("resMenuList").length).toBe(20)
expect(screen.getByText("Cart is Empty,Please Add Items to the Cart !"));





})