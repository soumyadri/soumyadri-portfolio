import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

const Logo = styled.img`
    width: 70px;
    height: 70px;
    margin-left: 19%;
    cursor: pointer;
`

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="transparent" position="static">
        <Logo className="logo-image" src="https://st2.depositphotos.com/3867453/5745/v/600/depositphotos_57451535-stock-illustration-letter-s-logo-icon-design.jpg" alt="" />
      </AppBar>
    </div>
  );
}