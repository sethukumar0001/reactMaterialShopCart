import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FoodImage2 from '../../../../_assets/food7.jpg';
import AdjustIcon from '@material-ui/icons/Adjust';



import { toast } from 'react-toastify';


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

const HotelNameText = styled.h3`
margin-left:50px;
@media (max-width: 768px) {
    max-width:100%;
    margin:0%;
    margin-left:10%;
    margin-top:10%;
  }
  @media (max-width: 458px) {

  }
`;

const MainCard = styled(Card)`
margin-left:30%;
margin-right:30%;
cursor:pointer;
margin-top:20px;
height:auto;
width:auto;
@media (max-width: 768px) {
    max-width:100%;
    margin:0%;
    margin-top:10%;
    height:auto;
  }
  @media (max-width: 458px) {

  }
`;
const CardContentDiv = styled(CardContent)`
// background-color:#F8F9F9;
@media (max-width: 768px) {
    max-width:100%;
    margin:0%;
  }
  @media (max-width: 458px) {

  }
`;

const OrderItemImage = styled.img`
position:relative;
width:80px;
height:80px;
border-radius:10px;
@media (max-width: 768px) {
    max-width:100%;
    margin:0%;
  }
  @media (max-width: 458px) {

  }
`;

const ContentText = styled.h4`
position:absolute;
margin-top:-6%;
margin-left:7%;
color:#566573;
@media (max-width: 768px) {
    position:absolute;
    max-width:100%;
    margin:0%;
  }
  @media (max-width: 458px) {
    position:absolute;
    max-width:100%;
    margin-top:-24%;
    margin-left:30%;
  }
`;
const ContentSubText = styled.h5`
position:absolute;
font-weight:500px;
color:#808B96;
margin-top:-3%;
margin-left:7%;
@media (max-width: 768px) {
    position:absolute;
    max-width:100%;
    margin:0%;
  }
  @media (max-width: 458px) {
    position:absolute;
    max-width:100%;
    margin-top:-14%;
    margin-left:30%;
  }
`

const RatingDiv = styled.p`
position:absolute;
margin-top:-80px;
margin-left:32%;
background:#F5B041;
padding:2px;
border-radius:5px;
color:white;
@media (max-width: 768px) {
    position:absolute;
    max-width:100%;
    margin:0%;
  }
  @media (max-width: 458px) {
    position:absolute;
    max-width:100%;
    margin-top:-24%;
    margin-left:80%;
  }
`;

const AdjustIconDivVeg = styled(AdjustIcon)`
background-color: white;
position:absolute;
width:15px !important;
margin-left:29%;
color:#145A32;
@media (max-width: 768px) {
    position:absolute;
    max-width:100%;
    margin:0%;
    margin-left:48% !important;
    margin-top:-2% !important;
  }
  @media (max-width: 458px) {
    max-width:100%;
    margin:0%;
 

  }

`;
const AdjustIconDivNonVeg = styled(AdjustIcon)`
background-color: white;
position:absolute;
width:15px !important;
margin-left:29%;
color:#7B241C;
@media (max-width: 768px) {
    position:absolute;
    max-width:100%;
    margin:0%;
    margin-left:48% !important;
    margin-top:-2% !important;
  }
  @media (max-width: 458px) {
    max-width:100%;
    margin:0%;
 

  }

`;

const CountDiv = styled.div`
position absolute;
margin-top:-2%;
margin-left:31%;
@media (max-width: 768px) {
    position:absolute;
    max-width:100%;
    margin:0%;
  }
  @media (max-width: 458px) {
    position:absolute;
    max-width:100%;
    margin-top:-8%;
    margin-left:60%;
  }
`;
const CountTag = styled.span`
position:absolute;
margin-top:10px !important;
margin-left:28px;
background-color:green;
padding:5px;
color:white;
border-radius:4px;
&:hover {
    color:black
}
`;


function ItemListHtml(props) {
    const toastMethod = () => toast.success("You Clicked Rating",
        {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }
    );


    return (
        <MainDiv>
            <HotelNameText>Restuarant Name : {props.hotelName}</HotelNameText>
            {props.CartArray.map((item, index) => {
                return (
                    <CardDiv>

                        <MainCard >
                            <CardContentDiv>
                                <OrderItemImage src={FoodImage2} />{item.type === "veg" ? <AdjustIconDivVeg /> : <AdjustIconDivNonVeg />}
                                <ContentText>
                                    {item.itemName}
                                </ContentText>
                                <ContentSubText>
                                    ₹ {item.price}
                                </ContentSubText>
                                <RatingDiv onClick={toastMethod}>
                                    {item.votes}
                                </RatingDiv>
                                <CountDiv>
                                    <CountTag onClick={() => props.addToCart(item)}>Add</CountTag>
                                </CountDiv>
                            </CardContentDiv>
                        </MainCard>
                    </CardDiv>
                )
            })}

        </MainDiv>
    );
}

export default ItemListHtml;