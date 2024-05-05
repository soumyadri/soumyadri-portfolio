import React from 'react';
import styled from 'styled-components';
import Soumyadri from '../../Images/soumyadri-linkdin-1.jpg';

const PrimaryContainer = styled.div`
    width: 62%;
    margin: auto;
    display: flex;
    justify-content: space-between;

    &{
        @media only screen and (max-width: 1010px) {
            flex-direction: column;
        }
    }
`

const H5 = styled.h5`
    font-size: 20px;
    font-weight: 600;
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

const H2 = styled.h1`
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

const H4 = styled.h2`
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
    width: 95%;
    animation-name: animation1;
    animation-duration: 1.5s;

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
    background-color: #105fe8;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    font-family: 'Raleway', sans-serif;
    margin-left: 10px;
    border-radius: 6px;
    padding: 10px 15px;
    border: 1px solid #0b55d6;
    margin-top: 10px;
    cursor: pointer;

    &:hover{
        background-color: #145ede;
    }
`

export const Intro = () => {
    return (
        <PrimaryContainer>
            <div>
                <H5>Hi</H5>
                <H2>I'm <span style={{color: "#942828"}}>Soumyadri</span></H2>
                <H4>Full Stack Web Developer</H4>
                <Button onClick={()=>window.open("https://drive.google.com/file/d/1fU2h0wIrEcNYoFrrH0i02PHV5VLRjbMA/view", '_blank')}>View Resume</Button>
            </div>
            <div>
                <Img src={Soumyadri} alt="soumyadri das photo" loading="lazy" />
            </div>
        </PrimaryContainer>
    )
}