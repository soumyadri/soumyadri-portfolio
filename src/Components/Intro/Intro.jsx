import React from 'react';
import styled from 'styled-components';
import Soumyadri from '../../Images/soumyadri-linkdin.png';

const PrimaryContainer = styled.div`
    width: 60%;
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
    color: #3b3939;
    margin: 8px;
    margin-top: 3%;
    font-family: 'Raleway', sans-serif;

    &{
        @media only screen and (max-width: 900px) {
            font-size: 20px;
        }
    }
`

const Button = styled.div`
    padding: 8px;
    text-align: center;
    border-radius: 10px;
    margin-top: 10%;
    width: 150px;
    font-size: 18px;
    color: #ffffff;
    background-color: #ffd20a;
`

const Img = styled.img`
    margin-left: 35%;
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

export const Intro = () => {
    return (
        <PrimaryContainer>
            <div>
                <H5>Hello</H5>
                <H2>I'm Soumyadri</H2>
                <H4>Full Stack Web Developer</H4>
                <Button>View Work</Button>
            </div>
            <div>
                <Img src={Soumyadri} alt="" />
            </div>
        </PrimaryContainer>
    )
}