import styled from 'styled-components';
import React from 'react';
import Fb1 from '../../Images/facebook-clone-1.png';
import Dm1 from '../../Images/dermstore-1.png';
import Hj1 from '../../Images/hotjar-1.png';
import M1 from '../../Images/music-1.png';

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
        @media only screen and (max-width: 1025px) {
            flex-direction: column;
            width: 70%;
            margin-right: 0;
            padding: 10% 80px 10% 80px ;
            grid-template-columns: auto;
        }
    }
`

const ProjectUnit = styled.div`
    width: 100%;
    height: auto;
    background-color: #eafaf8;
    border: 2px solid #adacac;
    margin-top: 0%;
    margin-bottom: 2%;
    padding-bottom: 4%;
`

const Img = styled.img`
    width: 100%;
    max-width: 755px;
    border-bottom: 1px solid #4b1111;
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
    width: 62%;
    padding-top: 1%;
    position: relative;
    left: 15px;
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
    background-color: #ff9419;
    color: white;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    border-radius: 25px;
    font-weight: 500;
    cursor: pointer;

    &:hover{
        transform: scaleX(103%);
    }
`

const ButtonVideo = styled.button`
    padding: 10px 5px;
    background-color: #ff9419;
    color: white;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    border-radius: 25px;
    font-weight: 500;
    cursor: pointer;

    &:hover{
        transform: scaleX(103%);
    }
`

const ButtonSite = styled.button`
    padding: 10px 5px;
    background-color: #ff9419;
    color: white;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;

    &:hover{
        transform: scaleX(103%);
    }
`

const H5 = styled.h5`
    font-size: 16px;
    font-weight: 500;
    color: #3b3939;
    margin: 18px;
    margin-bottom: 20px;
    font-family: 'Raleway', sans-serif;
    justify-content: center;
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
                    <H5>Facebook is a website which allows users, who sign-up for free profiles, to connect with friends, work colleagues or people they don't know, online.</H5>
                    <ButtonDiv>
                        <ButtonGit>Github</ButtonGit>
                        <ButtonVideo>Video</ButtonVideo>
                        <ButtonSite>Website</ButtonSite>
                    </ButtonDiv>
                </ProjectUnit>

                <ProjectUnit>
                    <Img src={Dm1} alt="" />
                    <H3>Dermstore Clone</H3>
                    <H5>Dermstore was created in 1999 by a dermatologist who wanted to better serve his patients with easier access to the treatments their skin needed.</H5>
                    <ButtonDiv>
                        <ButtonGit>Github</ButtonGit>
                        <ButtonVideo>Video</ButtonVideo>
                        <ButtonSite>Website</ButtonSite>
                    </ButtonDiv>
                </ProjectUnit>

                <ProjectUnit>
                    <Img src={Hj1} alt="" />
                    <H3>Hotjar Clone</H3>
                    <H5>Hotjar is a tool that calls itself « all-in-one », as it includes both analytics and the collection of feedback from users. This tool aims to help you understand what visitors do on your website.</H5>
                    <ButtonDiv>
                        <ButtonGit>Github</ButtonGit>
                        <ButtonVideo>Video</ButtonVideo>
                        <ButtonSite>Website</ButtonSite>
                    </ButtonDiv>
                </ProjectUnit>

                <ProjectUnit>
                    <Img src={M1} alt="" />
                    <H3>Music Instrument</H3>
                    <H5>Through this Music Instrument site, you can create different wonderful sounds with the help of your keyboard and mouse. Best looking UI with some cool functionality is present here.</H5>
                    <ButtonDiv>
                        <ButtonGit>Github</ButtonGit>
                        <ButtonVideo>Video</ButtonVideo>
                        <ButtonSite>Website</ButtonSite>
                    </ButtonDiv>
                </ProjectUnit>
            </ProjectContainer>
        </PrimaryContainer>
    )
}