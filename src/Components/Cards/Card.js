import React from 'react';
import styled from 'styled-components'

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
    padding:  ${props => props.theme.padding} 40px ${props => props.theme.padding}  40px;
    width: 25%;
    text-align: center;
    font-family: 'Montserrat';
    margin-top: 50px;
    background: linear-gradient(${props => props.theme.backgroundLight},${props => props.theme.backgroundDark});
    border-radius: 10px;

    div{
        padding: 5px 10px 5px 10px;
    }

    span{
        @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&family=Montserrat:wght@700&display=swap');
        margin: 5px;
        color:  ${props => props.theme.color};
        font-family: 'Montserrat', sans-serif;
    }
`
const LearnMore = styled.button`
    width: 100%;
    border-radius: 20px;
    font-family: 'Montserrat', sans-serif;
    margin: 20px 1px 20px 1px;
    background: linear-gradient(${props => props.theme.light},${props => props.theme.dark});
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: .25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;    
    cursor: pointer;
    line-height: 1.25;
    min-height: 3rem;
    transition: all 250ms;
    touch-action: manipulation;
    color: ${props => props.theme.backgroundDark};
`

const Category = styled.div`
    margin: 20px 0 50px 0;
    @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&family=Montserrat:wght@700&display=swap');
        margin: 5px;
    span{
        font-family: 'Montserrat', sans-serif;
        line-height: 28px;
        font-weight: 700;
        color: ${props => props.theme.priceColor};
    }
`
export default function Card ({data}) {
    return(
        <CardWrapper>
            <Category><span>{data.category}</span></Category>
            <div><span style={{"font-size": "72px"}}>{data.price}</span></div>
            <div><Line /></div>
            <div><span>{data.storage} Shortage</span></div>
            <div><Line /></div>
            <BodyFont>{data.user} Users allowed</BodyFont>
            <div><Line /></div>
            <div><BodyFont>Send up to {data.GB} GB</BodyFont></div>
            <LearnMore>Learn More</LearnMore>
        </CardWrapper>
    );
}
