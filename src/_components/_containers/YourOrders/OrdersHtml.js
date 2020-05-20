import React from 'react';
import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import FoodImage2 from '../../../_assets/food4.jpg';

const MainDiv = styled.div`
@media (max-width: 768px) {
    max-width:100%;
    margin:0px;
   }
   @media (max-width: 458px) {
   }
`;

const HeaderText = styled.h2`
margin-left:100px;
margin-top:50px;
@media (max-width: 768px) {
    max-width:100%;
    margin:0px;
    margin-left:10%;
    margin-top:5%;
   }
   @media (max-width: 458px) {
   }

`;

const CardDiv = styled.div`

`;

const MainCard = styled(Card)`
margin-left:25%;
margin-right:25%;
cursor:pointer;
@media (max-width: 768px) {
    max-width:100%;
    margin:0px;
   }
   @media (max-width: 458px) {
   }


`;
const CardContentDiv = styled(CardContent)`
height:auto
`;

const OrderItemImage = styled.img`
position:relative;
width:75px;
height:75px;
border-radius:7px;
@media (max-width: 768px) {
    max-width:100%;
    margin:0px;
   }
   @media (max-width: 458px) {
   }
`;

const ContentHeader = styled.h3`
position:absolute;
margin-top:-70px;
margin-left:100px;
@media (max-width: 768px) {
    max-width:100%;
    margin:0px;
    margin-left:22%;
    margin-top:-15%;
   }
   @media (max-width: 458px) {
   }
`;

const Devider = styled.hr`
margin-top:10px;
`;

const ContentText = styled.h5`

`;
const ContentSubText = styled.h5`
margin-left:20px;
color:#566573;
@media (max-width: 768px) {
    max-width:100%;
    margin:0px;
   }
   @media (max-width: 458px) {
   }
`
const ContentSubText1 = styled.h4`
color:#566573;
margin-top:20px;
position:relative;
color:green;
@media (max-width: 768px) {
    max-width:100%;
    margin:0px;
   }
   @media (max-width: 458px) {
   }
`;
const ContentSubText2 = styled.h4`
color:#566573;
margin-left:35%;
margin-top:-28px;
position:absolute;
color:red;
@media (max-width: 768px) {
    position:absolute;
    max-width:100%;
    margin:0px;
    margin-left:40%;
    margin-top:-4%;
   }
   @media (max-width: 458px) {
   }
`
function OrdersHtml(props) {
    return (
        <MainDiv>
            <HeaderText>
            Your Orders :
            </HeaderText>
            <CardDiv>
                <MainCard>
                    <CardContentDiv>
                        <OrderItemImage src={FoodImage2}/><ContentHeader>Paradise - Chicken Biryani</ContentHeader>
                        <Devider />
                        <ContentText>
                            ITEMS
                        </ContentText>
                        <ContentSubText>
                            1 x Chicken Biryani
                        </ContentSubText>
                        <ContentText>
                            ORDERED ON
                        </ContentText>
                        <ContentSubText>
                            13 May 2020 at 1:33 pm
                        </ContentSubText>
                        <ContentText>
                            TOTAL AMOUNT
                        </ContentText>
                        <ContentSubText>
                        ₹ 138.50
                        </ContentSubText>
                        <Devider />
                        <ContentSubText1>
                          Delivered
                        </ContentSubText1>
                        <ContentSubText2>
                            Repeat Your Order ?
                        </ContentSubText2>
                    </CardContentDiv>
                </MainCard>
            </CardDiv>
        </MainDiv>
    );
}

export default OrdersHtml;