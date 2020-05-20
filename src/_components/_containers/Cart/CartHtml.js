import React, { useEffect, useState } from 'react';
import CartData from '../Json/app';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FoodImage2 from '../../../_assets/food7.jpg';
import CartEmpty from '../../../_assets/cart1.png';
import res1 from '../../../_assets/res1.jpg';
import AdjustIcon from '@material-ui/icons/Adjust';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

import { toast } from 'react-toastify';



const MainDiv = styled.div`
@media (max-width: 768px) {
    max-width:100%;
    margin:0px;
   }
   @media (max-width: 458px) {
   }
`;


const CardDiv = styled.div`

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
    margin:0px;
    margin-top:5%;
   }
   @media (max-width: 458px) {
   }
`;
const CardContentDiv = styled(CardContent)`
// background-color:#F8F9F9;
`;

const ResturantName = styled.p`
position:absolute;
margin-left:1.5%;
margin-top:-1px;
@media (max-width: 768px) {
    max-width:100%;
    margin:0px;
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
    margin:0px;
   }
   @media (max-width: 458px) {
   }
`;

const CartEmptyImage = styled.img`
width:400px;
height:400px;
margin-left:36%;
margin-top:10%;
@media (max-width: 768px) {
    max-width:100%;
    margin:0px;
    margin-top:30%;
    // margin-left:-5%
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
    margin:0px;
    margin-top:-21%;
    margin-left:30%;
   }
   @media (max-width: 458px) {
   }
`;
const ContentSubText = styled.h4`
position:absolute;
font-weight:500px;
color:#808B96;
margin-top:-4%;
margin-left:7%;
@media (max-width: 768px) {
    position:absolute;
    max-width:100%;
    margin:0px;
    margin-top:-12%;
    margin-left:30%;
   }
   @media (max-width: 458px) {
   }
`

const RatingDiv = styled.p`
position:absolute;
margin-top:-6%;
margin-left:32%;
background:#F5B041;
padding:2px;
border-radius:5px;
color:white;
@media (max-width: 768px) {
    position:absolute;
    max-width:100%;
    margin:0px;
    margin-top:-21%;
    margin-left:80%;
   }
   @media (max-width: 458px) {
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
    margin:0px;
    margin-left:2%;
   }
   @media (max-width: 458px) {
   }
`;

const AdjustIconDivNonVeg = styled(AdjustIcon)`
background-color: white;
position:absolute;
width:15px !important;
margin-left:29%;
margin-top:-5px;
color:#7B241C;
@media (max-width: 768px) {
    position:absolute;
    max-width:100%;
    margin:0px;
    margin-left:2%;
   }
   @media (max-width: 458px) {
   }
`;

const CountDiv = styled.div`
position absolute;
margin-top:-20px;
margin-left:31%;
@media (max-width: 768px) {
    position absolute;
    max-width:100%;
    margin:0px;
    margin-left:70%;
    margin-top:-6%;
   }
   @media (max-width: 458px) {
   }
`;

const AddCircleIconDiv = styled(AddCircleIcon)`
margin-top:10px !important;
margin-right:12px;
color:#2ECC71;
`;

const RemoveCircleIconDiv = styled(RemoveCircleIcon)`
margin-top:10px !important;
margin-left:10px;
color:#E74C3C;
`;

const DeleteForeverIconDiv = styled(DeleteForeverIcon)`
position:absolute;
margin-top:80px !important;
margin-left:-6.5% !important;
color:red;
@media (max-width: 768px) {
    position absolute;
    max-width:100%;
    margin:0px;
    margin-left:-2% !important;
   }
   @media (max-width: 458px) {
   }
`;

const MonetizationOnIconDiv = styled(MonetizationOnIcon)`
position:absolute;
margin-top:5% !important;
margin-left:10% !important;
color:#2ECC71;
`;

const TotalAmountDiv = styled.div`
position:absolute;
margin-top:-8px !important;
margin-left:18% !important;
color:#2ECC71;
@media (max-width: 768px) {
    position absolute;
    max-width:100%;
    margin:0px;
    margin-left:45% !important;
   }
   @media (max-width: 458px) {
   }
`;

const CountTag = styled.span`
position:absolute;
margin-top:13px !important;
margin-left:28px;
`;

const CheckoutCardDiv = styled.div`

`;
const CheckoutCard = styled(Card)`

`;


function CartHtml(props) {

    const [CartArray, setCartArray] = useState(props.cartData)
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
            {/* <center> <RestuarantImage src={res1} />
            </center> */}
            {CartArray.length !== 0 ? CartArray.map((item, index) => {
                return (
                    <CardDiv>
                        <MainCard >
                            <CardContentDiv>
                                <OrderItemImage src={FoodImage2} />
                                {item.type === "veg" ? <AdjustIconDivVeg /> : <AdjustIconDivNonVeg />}
                                <ContentText>
                                    {item.itemName}
                                </ContentText>
                                <ResturantName>{item.hotelName}</ResturantName>
                                <ContentSubText>
                                    ₹ {item.price}
                                </ContentSubText>
                                <RatingDiv onClick={toastMethod}>
                                    {item.votes}
                                </RatingDiv>
                                {/* <MonetizationOnIconDiv></MonetizationOnIconDiv> */}
                                <TotalAmountDiv>{item.quantity * item.price}</TotalAmountDiv>
                                <CountDiv>
                                    <CountTag>{item.quantity}</CountTag>
                                    <AddCircleIconDiv onClick={() => props.IncCartItem(item.id)} />
                                    <RemoveCircleIconDiv onClick={() => props.DecCartItem(item.id)} />
                                </CountDiv>
                                <DeleteForeverIconDiv onClick={() => props.RemoveCartItem(index)} />
                            </CardContentDiv>
                        </MainCard>
                    </CardDiv>
                )
            }) : <CartEmptyImage src={CartEmpty} />}

        </MainDiv>
    );
}

export default CartHtml;