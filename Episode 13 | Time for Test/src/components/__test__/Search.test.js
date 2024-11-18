import { fireEvent, render ,screen} from "@testing-library/react"
import Body from "../Body"
import { BrowserRouter, json } from "react-router-dom"
import {act} from "react-dom/test-utils"

import Mock_ResListData from "../../mocks/RestaurantListData.json"
import "@testing-library/jest-dom"
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(Mock_ResListData);
        }
    })
})


describe("Test of Body Component",()=>{

    beforeAll(()=>{
        console.log("before All")
    })

    beforeEach(()=>{
        console.log("before Each")
    })

    afterAll(()=>{
        console.log("AFter All")
    })

    afterEach(()=>{
        console.log("AFter Each")
    })
    it("Should Render Search Button and Search Input  in Body Component",async ()=>{
    
    
        await act(async ()=>
            render(
                <BrowserRouter>
            <Body />
                </BrowserRouter>
            )
            
        )
      
    
        //Quering 
    
    
        const cardsBeforeSearch = screen.getAllByTestId("resCard");
        expect(cardsBeforeSearch.length).toBe(8);
        const searchBtn = screen.getByRole("button",{name:"Search"});
        const searchInput = screen.getByTestId("searchInput");
        fireEvent.change(searchInput,{target:{value:"burger"}});
    
        fireEvent.click(searchBtn);
    
        const cardsAfterSearch = screen.getAllByTestId("resCard");
    
    
        
    
    
    
    
        //Assertion 
        // expect(searchBtn).toBeInTheDocument();
    
        expect(cardsAfterSearch.length).toBe(1);
    
    
    
    })
    
    it("Should render Top Rated Restaurants from the Body Components",async()=>{
        
       await act(async ()=>{
            render(<BrowserRouter>
            <Body />
            </BrowserRouter>)
        })
    
    
        const cardsBeforefilter = screen.getAllByTestId("resCard");
        expect(cardsBeforefilter.length).toBe(8);
        const filterBtn = screen.getByRole("button",{name:"Top Rated Restaurants"});
    
    
        fireEvent.click(filterBtn);
    
        const cardsAfterFilter = screen.getAllByTestId("resCard");
     
        expect(cardsAfterFilter.length).toBe(3);
    
    
    
    })
})
