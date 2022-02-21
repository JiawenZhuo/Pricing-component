import React from 'react'
import styled from 'styled-components'
import './Switch.css';

const SwitchWrapper = styled.div`
    display: inline-block;
    height: 32px;
    width: 55px;
    align-items: center;
`
const CheckBox = styled.input`
    display: none;
    opacity: 0; 
    width: 0;
    height: 0;
`

const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    height: 32px;
    width: 55px;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 30px;
    background: linear-gradient(#A2A7F0, #696EDD);
    &::before {
            position: absolute;
            content: "";
            height: 24px;
            width: 24px;
            left: 5px;
            bottom: 4px;
            border-radius: 100px;
            background-color: white;
            -webkit-transition: .4s;
            transition: 0.4s;
            transform: ${props => props.monthly ? 'translateX(20px)' : 'none'}; 
        } 
    
`;

const SwitchContainer = styled.div`
    display: flex;
    justify-content: center;
    span{
        @import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap");
        font-family: 'Montserrat', sans-serif;
        margin: 0 10px 0 10px;
        display: flex;
        align-items: center;
        align-items: center;
        color: #6E728E;
        font-weight: 700;
        opacity: 50%;
    }
`

const Container = styled.div`
    display: flex;
    flex-flow: row;
`
  
export const Switch = ({monthly, onClick}) => {
    return(
        <Container>
        <SwitchContainer className='bg'><span>Annually</span></SwitchContainer>
        <SwitchWrapper onClick={onClick} >
            <CheckBox />
            <Slider monthly={monthly} className={`${monthly ? null: 'annully'}`}/>
        </SwitchWrapper>
        <SwitchContainer><span>Monthly</span></SwitchContainer>
        </Container>
    );
}