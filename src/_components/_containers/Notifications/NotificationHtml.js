import React from 'react';
import styled from 'styled-components';
import coffee from '../../../_assets/coffee1.jpg';
import Noty from '../../../_assets/noty.jpg';


const MainDiv = styled.div`
@media (max-width: 768px) {
    max-width:100%;
    margin:0px;
   }
   @media (max-width: 458px) {
   }
`;

const HeaderText = styled.h3`
margin-left:30px;
@media (max-width: 768px) {
    max-width:100%;
    margin:0px;
    margin-top:2%;
    margin-left:2%;
   }
   @media (max-width: 458px) {
   }
`;

const AddNewNotification = styled.div`
// border-style: solid;
// border-width: 1px;
position:relative;
margin-left:30%;
margin-right:30%;
cursor:pointer;
color:gray;
@media (max-width: 768px) {
    max-width:100%;
    margin:0px;
    margin-left:1%;
    margin-right:1%;
    margin-top:2%;
    margin-left:2%;
   }
   @media (max-width: 458px) {
   }
`;

const Hr = styled.hr`
margin-left:20%;
margin-right:30%;
@media (max-width: 768px) {

    margin-left:1%;
    margin-right:1%;
   }
   @media (max-width: 458px) {
   }
`;

const Time = styled.p`

`;

const Logo = styled.img`
border-radius:50%;
width:70px;
height:70px;
position:absolute;
left:-25%;
top:-10%;
@media (max-width: 768px) {
    display:none;
   }
   @media (max-width: 458px) {
   }
`;
const Notification = styled.img`
   width:500px;
   height:500px;
   margin-left:30%;
   margin-right:30%;

@media (max-width: 768px) {
    max-width:100%;
    margin:0px;
    height:400px;
    margin-top:10%;
   }
   @media (max-width: 458px) {
   }
`;


function NotificationHtml(props) {
    return (
        <MainDiv>
            {/* <HeaderText>
                Notifications :
            </HeaderText>
            <Hr />

            <AddNewNotification>
            <Logo src={coffee}/>
                Your Item is Delivered Successfully.
                <Time>4:30 pm</Time>
            </AddNewNotification>
            <Hr /> */}

            <Notification src={Noty} />
        </MainDiv>
    );
}

export default NotificationHtml;