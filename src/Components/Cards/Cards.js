import styled from "styled-components";
import  Card  from "./Card";
import { ThemeProvider } from "styled-components";

const CardsWrapper = styled.div`
    display: flex;
    flex: row;
    border: 5px solid red;
    align-items: center;
    justify-content: center;
`

const theme = {
    colors: {
      powderWhite: "#FFFDF9",
      persianGreen: "#06B49A",
      lightBlue: "#AFDBD2",
      onyx: "#36313D"
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
      small: "1em",
      medium: "2em",
      large: "3em"
    }
  }


function Cards(){    
    return(
        <CardsWrapper>
            <Card middle/>
            <Card />
            <Card /> 
        </CardsWrapper>
    );
}

export default Cards;