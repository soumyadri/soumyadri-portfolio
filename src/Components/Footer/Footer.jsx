import React from 'react';
import styled from 'styled-components';
import phone from '../../Images/call_white.svg';
import email from '../../Images/email_white.svg';
import home from '../../Images/home_white.svg';

const Footer = styled.div`
    background-color: #363636;
    color: whitesmoke;
    padding: 0 18%;
    font-size: 20px;
    display: flex;
    font-weight: 600;

    &{
        @media only screen and (max-width: 810px) {
            flex-direction: column;
        }
    }
`

const Phone = styled.div`
    padding: 1%;
    display: flex;
    margin: 0;
    padding: 0;
    margin-left: 3%;
    margin-top: 4%;
    margin-bottom: 1%;
`

const H5 = styled.h4`
    font-size: 14px;
    width: 300px;
    padding-left: 3%;
    margin: 0;
    font-weight: 500;
    line-height: 1.7;

    &:hover{
        transform: scale(101%);
    }
`

const Img = styled.img`
    width: 25px;
    padding-right: 5%;
`

const Container = styled.div`
    width: 70%;
    margin-top: 5%;
    margin-bottom: 4%;

    &{
        @media only screen and (max-width: 810px) {
            width: 85%;
        }
    }
`

const A = styled.a`
    text-decoration: none;
    color: white;
`

export const FooterComponent = () => {
    return (
        <Footer>
            <Container>
                Contact: 
                <Phone>
                    <Img src={phone} alt="" loading="lazy" />
                    <H5><A href="tel:8910753874">8910753874</A></H5>
                </Phone>
                <Phone>
                    <Img src={email} alt="" loading="lazy" />
                    <H5><A href="mailto:soumyadridas@yahoo.com">soumyadridas@yahoo.com</A></H5>
                </Phone>
            </Container>
            <Container>
                Address: 
                <Phone>
                    <Img src={home} alt="" loading="lazy" />
                    <H5>KOLKATA, WEST BENGAL PIN - 712232</H5>
                </Phone>
                <Phone>
                    <H5>@Copyright Soumyadri Das</H5>
                </Phone>
            </Container>
        </Footer>
    )
}