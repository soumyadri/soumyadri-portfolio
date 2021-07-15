import React from 'react';
import styled from 'styled-components';

const SkillDiv = styled.div`
    background-color: #fff;
    width: 60%;
    margin: auto;
    padding: 3% 20% 3% 20%;
    display: flex;
    animation-name: animation1;
    animation-duration: 2s;

    @keyframes animation1 {
        from {opacity: 0;}
        to {opacity: 1;}
    }
    
    &{
        @media only screen and (max-width: 1310px) {
            flex-direction: column;
            width: 62%;
        }
    }
`

const H2 = styled.h2`
    font-size: 33px;
    color: #272727e6;
    font-weight: 700;
    font-family: 'Raleway', sans-serif;
    margin: 5px;
    margin-left: 20px;
`

const YellowBar = styled.div`
    width: 50%;
    height: 10px;
    background-color: yellow;
    margin: 0;
    margin-bottom: 15%;
    margin-left: 20px;
`


const LeftDiv = styled.div`
    width: 100%;
`
const RigthDiv = styled.div`
    width: 100%;
    margin-top: 4%;

    &{
        @media only screen and (max-width: 1310px) {
            margin-top: 0;
        }
    }
`

const SkillBar = styled.div`
    height: 5px;
    padding: 3px;
    margin-top: 5px;
    margin-left: 15px;
    background-color: #e06b35;
    border: 1px solid orange;
`

const InnerDiv = styled.div`
    display: flex;
    width: 90%;
    margin-top : 20px;
`

const H5 = styled.h5`
    font-size: 18px;
    font-weight: 500;
    color: #3b3939;
    margin-left: auto;
    margin-top: 0;
    margin-right: 0.5%;
    font-family: 'Raleway', sans-serif;
    text-align: right;

    &{
        @media only screen and (max-width: 1310px) {
            font-size: 16px;
            margin-right: 0;
        }
    }
`

export const Skill = () => {
    return (
        <SkillDiv>
            <LeftDiv>
                <H2>Technical Skill</H2>
                <YellowBar></YellowBar>
                <InnerDiv>
                    <SkillBar style={{width: "50%"}}></SkillBar>
                    <H5>HTML</H5>
                </InnerDiv>
                <InnerDiv>
                    <SkillBar style={{width: "46%"}}></SkillBar>
                    <H5>CSS</H5>
                </InnerDiv>
                <InnerDiv>
                    <SkillBar style={{width: "55%"}}></SkillBar>
                    <H5>Javascript</H5>
                </InnerDiv>
            </LeftDiv>
            <RigthDiv>
                <InnerDiv>
                    <SkillBar style={{width: "50%"}}></SkillBar>
                    <H5>REACT</H5>
                </InnerDiv>
                <InnerDiv>
                    <SkillBar style={{width: "45%"}}></SkillBar>
                    <H5>NODE</H5>
                </InnerDiv>
                <InnerDiv>
                    <SkillBar style={{width: "42%"}}></SkillBar>
                    <H5>MONGODB</H5>
                </InnerDiv>
                <InnerDiv>
                    <SkillBar style={{width: "50%"}}></SkillBar>
                    <H5>DATA STRUCTURE</H5>
                </InnerDiv>
            </RigthDiv>
        </SkillDiv>
    )
}