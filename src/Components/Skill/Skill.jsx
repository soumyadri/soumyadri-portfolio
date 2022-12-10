import React from 'react';
import styled from 'styled-components';
import express from '../../Images/express.png';
import css from '../../Images/css.png';
import html5 from '../../Images/html5.png';
import react from '../../Images/react.png';
import javascript from '../../Images/javascript.png';
import nodejs from '../../Images/nodejs.png';
import mongoDb from '../../Images/mongoDb.png';
import redux from '../../Images/redux.png';
import materialUi from '../../Images/material-ui.png';
import tailwind from '../../Images/tailwind.jpg';
import LazyLoad from 'react-lazyload';

const SkillDiv = styled.div`
    background-color: #fff;
    width: 62%;
    margin: auto;
    padding: 3% 18% 3% 18%;
    display: flex;
    flex-direction: column;
    animation-name: animation1;
    animation-duration: 2.5s;

    @keyframes animation1 {
        from {opacity: 0;}
        to {opacity: 1;}
    }
    
    &{
        @media only screen and (max-width: 1110px) {
            flex-direction: column;
            width: 62%;
            height: 800px;
        }

        @media only screen and (max-width: 780px) {
            flex-direction: column;
            width: 62%;
            height: 750px;
        }

        @media only screen and (max-width: 550px) {
            flex-direction: column;
            width: 62%;
            height: 600px;
        }

        @media only screen and (max-width: 350px) {
            flex-direction: column;
            width: 62%;
            height: 500px;
        }
    }
`

const H2 = styled.h2`
    font-size: 33px;
    color: #272727e6;
    font-weight: 700;
    font-family: 'Raleway', sans-serif;
    margin: 5px;
    margin-left: 0px;
`

const YellowBar = styled.div`
    width: 30%;
    height: 10px;
    background-color: yellow;
    margin: 0;
    margin-bottom: 5%;
    margin-left: 0px;
`


const LeftDiv = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    grid-gap: 10%;
    padding-bottom: 5%;

    &{
        @media only screen and (max-width: 1110px) {
            grid-template-columns: auto auto auto;
            grid-gap: 10%;
        }
    }
`

const InnerDiv = styled.div`
    display: flex;
    width: 90%;
    margin-top : 20px;
`

const Img = styled.img`
    width: 100%;
    max-height: 130px;
    max-width: 130px;
    

    &:hover{
        transform: scaleX(101%);
    }

    &{
        @media only screen and (max-width: 1310px) {
            max-height: 110px;
            max-width: 110px;
        }
    }
`

export const Skill = () => {
    return (
        <LazyLoad>
            <SkillDiv>
                <H2>Technical Skills</H2>
                <YellowBar></YellowBar>
                <LeftDiv>
                    <InnerDiv>
                        <Img title="HTML" src={html5} alt="" />
                    </InnerDiv>
                    <InnerDiv>
                        <Img title="CSS" src={css} alt="" />
                    </InnerDiv>
                    <InnerDiv>
                        <Img title="Javascript" src={javascript} alt="" />
                    </InnerDiv>
                    <InnerDiv>
                        <Img title="React" src={react} alt="" />
                    </InnerDiv>
                    <InnerDiv>
                        <Img title="Redux" src={redux} alt="" />
                    </InnerDiv>
                
                    <InnerDiv>
                        <Img title="NodeJS" src={nodejs} alt="" />
                    </InnerDiv>
                    <InnerDiv>
                        <Img title="Express" src={express} alt="" />
                    </InnerDiv>
                    <InnerDiv>
                        <Img title="MongoDB" src={mongoDb} alt="" />
                    </InnerDiv>
                    <InnerDiv>
                        <Img title="Material UI" src={materialUi} alt="" />
                    </InnerDiv>
                    <InnerDiv>
                        <Img title="Tailwind CSS" src={tailwind} alt="" />
                    </InnerDiv>
                </LeftDiv>
            </SkillDiv>
        </LazyLoad>
    )
}