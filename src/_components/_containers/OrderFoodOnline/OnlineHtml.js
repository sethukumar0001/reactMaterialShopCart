import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import CartData from '../Json/app';

import FoodImage2 from '../../../_assets/food7.jpg';
import history from '../../../_helpers/history';


const MainDiv = styled.div`

`;


const CardDiv = styled.div`

`;

const MainCard = styled(Card)`
margin-left:25%;
margin-right:25%;
cursor:pointer;
margin-top:20px;
height:auto;
width:auto;


`;
const CardContentDiv = styled(CardContent)`
// background-color:#F8F9F9;
`;

const OrderItemImage = styled.img`
position:relative;
width:100px;
height:100px;
border-radius:10px;
`;

const ContentHeader = styled.h4`
position:absolute;
margin-top:-7.5%;
margin-left:180px;
color:#273746;
`;


const ContentText = styled.h5`
position:absolute;
margin-top:-5.5%;
margin-left:180px;
color:#566573;
`;
const ContentSubText = styled.h5`
position:absolute;
font-weight:500px;
color:#808B96;
margin-top:-3.5%;
margin-left:180px
`
const ContentSubText1 = styled.h5`
position:absolute;
font-weight:500px;
color:#DC7633;
margin-top:-1.5%;
margin-left:180px
`;

const ContentSubText2 = styled.h5`
position:absolute;
font-weight:500px;
color:#45B39D;
margin-top:-13px;
margin-left:180px
`;

const RatingDiv = styled.p`
position:absolute;
margin-top:-7%;
margin-left:43%;
background:#28B463;
padding:3px;
border-radius:5px;
color:white;
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
