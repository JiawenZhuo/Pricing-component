import React from 'react';
import { createGlobalStyle } from "styled-components"
import styled from 'styled-components'
import './Card.css';

const BodyFont = styled.span`
    size: 18px;
    width: 100%;
`
const Line = styled.hr`
    color: #979797;  
`

export const CardWrapper = styled.div`
    display: flex;
    flex-flow: column wrap;
    padding: 20px 40px 20px 40px;
    width: 25%;
    text-align: center;
    /* margin:  20px 30px 10px 30px; */
    border: 5px solid red;
    font-family: 'Montserrat';
    margin-top: 50px;
    background-color: white;
    border-radius: 10px;

    div{
        padding: 5px 10px 5px 10px;
    }

    span{
        @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&family=Montserrat:wght@700&display=swap');
        margin: 5px;
        color: #6E728E;
        font-family: 'Montserrat', sans-serif;
    }
`
const LearnMore = styled.button`
    width: 100%;
    border-radius: 20px;
    font-family: 'Montserrat', sans-serif;
    /* font-size: 13px; */
    margin: 20px 1px 20px 1px;
    background-color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: .25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    color: rgba(0, 0, 0, 0.85);
    cursor: pointer;
    line-height: 1.25;
    min-height: 3rem;
    text-decoration: none;
    transition: all 250ms;
    touch-action: manipulation;

`
/* .button-6:hover,
.button-6:focus {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  color: rgba(0, 0, 0, 0.65);
}

.button-6:hover {
  transform: translateY(-1px);
}

.button-6:active {
  background-color: #F0F0F1;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  color: rgba(0, 0, 0, 0.65);
  transform: translateY(0);
} */


const Category = styled.div`
    margin: 20px 0 50px 0;
    @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&family=Montserrat:wght@700&display=swap');
        margin: 5px;
    span{
        font-family: 'Montserrat', sans-serif;
        line-height: 28px;
        font-weight: 700;
        color: #6E728E;
    }
`
export default function Card () {
    return(
        <CardWrapper>
            <Category><span>Master</span></Category>
            <div className='Price'><span style={{"font-size": "72px", "color": "#4A4D60"}}>$24.99</span></div>
            <div><Line /></div>
            <div><span> Shortage</span></div>
            <div><Line /></div>
            <BodyFont>Users allowed</BodyFont>
            <div><Line /></div>
            <div><BodyFont>Send up to GB</BodyFont></div>
            <LearnMore>Learn More</LearnMore>
        </CardWrapper>
    );
}
