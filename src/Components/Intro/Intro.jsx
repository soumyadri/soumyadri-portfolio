import React from 'react';
import styled from 'styled-components';
import Soumyadri from '../../Images/soumyadri-linkdin.png';

const PrimaryContainer = styled.div`
    width: 62%;
    margin: auto;
    display: flex;

    &{
        @media only screen and (max-width: 1010px) {
            flex-direction: column;
        }
    }
`

const H5 = styled.h5`
    font-size: 18px;
    font-weight: 500;
    color: #3b3939;
    margin: 8px;
    margin-top: 28%;
    font-family: 'Raleway', sans-serif;

    &{
        @media only screen and (max-width: 1310px) {
            margin-top: 10%;
        }
    }
`

const H2 = styled.h2`
    font-size: 55px;
    font-weight: 700;
    color: #3b3939;
    margin: 5px;
    margin-top: 5%;
    font-family: 'Raleway', sans-serif;
    animation-name: animation1;
    animation-duration: 2s;

    @keyframes animation1 {
        from {opacity: 0;}
        to {opacity: 1;}
    }

    &{
        @media only screen and (max-width: 900px) {
            font-size: 45px;
        }
    }
`

const H4 = styled.h4`
    font-size: 22px;
    font-weight: 500;
    color: #5f0808;
    margin: 8px;
    margin-top: 3%;
    font-family: 'Raleway', sans-serif;

    &{
        @media only screen and (max-width: 900px) {
            font-size: 20px;
        }
    }
`

const Img = styled.img`
    margin-left: 36%;
    width: 95%;
    animation-name: animation1;
    animation-duration: 2s;

    @keyframes animation1 {
        from {opacity: 0;}
        to {opacity: 1;}
    }

    &{
        @media only screen and (max-width: 1310px) {
            margin-left: 20%;
            max-width: 300px;
        }
    }
`

const Button = styled.button`
    background-color: #ffb62f;
    color: white;
    font-size: 17px;
    margin-left: 10px;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid #ffb62d;
    margin-top: 10px;
    cursor: pointer;

    &:hover{
        background-color: #f8a711f0;
    }
`

export const Intro = () => {
    return (
        <PrimaryContainer>
            <div>
                <H5>Hello</H5>
                <H2>I'm <span style={{color: "#942828"}}>Soumyadri</span></H2>
                <H4>Full Stack Web Developer</H4>
                <Button onClick={()=>window.open("https://drive.google.com/file/d/1ruWvcB0h3Zd2FoflSv7wcWjWXNfd8is8/view?usp=sharing", '_blank')}>View Resume</Button>
            </div>
            <div>
                <Img src={Soumyadri} alt="" />
            </div>
        </PrimaryContainer>
    )
}