import styled from 'styled-components';
import React from 'react';
import Fb1 from '../../Images/facebook-clone-1.png';
import Dm1 from '../../Images/dermstore-1.png';
import Hj1 from '../../Images/hotjar-1.png';
import M1 from '../../Images/music-1.png';

const ProjectContainer = styled.div`
    position: relative;
    bottom: 3px;
    width: 60%;
    padding: 3%;
    padding: 5% 18% 5% 20%;
    margin: auto;
    display: grid;
    grid-gap: 5%;
    grid-template-columns: auto auto;

    &{
        @media only screen and (max-width: 725px) {
            flex-direction: column;
            width: 60%;
            padding: 10% auto 10% auto ;
            grid-template-columns: auto;
        }
    }
`

const ProjectUnit = styled.div`
    width: 99%;
    height: auto;
    background-color: #d3fdf8;
    border: 2px solid #ffb184;
    margin-top: 0%;
    padding-bottom: 2%;
    cursor: pointer;

    &:hover{
        transform: scaleX(103%);
    }
`

const Img = styled.img`
    width: 100%;
    max-width: 485px;
    border-bottom: 1px solid #4b1111;
`

const H3 = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: #444242;
    margin: 12px;
    margin-top: 3%;
    font-family: 'Raleway', sans-serif;

    &{
        @media only screen and (max-width: 900px) {
            font-size: 22px;
        }
    }
`

const YellowBar = styled.div`
    width: 20%;
    height: 10px;
    background-color: yellow;
    margin: 0;

    &{
        @media only screen and (max-width: 1310px) {
            width: 40%;
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
    margin: auto;
    width: 62%;
    padding-top: 1%;
    position: relative;
    left: 15px;
`

const PrimaryContainer = styled.div`
    background-color: #e8f0f28d;
`

export const Project = () => {
    return (
        <PrimaryContainer>
            <LeftDiv>
                <H2>Projects</H2>
                <YellowBar></YellowBar>
            </LeftDiv>
            <ProjectContainer>
                <ProjectUnit>
                    <Img src={Fb1} alt="" />
                    <H3>Facebook Clone</H3>
                </ProjectUnit>

                <ProjectUnit>
                    <Img src={Dm1} alt="" />
                    <H3>Dermstore Clone</H3>
                </ProjectUnit>

                <ProjectUnit>
                    <Img src={Hj1} alt="" />
                    <H3>Hotjar Clone</H3>
                </ProjectUnit>

                <ProjectUnit>
                    <Img src={M1} alt="" />
                    <H3>Music Instrument</H3>
                </ProjectUnit>
            </ProjectContainer>
        </PrimaryContainer>
    )
}