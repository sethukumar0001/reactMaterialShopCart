import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ud from '../../_assets/ud5.png';

const BodyDiv = styled.body`
background-color:white;
@media (max-width: 768px) {
    width:100%;
    margin:0px;
  }
  @media (max-width: 458px) {
  }
  @media (width: 375px) {
  }
  @media (width: 425px) { 
  }
`;

const LogoDiv = styled.div`
margin-left:30% !important;
margin-right:30% !important;
margin-top:60px;
@media (max-width: 768px) {
    max-width:100%;
    margin:0%;
  }
  @media (max-width: 458px) {
    max-width:100%;
    margin:0%;
  }
`;
const Logo = styled.img`
width:600px;
height:400px;
margin-top:10px;
@media (max-width: 768px) {
    width:500px;
    margin:0%;
    margin-left:-70%;
    margin-top:10%;
  }
  @media (max-width: 458px) {
  }
`;
const TextDiv = styled.h1`
margin-left:14%;
margin-top:20px;
font-family:fantacy;
@media (max-width: 768px) {
    max-width:100%;
    margin:0%;
  }
  @media (max-width: 458px) {

  }
`;
const SubTextDiv = styled.p`
margin-left:30%;
margin-right:30%;
@media (max-width: 768px) {
    max-width:100%;
    margin:0%;
    margin-top:10%;
  }
  @media (max-width: 458px) {

  }
`;

class PageNotFound extends Component {
    render() {
        return (
            <BodyDiv>
                <LogoDiv>
                    <Logo src={ud} />

                    <TextDiv>Page Under Development</TextDiv>
                    <SubTextDiv><b>We are working on it!</b></SubTextDiv>
                </LogoDiv>
            </BodyDiv>
        )
    }
}
export default PageNotFound; 