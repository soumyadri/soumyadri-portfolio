import React from 'react';
import styled from 'styled-components';
import LinkLogo from "../../Images/linkLogo.png";
import gitLogo from "../../Images/gitLogo.png";

const Logo = styled.img`
    width: 70px;
    height: 70px;
    margin-left: 19%;
    cursor: pointer;

    &:hover{
      transform: scale(102%);
    }
`

const Logo1 = styled.img`
    width: 40px;
    height: 40px;
    margin-left: auto;
    margin-right: 2%;
    margin-top: 15px;
    cursor: pointer;

    &:hover{
      transform: scale(102%);
    }
`

const Logo2 = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 2%;
    margin-right: 20%;
    margin-top: 15px;
    cursor: pointer;

    &:hover{
      transform: scale(102%);
    }
`

const AppBar = styled.div`
  display: flex;
  border-bottom: 1px solid #d1d1d1;
`

export const DenseAppBar = () => {

  const handleClick1 = () => {
    window.open("https://www.linkedin.com/in/soumyadri-das/", '_blank');
  }
  const handleClick2 = () => {
    window.open("https://github.com/soumyadri/", '_blank');
  }

  return (
    <div>
      <AppBar color="transparent" position="static">
        <Logo title="Soumyadri" className="logo-image" src="https://st2.depositphotos.com/3867453/5745/v/600/depositphotos_57451535-stock-illustration-letter-s-logo-icon-design.jpg" alt="" />
        <Logo1 title="Linkdin" onClick={handleClick1} src={LinkLogo} />
        <Logo2 title="Github" onClick={handleClick2} src={gitLogo} />
      </AppBar>
    </div>
  );
}