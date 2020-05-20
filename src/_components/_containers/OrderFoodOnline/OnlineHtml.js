import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import CartData from '../Json/app';

import FoodImage2 from '../../../_assets/food7.jpg';
import history from '../../../_helpers/history';


const MainDiv = styled.div`
@media (max-width: 768px) {
    max-width:100%;
    margin:0%;
  }
  @media (max-width: 458px) {
  }
`;


const CardDiv = styled.div`
@media (max-width: 768px) {
    max-width:100%;
    margin:0%;
  }
  @media (max-width: 458px) {
  }

`;

const MainCard = styled(Card)`
margin-left:25%;
margin-right:25%;
cursor:pointer;
margin-top:20px;
height:auto;
width:auto;
@media (max-width: 768px) {
    max-width:100%;
    margin:0%;
    margin-top:5%;
  }
  @media (max-width: 458px) {
  }


`;
const CardContentDiv = styled(CardContent)`
// background-color:#F8F9F9;
@media (max-width: 768px) {
    max-width:100%;
    margin:0%;
    margin-top:5%;
  }
  @media (max-width: 458px) {
  }
`;

const OrderItemImage = styled.img`
position:relative;
width:100px;
height:100px;
border-radius:10px;
@media (max-width: 768px) {
    max-width:100%;
    margin:0%;
  }
  @media (max-width: 458px) {
  }
`;

const ContentHeader = styled.h4`
position:absolute;
margin-top:-7.5%;
margin-left:180px;
color:#273746;
@media (max-width: 768px) {
    position:absolute;
    max-width:100%;
    margin:0%;
    margin-top:-30%;
    margin-left:35%;
  }
  @media (max-width: 458px) {
  }
`;


const ContentText = styled.h5`
position:absolute;
margin-top:-5.5%;
margin-left:180px;
color:#566573;
@media (max-width: 768px) {
    position:absolute;
    max-width:100%;
    margin:0%;
    margin-top:-20%;
    margin-left:35%;
  }
  @media (max-width: 458px) {
  }
`;
const ContentSubText = styled.h5`
position:absolute;
font-weight:500px;
color:#808B96;
margin-top:-3.5%;
margin-left:180px
@media (max-width: 768px) {
    position:absolute;
    max-width:100%;
    margin:0%;
    margin-top:-10%;
    margin-left:35%;
  }
  @media (max-width: 458px) {
    margin-top:-10%;
    margin-left:35% !important;
  }
`
const ContentSubText1 = styled.h5`
position:absolute;
font-weight:500px;
color:#DC7633;
margin-top:-1.5%;
margin-left:180px
@media (max-width: 768px) {
    position:absolute;
    max-width:100%;
    margin:0%;
    // margin-top:%;
    margin-left:45% !important;
  }
  @media (max-width: 458px) {
      
    margin-left:35% !important;
  }
`;

const RatingDiv = styled.p`
position:absolute;
margin-top:-7%;
margin-left:43%;
background:#28B463;
padding:3px;
border-radius:5px;
color:white;
@media (max-width: 768px) {
    position:absolute;
    max-width:100%;
    margin:0%;
    margin-top:-37%;
    margin-left:75% !important;
  }
  @media (max-width: 458px) {
  }
`;


function OnlineHtml(props) {
    return (
        <MainDiv>
            {CartData.map((item, index) => {
                return (
                    <CardDiv>
                        <MainCard >
                            <CardContentDiv>
                                <OrderItemImage src={FoodImage2} /><ContentHeader onClick={() => props.ItemPage(item.hotelName)}>{item.hotelName}</ContentHeader>
                                <ContentText>
                                    {item.style}
                                </ContentText>
                                <ContentSubText>
                                    ₹ {item.price} per person | {item.time}
                                </ContentSubText>
                                <ContentSubText1>
                                    {item.offer}
                                </ContentSubText1>
                                {/* <ContentSubText2>
                                    {item.instructions}
                                </ContentSubText2> */}
                                <RatingDiv>
                                    {item.rating}
                                </RatingDiv>


                            </CardContentDiv>
                        </MainCard>
                    </CardDiv>
                )
            })}
        </MainDiv>
    );
}

export default OnlineHtml;
