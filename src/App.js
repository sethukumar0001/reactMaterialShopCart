import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Menu from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import HomeIcon from '@material-ui/icons/Home';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import SettingsIcon from '@material-ui/icons/Settings';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import InfoIcon from '@material-ui/icons/Info';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Drawer from '@material-ui/core/Drawer';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HomePage from './_components/_containers/HomePage/HomePage';
import PageNotFound from './_components/Page-Not-Found/PageNotFound';
import OrdersHtml from './_components/_containers/YourOrders/Orders';
import Cart from './_components/_containers/Cart/Cart';
import Online from './_components/_containers/OrderFoodOnline/Online';
import ItemList from './_components/_containers/OrderFoodOnline/ItemList/ItemList';

import SE from '../src/_assets/se2.jpg';
import MoodIcon from '@material-ui/icons/Mood';




const MainDiv = styled.main`
@media (max-width: 768px) {
  // background-color:#F8F9F9 !important;
    width:100%;
    margin:0px;
    overflow:hidden;
  }
  @media (max-width: 458px) {
    width:100%;
  }
  @media (width: 375px) {
    width:100%;
  }
  @media (width: 425px) {
    width:100%;
  }
`;
const StyledHeaderWrapper = styled.div`
  background-color:#212F3D;
  height:55px;
`;

const StyledHeader = styled.header`
  display: flex;
`;

const MenuIconButton = styled.div`
  margin-top:15px;
  margin-left:30px;
  color:white;
  cursor:pointer;
  @media (max-width: 768px) {
    display:flex;
    max-width:100%;
    margin-top: 19px;
  }
  @media (max-width: 458px) {
    margin-right: 90%;
  }
  @media (width: 375px) {
  }
  @media (width: 425px) {
  }

`;
const CloseIconButton = styled.div`
  margin-left: 300px;
  margin-top: 12px;
  width:30px !important;
  cursor:pointer;
  @media (max-width: 768px) {
    max-width:100%;
    margin:0px;
    margin-left:90%;
    margin-top: 3%;
  }
  @media (max-width: 458px) {
    width:100%;
  }
`;

const Nav = styled.nav`
  @media (max-width: 768px) {
    display:none;
   }
   @media (max-width: 458px) {
    display:none;
   }
`;

const Ul = styled.ul`
  @media (max-width: 768px) {
    max-width:100%;
    margin:0px;
   }
   @media (max-width: 458px) {
   }
`;

const Li = styled.li`
  display: inline-block;
  padding: 4px 10px;
  margin-top:6px;
  @media (max-width: 768px) {
    max-width:100%;
    margin:0px;
   }
   @media (max-width: 458px) {
   }
`;

const A = styled.a`
  font-family: Impact, fantasy;
  transition: all 0.3s ease 0s;
  color:white;
  &:hover {
    color: green;
  }
  margin-right:50px;
  @media (max-width: 768px) {
    color: 	darkslategray;
    max-width:100%;
    margin:0px;
  }
    @media (max-width: 458px) {
     color: darkslategray;
    }
`;


const DrawerNav = styled.nav`
postion:relative;
display:block;
margin-top:100px;
@media (max-width: 768px) {
  max-width:100% important;
  margin:20px;
 }
 @media (max-width: 458px) {
 }
`;

const DrawerLi = styled.li`
margin-top:20px;
@media (max-width: 768px) {
  max-width:100%;
  margin:0px;
  padding:10px;
  margin-left:10%;
 }
 @media (max-width: 458px) {
 }
`;

const DrawerUl = styled.ul`
list-style: none;
@media (max-width: 768px) {
  max-width:100%;
  margin:0px;
 }
 @media (max-width: 458px) {
 }
`;

const As = styled.a`
padding:15px;
  font-family: Impact, fantasy;
  transition: all 0.3s ease 0s;
  font-size:19px;
  color:#566573;
  &:hover {
    color: black;
  }
  margin-right:70px;
  margin-left:60px;
  text-decoration: none;
  @media (max-width: 768px) {
    color: 	darkslategray;
    max-width:100% !important;
    margin:0px;
  }
    @media (max-width: 458px) {
     color: darkslategray;
    }
`;


//drawer icons

const OrderIconDiv = styled(ChildFriendlyIcon)`
background-color: white;
position:absolute;
margin-left:30px;
@media (max-width: 768px) {
  max-width:100%;
  margin:0px;
  margin-left:-5%
 }
 @media (max-width: 458px) {
 }
`;
const ProfileIconDivD = styled(SupervisorAccountIcon)`
background-color: white;
position:absolute;
margin-left:30px;
@media (max-width: 768px) {
  max-width:100%;
  margin:0px;
  margin-left:-5%
 }
 @media (max-width: 458px) {
 }

`;
const HomeIconDivD = styled(HomeIcon)`
background-color: white;
position:absolute;
margin-left:30px;
@media (max-width: 768px) {
  max-width:100%;
  margin:0px;
  margin-left:-5%
 }
 @media (max-width: 458px) {
 }
`;
const SettingsIconDiv = styled(SettingsIcon)`
background-color: white;
position:absolute;
margin-left:30px;
`;

