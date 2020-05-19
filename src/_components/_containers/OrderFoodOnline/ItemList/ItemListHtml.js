import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FoodImage2 from '../../../../_assets/food7.jpg';
import AdjustIcon from '@material-ui/icons/Adjust';



import { toast } from 'react-toastify';


const MainDiv = styled.div`

`;


const CardDiv = styled.div`

`;

const HotelNameText = styled.h2`
margin-left:50px;
`;

const MainCard = styled(Card)`
margin-left:30%;
margin-right:30%;
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
width:80px;
height:80px;
border-radius:10px;
`;

const ContentText = styled.h4`
position:absolute;
margin-top:-6%;
margin-left:7%;
color:#566573;
`;
const ContentSubText = styled.h5`
position:absolute;
font-weight:500px;
color:#808B96;
margin-top:-3%;
margin-left:7%;
`

const RatingDiv = styled.p`
position:absolute;
margin-top:-80px;
margin-left:32%;
background:#F5B041;
padding:2px;
border-radius:5px;
color:white;
`;

const AdjustIconDivVeg = styled(AdjustIcon)`
background-color: white;
position:absolute;
width:15px !important;
margin-left:29%;
color:#145A32;
`;
const AdjustIconDivNonVeg = styled(AdjustIcon)`
background-color: white;
position:absolute;
width:15px !important;
margin-left:29%;
color:#7B241C;
`;

const CountDiv = styled.div`
position absolute;
margin-top:-2%;
margin-left:31%;
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