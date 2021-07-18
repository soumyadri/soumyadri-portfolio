import React from 'react';
import Git from '../../Images/gitContribution.png';
import styled from 'styled-components';

const GitDiv = styled.div`
    background-color: #ffffff;
    position: relative;
    bottom: 3px;
    width: 65%;
    padding: 3%;
    padding: 5% 16% 5% 14%;
    margin: auto;

    &{
        @media only screen and (max-width: 1310px) {
            width: 65%;
            padding: 10% auto 10% auto ;
        }
    }
`

const Img = styled.img`
    width: 100%;
    max-height: 1100px;
    max-width: 1100px;
    border-bottom: 1px solid #4b1111;

    &:hover{
        transform: scaleX(101%);
    }

    &{
        @media only screen and (max-width: 1310px) {
            width: 120%;
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
    font-size: 32px;
    font-weight: 700;
    color: #3b3939;
    margin: 5px;
    margin-top: 5%;
    font-family: 'Raleway', sans-serif;
    animation-name: animation1;
    animation-duration: 2s;

    &{
        @media only screen and (max-width: 1310px) {
            font-size: 28px;
        }
    }
`

const LeftDiv = styled.div`
    width: 60%;
    margin-bottom: 5%;

    &{
        @media only screen and (max-width: 1310px) {
            width: 90%;
        }
    }
`

export const Github = () => {
    return (
        <GitDiv>
            <LeftDiv>
                <H2>Github Contribution</H2>
                <YellowBar></YellowBar>
            </LeftDiv>
            <Img src={Git} alt="" />
        </GitDiv>
    )
}