const ContactMailIconDiv = styled(ContactMailIcon)`
background-color: white;
position:absolute;
margin-left:30px;
@media (max-width: 768px) {
  max-width:100%;
  margin:0px;
  margin-left:-5%
 }
 @media (max-width: 458px) {
 }
`;
const InfoIconDiv = styled(InfoIcon)`
background-color: white;
position:absolute;
margin-left:30px;
@media (max-width: 768px) {
  max-width:100%;
  margin:0px;
  margin-left:-5%
 }
 @media (max-width: 458px) {
 }
`;

const FastfoodIconDiv = styled(FastfoodIcon)`
background-color: white;
position:absolute;
margin-left:30px;
@media (max-width: 768px) {
  max-width:100%;
  margin:0px;
  margin-left:-5%
 }
 @media (max-width: 458px) {
 }
`;

const NotificationsActiveIconDiv = styled(NotificationsActiveIcon)`
background-color: white;
position:absolute;
margin-left:30px;
@media (max-width: 768px) {
  max-width:100%;
  margin:0px;
  margin-left:-5%
 }
 @media (max-width: 458px) {
 }
`;

const AddShoppingCartIconDiv = styled(AddShoppingCartIcon)`
// background-color: white;
position:absolute;
margin-left:85%;
margin-top:-10px;
  @media (max-width: 768px) {
    display:flex !important;
    max-width:100%;
  }
  @media (max-width: 458px) {
    margin-right: 90%;
  }
  @media (width: 375px) {
  }
  @media (width: 425px) {
  }
`;
const AddShoppingCartIconDivDrawer = styled(AddShoppingCartIcon)`
background-color: white;
position:absolute;
margin-left:30px;
@media (max-width: 768px) {
  max-width:100%;
  margin:0px;
  margin-left:-5%
 }
 @media (max-width: 458px) {
 }
`;
const ShoppingCartCount = styled.p`
position:absolute;
margin-left:86.6%;
margin-top:-22px;
color:white;
@media (max-width: 768px) {
  position:absolute;
  max-width:100%;
  margin:0px;
  margin-left:-5%
 }
 @media (max-width: 458px) {
 }

`;

const MoodIconDiv = styled(MoodIcon)`
position:absolute;
margin-top:-25px;
color:white;
margin-left:83%;
cursor:pointer;
`;

const ProfileImg = styled.img`
border-radius:50%;
width:150px;
height:150px;
margin-top:-100px;
margin-left:50px;
@media (max-width: 768px) {
  max-width:90%;
  margin:0px;
  margin-left:-20%;
}
@media (max-width: 458px) {
  width:100%;
}
`;



function App() {

  const CartCount = useSelector(state => state.CartReducer)
  const [state, setState] = React.useState({
    open: false,
  });



  const toggleDrawer = event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, open: !state.open });
  };

  return (
    <React.Fragment>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <MainDiv>
        <StyledHeaderWrapper>
          <StyledHeader>
            <MenuIconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              edge="start"
            >
              <Menu />
            </MenuIconButton>

            <Nav>
              <Ul>
                <Li>
                  <MoodIconDiv></MoodIconDiv>
                </Li>
                <Li>
                  <ShoppingCartCount>{CartCount.length}</ShoppingCartCount><A href="/cart"><AddShoppingCartIconDiv></AddShoppingCartIconDiv></A>
                </Li>
              </Ul>
            </Nav>
          </StyledHeader>
        </StyledHeaderWrapper>
        <Drawer open={state.open} onClose={toggleDrawer}>
          <CloseIconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            edge="start"
          >
            <CancelIcon />
          </CloseIconButton>
          <DrawerNav>
            <DrawerUl>
              <DrawerLi>
                < ProfileImg src={SE} />
              </DrawerLi>

              <DrawerLi>
                <HomeIconDivD></HomeIconDivD><As href="/">Home</As>
              </DrawerLi>
              <DrawerLi>
                <FastfoodIconDiv></FastfoodIconDiv><As href="/online">Order Food Online</As>
              </DrawerLi>
              <DrawerLi>
                <ProfileIconDivD></ProfileIconDivD><As href="/profile">Profile</As>
              </DrawerLi>
              <DrawerLi>
                <OrderIconDiv></OrderIconDiv><As href="/orders">Your Orders</As>
              </DrawerLi>

              <DrawerLi>
                <AddShoppingCartIconDivDrawer></AddShoppingCartIconDivDrawer><As href="/cart">Cart</As>
              </DrawerLi>

              <DrawerLi>
                <NotificationsActiveIconDiv></NotificationsActiveIconDiv><As href="/notification">Notifications</As>
              </DrawerLi>
              <DrawerLi>
                <ContactMailIconDiv></ContactMailIconDiv><As href="/address">Your Addresses</As>
              </DrawerLi>
              <DrawerLi>
                <InfoIconDiv></InfoIconDiv><As href="/about">About Us</As>
              </DrawerLi>
            </DrawerUl>
          </DrawerNav>
        </Drawer>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/orders" component={OrdersHtml} />
            <Route exact path="/online" component={Online} />
            <Route exact path="/itemList" component={ItemList} />
            <Route exact path="/cart" component={Cart} />
            <Route path="**" component={PageNotFound} />
          </Switch>
        </Router>
      </MainDiv>
    </React.Fragment>
  );
}

export default App;
