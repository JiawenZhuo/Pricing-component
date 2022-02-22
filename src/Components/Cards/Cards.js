import styled from "styled-components";
import Card from "./Card";
import { ThemeProvider } from "styled-components";
import {whiteTheme,blueTheme} from "../Themes";
import {info} from '../Const.js';

const CardsWrapper = styled.div`
    display: flex;
    flex: row;
    align-items: center;
    justify-content: center;
`
function Cards({monthly}){ 

  const data = monthly ? info.Monthly: info.Annully;

    return(
        <CardsWrapper>
        <ThemeProvider theme={whiteTheme}><Card data={data.basic}/></ThemeProvider>
        <ThemeProvider theme={blueTheme}><Card data={data.professional}/></ThemeProvider>
        <ThemeProvider theme={whiteTheme}><Card data={data.master}/></ThemeProvider>
        </CardsWrapper>
    );
}

export default Cards;