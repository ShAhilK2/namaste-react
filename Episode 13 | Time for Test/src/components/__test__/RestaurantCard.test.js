import { render ,screen} from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import Mock_Data from "../../mocks/RestaurantCardMock.json"
import {withMoreRatingRestaurantCard} from "../RestaurantCard"
import "@testing-library/jest-dom"

it("Should Render the Restaurant Component with Data Props",
    ()=>{
        render(<RestaurantCard restaurant={Mock_Data}/>)

        //Quering 
        const name = screen.getByText("Jani Locho");

        //Assertion
        expect(name).toBeInTheDocument();
    }

)
it("Should Render the Restaurant Component with Promoted Data", () => {
    // Wrap RestaurantCard with the HOC
    const EnhancedRestaurantCard = withMoreRatingRestaurantCard(RestaurantCard);
  
    // Render the enhanced component
    render(<EnhancedRestaurantCard restaurant={Mock_Data} />);
  
    // Query for the "More rating" label
    const label = screen.getByText("More rating");
  
    // Assert that the label is in the document
    expect(label).toBeInTheDocument();
  });