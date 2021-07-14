import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import styled from 'styled-components';

const Logo = styled.img`
    width: 70px;
    height: 70px;
    margin-left: 19%;
    cursor: pointer;
`

export default function DenseAppBar() {

  return (
    <div>
      <AppBar color="transparent" position="static">
        <Logo className="logo-image" src="https://st2.depositphotos.com/3867453/5745/v/600/depositphotos_57451535-stock-illustration-letter-s-logo-icon-design.jpg" alt="" />
      </AppBar>
    </div>
  );
}