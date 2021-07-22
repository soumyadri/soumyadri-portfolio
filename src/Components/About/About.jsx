import React from 'react';
import styled from 'styled-components';

const AboutDiv = styled.div`
    background-color: #e8f0f28d;
    position: relative;
    bottom: 3px;
    width: 62%;
    padding: 3%;
    padding: 5% 19% 5% 19%;
    margin: auto;
    display: flex;

    &{
        @media only screen and (max-width: 1310px) {
            flex-direction: column;
            width: 60%;
            padding: 10% auto 10% auto ;
        }
    }
`

const YellowBar = styled.div`
    width: 60%;
    height: 10px;
    background-color: yellow;
    margin: 0;

    &{
        @media only screen and (max-width: 1310px) {
            margin-bottom: 12%;
        }
    }
`

const H2 = styled.h2`
    font-size: 35px;
    font-weight: 700;
    color: #3b3939;
    margin: 5px;
    margin-top: 5%;
    font-family: 'Raleway', sans-serif;
    animation-name: animation1;
    animation-duration: 2s;
`

const LeftDiv = styled.div`
    width: 50%;

    &{
        @media only screen and (max-width: 1310px) {
            width: 70%;
        }
    }
`

const H5 = styled.h5`
    font-size: 20px;
    font-weight: 600;
    color: #3b3939;
    margin: 8px;
    font-family: 'Raleway', sans-serif;
    justify-content: center;
`

const RightDiv = styled.div`
    width: 100%;
    text-align: justify;
    text-justify: inter-word;
`

export const About = () => {
    return (
        <AboutDiv>
            <LeftDiv>
                <H2>About Me</H2>
                <YellowBar></YellowBar>
            </LeftDiv>
            <RightDiv>
                <H5>Bachelors Of Computer Application graduate skilled in frontend and backend technologies. Eager to join a product-based startup to write production-based React code. Love to take on challenges and curious to learn new things. Hobby is to playing football and learning some interesting facts about finance.</H5>
            </RightDiv>
        </AboutDiv>
    )
}