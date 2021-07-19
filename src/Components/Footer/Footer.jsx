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
    margin-top: 3%;
    margin-bottom: 2%;
`

const H5 = styled.h5`
    font-size: 15px;
    width: 300px;
    padding-left: 3%;
    margin: 0;
    font-weight: 500;
`

const Img = styled.img`
    width: 25px;
    padding-right: 5%;
`

const Container = styled.div`
    width: 80%;
    margin-top: 4%;
    margin-bottom: 2%;
`

export const FooterComponent = () => {
    return (
        <Footer>
            <Container>
                Contact: 
                <Phone>
                    <Img src={phone} alt="" />
                    <H5>8910753874</H5>
                </Phone>
                <Phone>
                    <Img src={email} alt="" />
                    <H5>soumyadridas@yahoo.com</H5>
                </Phone>
            </Container>
            <Container>
                Address: 
                <Phone>
                    <Img src={home} alt="" />
                    <H5>100 BGG SARANI BHADRAKALI UTTARPARA, WEST BENGAL PIN - 712232</H5>
                </Phone>
            </Container>
        </Footer>
    )
}