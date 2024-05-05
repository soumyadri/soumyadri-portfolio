import styled from 'styled-components';
import React from 'react';
import M1 from '../../Images/music-1.png';
import homepage from '../../Images/webHomePage.png';
import express from '../../Images/express.png';
import css from '../../Images/css.png';
import html5 from '../../Images/html5.png';
import react from '../../Images/react.png';
import javascript from '../../Images/javascript.png';
import nodejs from '../../Images/nodejs.png';
import mongoDb from '../../Images/mongoDb.png';
import tailwind from '../../Images/tailwind.jpg';

const ProjectContainer = styled.div`
    position: relative;
    bottom: 3px;
    width: 63%;
    padding: 3%;
    padding: 5% 10% 5% 10%;
    margin: auto;
    display: grid;
    grid-gap: 2.5%;
    grid-template-columns: auto auto;

    &{
        @media only screen and (max-width: 1100px) {
            flex-direction: column;
            padding: 2% 80px 30% 80px;
            grid-template-columns: auto;
            height: auto;
        }
    }
`

const ProjectUnit = styled.div`
    width: 100%;
    height: auto;
    background-color: #ffffff6a;
    border: 2px solid #c2c1c1;
    margin-top: 0%;
    margin-bottom: 2%;
    padding-bottom: 4%;

    &{
        @media only screen and (max-width: 1100px) {
            margin-left: 0;
        }
    }
`

const Img = styled.img`
    width: 100%;
    max-height: 217px;
    max-width: 755px;
    border-bottom: 1px solid #4b1111;

    &{
        @media only screen and (max-width: 1100px) {
            max-height: 100%;
        }
    }
`

const H3 = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: #444242;
    margin: 12px;
    margin-left: 18px;
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
    width: 64%;
    padding-top: 1%;
    position: relative;
    left: 15px;

    &{
        @media only screen and (max-width: 810px) {
            width: 68%;
        }
    }
`

const PrimaryContainer = styled.div`
    background-color: #e8f0f28d;
`

const ButtonDiv = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 10px;
    margin: 0 10px;
`

const ButtonGit = styled.button`
    padding: 10px 5px;
    background-color: #f8cc3a;
    color: black;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    border-radius: 25px;
    font-weight: 500;
    cursor: pointer;
    border: 1px solid #f8cc3a;

    &:hover{
        transform: scaleX(103%);
        background-color: #f7c82d;
    }
`

const ButtonVideo = styled.button`
    padding: 10px 5px;
    background-color: #f8cc3a;
    color: black;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    border-radius: 25px;
    font-weight: 500;
    cursor: pointer;
    border: 1px solid #f8cc3a;

    &:hover{
        transform: scaleX(103%);
        background-color: #f7c82d;
    }
`

const ButtonSite = styled.button`
    padding: 10px 5px;
    background-color: #f8cc3a;
    color: black;
    font-family: 'Raleway', sans-serif;
    font-size: 17px;
    border-radius: 25px;
    font-weight: 500;
    cursor: pointer;
    border: 1px solid #f8cc3a;

    &:hover{
        transform: scaleX(103%);
        background-color: #f7c82d;
    }
`

const H5 = styled.h5`
    font-size: 16px;
    font-weight: 500;
    color: #3b3939;
    margin: 15px;
    margin-bottom: 20px;
    font-family: 'Raleway', sans-serif;
    text-align: justify;
    text-justify: inter-word;
`

const TechStack = styled.div`
    display: flex;
    margin: 2% 3% 3% 4%;
    width: 90%;
    height: 67px;
    overflow-x: auto;

    ::-webkit-scrollbar {
        width: 5px;
    }
`

const Timg = styled.img`
    width: 42px;
    max-height: 42px;
    margin: 1% 3% 3% 3%;

    &:hover{
        transform: scaleX(101%);
    }

    &{
        @media only screen and (max-width: 1310px) {
            width: 32px;
            max-height: 32px;
            margin: 1% 2% 3% 3%;
        }
    }
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
                    <Img src={homepage} alt="Examination project Soumyadri" loading="lazy" />
                    <H3>Examination Portal</H3>
                    <H5>Acedemia is a exam portal. From here, any school student can give their exam online. Also they can get the result in a second.</H5>
                    <TechStack>
                        <Timg title="HTML" src={html5} />
                        <Timg title="CSS" src={css} />
                        <Timg title="JAVASCRIPT" src={javascript} />
                        <Timg title="REACT" src={react} />
                        <Timg title="NODE" src={nodejs} />
                        <Timg title="EXPRESS" src={express} />
                        <Timg title="MONGODB" src={mongoDb} />
                        <Timg title="TAILWIND" src={tailwind} />
                    </TechStack>
                    <ButtonDiv>
                        <ButtonGit onClick={()=>window.open("https://github.com/soumyadri/webexam-fe", '_blank')}>Frontend</ButtonGit>
                        <ButtonGit onClick={()=>window.open("https://github.com/soumyadri/backend-exam", '_blank')}>Backend</ButtonGit>
                        <ButtonSite onClick={()=>window.open("https://webexam-fe.vercel.app/", '_blank')}>Website</ButtonSite>
                    </ButtonDiv>
                </ProjectUnit>

                <ProjectUnit>
                    <Img src={M1} alt="Drum Kit Soumyadri Das" loading="lazy" />
                    <H3>Music Instrument</H3>
                    <H5>Drum Kit is a music instrument website. From here, you can create different sounds with the help of your keyboard.</H5>
                    <TechStack>
                        <Timg title="HTML5" src={html5} />
                        <Timg title="CSS" src={css} />
                        <Timg title="JAVASCRIPT" src={javascript} />
                    </TechStack>
                    <ButtonDiv>
                        <ButtonGit onClick={()=>window.open("https://github.com/soumyadri/music-instrument", '_blank')}>Github</ButtonGit>
                        <ButtonVideo onClick={()=>window.open("https://drive.google.com/file/d/1LYRNjZTR-1eebYHrjsyYaeVmnMdm1zBW/view", '_blank')}>Video</ButtonVideo>
                        <ButtonSite onClick={()=>window.open("https://soumyadri.github.io/music-instrument/", '_blank')}>Website</ButtonSite>
                    </ButtonDiv>
                </ProjectUnit>
            </ProjectContainer>
        </PrimaryContainer>
    )
}