import React, { useState } from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import FoodImage1 from '../../../_assets/background1.jpg';
import FoodImage2 from '../../../_assets/background2.jpg';
import FoodImage3 from '../../../_assets/background1.png';
import FoodImage5 from '../../../_assets/mutton.jpg';
import FoodImage6 from '../../../_assets/food6.jpg';
import FoodImage7 from '../../../_assets/food7.jpg';
import FoodImage8 from '../../../_assets/food8.jpg';

import res1 from '../../../_assets/res1.jpg';
import res2 from '../../../_assets/res2.jpg';
import res3 from '../../../_assets/res3.jpg';
import res4 from '../../../_assets/res4.jpg';

import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocationCityIcon from '@material-ui/icons/LocationCity';

import FastfoodIcon from '@material-ui/icons/Fastfood';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';



import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';

const BodyDiv = styled.body`
background-color:white;

@media (max-width: 768px) {
    width:100%;
    margin:0px;
  }
  @media (max-width: 458px) {
  }
`;

//carousel div

const CarouselDiv = styled.div`
height:100px;
position: relative;
@media (max-width: 768px) {
    max-width:100%;
    margin:0px;
  }
  @media (max-width: 458px) {
  }
`;

const CarouselMain = styled(Carousel)`
height:100px;
@media (max-width: 768px) {
    max-width:100%;
    margin:0px;
  }
  @media (max-width: 458px) {
  }
`;

const CarouselImages = styled.img`
height:500px;
@media (max-width: 768px) {
    max-width:100%;
    margin:0px;
    height:300px;
  }
  @media (max-width: 458px) {
  }
`;


//search div

const SearchDiv = styled.div`
position: relative;
margin-top:210px;
display:flex;
margin-left:5%;
@media (max-width: 768px) {
    flex-direction:column;
    max-width:100%;
    margin:0px;
  }
  @media (max-width: 458px) {
  }
`;
const InputStyleForSearch = styled.input`

background-color:white;
border:none;
padding:15px;
width:100%;
margin-left:63%;
border-radius:5px;
padding-left:40px;
outline: none;
font-size:15px;
@media (max-width: 768px) {
    width:50%;
    margin:0px;
    margin-left:18%;
    margin-bottom:2%;
    padding:10px;
    padding-left:10%;
  }
  @media (max-width: 458px) {
  }
`;
const SuggetionDiv = styled.div`
margin-left:68% !important;
width:300px !important;
`;

const InputStyleForSearch1 = styled.input`
position:fixed !important;
background-color:white;
border:none;
padding:15px;
// width:100%;
width:300px;
margin-left:18% !important;
border-radius:5px;
padding-left:40px;
outline: none;
font-size:15px;
z-index:1;
position:absolute;
margin-left:45% !important;
margin-top:-3.5% !important;
outline: none;
font-size:15px;
@media (max-width: 768px) {
    width:50%;
    margin:0px;
    margin-left:18%;
    padding:10px;
    padding-left:10%;
    margin-bottom:2%;
  }
  @media (max-width: 458px) {
  }

`;

const SearchButton = styled.button`
margin-left:40px;
background-color:white !important;
width:50px;
border:none;
border-radius:5px;
transition: all 0.3s ease 0s;
color:black;
&:hover {
  color: black;
}
text-decoration: none;
cursor:pointer;
outline: none;
@media (max-width: 768px) {
    max-width:50%;
    margin:0px;
    margin-left:40%;
  }
  @media (max-width: 458px) {
  }
`;

const SearchIconTag = styled(SearchIcon)`
background-color:white;
margin-top:5px;

`;

const LocationOnIconTag = styled(LocationOnIcon)`
background-color:white;
position: absolute;
left:14.5%;
margin-top:12px;
@media (max-width: 768px) {
    max-width:50%;
    margin:0px;
    margin-left:-4%;
    margin-top:2%
  }
  @media (max-width: 458px) {
  }
`;

const LocationOnIconTagSuggetion = styled(LocationOnIcon)`
background-color:white;
position: absolute;
left:14.5%;
margin-top:12px;
@media (max-width: 768px) {
    max-width:50%;
    margin:0px;
    margin-left:-4%;
    margin-top:2%
  }
  @media (max-width: 458px) {
  }
`;
const ListStyle = styled.li`
list-style-type: none;
`;

const LocationCityIconTag = styled(LocationCityIcon)`
background-color:white;
position: absolute;
left:40.6%;
margin-top:12px;
@media (max-width: 768px) {
    max-width:50%;
    margin:0px;
    margin-left:-29%;
    margin-top:13%
  }
  @media (max-width: 458px) {
  }
`;


const FastfoodIconTag = styled(FastfoodIcon)`
background-color:white;
position: absolute;
left:40.6%;
margin-top:12px;
@media (max-width: 768px) {
    max-width:50%;
    margin:0px;
    margin-left:-29%;
    margin-top:13%
  }
  @media (max-width: 458px) {
  }
`;

//card div

const CardDiv = styled.div`
display:flex;
justify-content: center;
align-items: center;
@media (max-width: 768px) {
    max-width:100%;
    flex-direction:column;
    margin:0px;
    margin-top:30%;
  }
  @media (max-width: 458px) {
  }
`;

const MainCard = styled(Card)`
height:250px;
width:300px;
margin-top:200px;
margin-left:10px;
@media (max-width: 768px) {
    max-width:100%;
    margin:0px;
    margin-top:10%;
  }
  @media (max-width: 458px) {
  }
`;

const CardContentDiv = styled(CardContent)`
    background-color:white;
    height:35vh;
`;

const CardMediaDiv = styled(CardMedia)`
height: 160px;
`;

const CardText = styled.h3`
font-family:fantacy;
margin-top:20px;
margin-left:40px;
`;

// Location div

const LocationDiv = styled.div`
@media (max-width: 768px) {
    max-width:100%;
    // margin-top:-30%;
  }
  @media (max-width: 458px) {
  }
`;

const LocationText = styled.h2`
font-family:Arial, sans-serif;
margin-left:100px;
margin-top:80px;
@media (max-width: 768px) {
    max-width:100%;
    margin-top:10%;
    margin-left:10%;
  }
  @media (max-width: 458px) {
  }

`;

const LocationCardDiv = styled.div`
display:flex;
justify-content: center;
align-items: center;
border-radius:50px !important;
@media (max-width: 768px) {
    max-width:100%;
    flex-direction:column;
    margin:0px;
    // margin-top:10%;
  }
  @media (max-width: 458px) {
  }

`;

const LocationMainCard = styled(Card)`
height:450px;
width:300px;
margin-left:10px;
margin-top:30px;
cursor:pointer;
`;

const LocationCardContentDiv = styled(CardContent)`
height:35vh;
`;

const LocationCardMediaDiv = styled(CardMedia)`
height: 360px;
`;

const LocationCardText = styled.h3`
font-family:fantacy;
margin-top:20px;
margin-left:40px;
`;

//options pdiv

const OptionDiv = styled.div`
background-color:white !important;
@media (max-width: 768px) {
  display:none;
  }
  @media (max-width: 458px) {
  }
`;

const OptionText = styled.h2`
font-family:Arial, sans-serif;
background-color:white;
margin-top:100px;
margin-left:100px;
`;

const OptionSubText = styled.h3`
font-family:Times;
margin-left:100px;
font-size:20px;
margin-top:20px;    
`;

const RestuarantDiv = styled.div`
display:flex;
margin-left:50px;
margin-top:40px;
margin-bottom:70px;
`;
const RestuarantDiv1 = styled.div`
display:flex;
margin-left:50px;
flex-direction:column; 
`;
const RestuarantDiv2 = styled.div`
display:flex;
margin-left:50px;
flex-direction:column; 
`;

const ResturantName = styled.p`
font-family:Arial, sans-serif;
margin-left:100px;
font-size:15px;

`;

const FooterDiv = styled.div`
position:absolute;
background-color: #D6DBDF;
clear: both;
@media (max-width: 768px) {
    position:absolute;
    max-width:100%;
    margin:0%;
    margin-top:10%;
  }
  @media (max-width: 458px) {
  }
`;

const FooterText = styled.p`
color:black;
padding:10px;
text-align: center;
font-size:14px;
`;




function MainHomeHtml(props) {

    const [address, setAddress] = useState("")
    const [address1, setAddress1] = useState("")
    

    const handleChange = address => {
        setAddress(address)
    };

    const handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));
    };
    const handleChange1 = address => {
        setAddress(address)
    };

    const handleSelect1 = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));
    };

    return (
        <React.Fragment>
            <BodyDiv>
                {/* Carousel div */}
                <CarouselDiv>
                    <CarouselMain
                        interval={3000}
                        showIndicators={false}
                        showStatus={false}
                        showThumbs={false}
                        showArrows={false}
                        infiniteLoop
                        // autoPlay
                    >
                        <CarouselImages src={FoodImage2} />
                        <CarouselImages src={FoodImage1} />
                        <CarouselImages src={FoodImage3} />
                    </CarouselMain>
                </CarouselDiv>

                {/* Search div */}

                <SearchDiv>
                    <PlacesAutocomplete
                        value={address}
                        onChange={handleChange}
                        onSelect={handleSelect}
                    >
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (<div>
                            <LocationOnIconTag />
                            <InputStyleForSearch
                                {...getInputProps({
                                    placeholder: 'Search Places ...',
                                    // className: 'location-search-input',
                                })}
                            />
                         <SuggetionDiv>   
                            <ul>
                          {loading && (
                            <ListStyle>
                              <button>Loading...</button>
                            </ListStyle>
                          )}
                          {suggestions.map(suggestion => {
                            const className = suggestion.active
                              ? "suggestion-item--active"
                              : "suggestion-item";
                            // inline style for demonstration purpose
                            const style = suggestion.active
                              ? { backgroundColor: "#fafafa",cursor: "pointer" }
                              : {backgroundColor: "#ffffff",cursor: "pointer" };
                            return (
                              <ListStyle
                                {...getSuggestionItemProps(suggestion, {
                                  className,
                                  style
                                })}
                              >
                                <button>{suggestion.description}</button>
                              </ListStyle>
                            );
                          })}
                        </ul>
                        </SuggetionDiv>
                         </div>
                        )}
                    </PlacesAutocomplete>

                        
                </SearchDiv>
                {/* <SearchDiv>
                <FastfoodIconTag />
                            <InputStyleForSearch1
                                placeholder="Search by Item ..."
                            />
                </SearchDiv> */}

                {/* Card div */}
                <CardDiv>

                    <MainCard>
                        <CardContentDiv>
                            <CardMediaDiv
                                image={FoodImage7}
                            />
                            <CardText>Order Food Online</CardText>
                        </CardContentDiv>
                    </MainCard>
                    <MainCard>
                        <CardContentDiv>
                            <CardMediaDiv
                                image={FoodImage5}
                            />
                            <CardText>Get Out For a Meal</CardText>
                        </CardContentDiv>
                    </MainCard>
                    <MainCard>
                        <CardContentDiv>
                            <CardMediaDiv
                                image={FoodImage6}
                            />
                            <CardText> Order spicy Items</CardText>
                        </CardContentDiv>
                    </MainCard>
                    <MainCard>
                        <CardContentDiv>
                            <CardMediaDiv
                                image={FoodImage8}
                            />
                            <CardText>Njoy Food</CardText>
                        </CardContentDiv>
                    </MainCard>
                </CardDiv>

                {/* Location Div */}
                <LocationDiv>
                    <LocationText>
                        Find Food from Your Favourite Locations
                </LocationText>
                    <LocationCardDiv>

                        <LocationMainCard>
                            <LocationCardContentDiv>
                                <LocationCardMediaDiv
                                    image={res1}
                                />
                                <LocationCardText>Bangalore</LocationCardText>
                            </LocationCardContentDiv>
                        </LocationMainCard>
                        <LocationMainCard>
                            <LocationCardContentDiv>
                                <LocationCardMediaDiv
                                    image={res2}
                                />
                                <LocationCardText>Hyderabad</LocationCardText>
                            </LocationCardContentDiv>
                        </LocationMainCard>
                        <LocationMainCard>
                            <LocationCardContentDiv>
                                <LocationCardMediaDiv
                                    image={res3}
                                />
                                <LocationCardText> Chennai</LocationCardText>
                            </LocationCardContentDiv>
                        </LocationMainCard>
                        <LocationMainCard>
                            <LocationCardContentDiv>
                                <LocationCardMediaDiv
                                    image={res4}
                                />
                                <LocationCardText>Goa</LocationCardText>
                            </LocationCardContentDiv>
                        </LocationMainCard>
                    </LocationCardDiv>
                </LocationDiv>

                {/* User needs  */}
                <OptionDiv>
                    <OptionText>
                        Explore other options for you here
                </OptionText>
                    <OptionSubText>
                        Top Restaurant Chains :
                </OptionSubText>
                    <RestuarantDiv>
                        <RestuarantDiv1>
                            <ResturantName>Burger King</ResturantName>
                            <ResturantName>Domino's</ResturantName>
                            <ResturantName>Dunkin' Donuts</ResturantName>
                            <ResturantName>KFC</ResturantName>
                        </RestuarantDiv1>
                        <RestuarantDiv2>
                            <ResturantName>Krispy Kreme</ResturantName>
                            <ResturantName>WOW! Momo</ResturantName>
                            <ResturantName>Pizza Hut</ResturantName>
                            <ResturantName>Paradise Biryani</ResturantName>
                        </RestuarantDiv2>
                        <RestuarantDiv1>
                            <ResturantName>Burger King</ResturantName>
                            <ResturantName>Domino's</ResturantName>
                            <ResturantName>Dunkin' Donuts</ResturantName>
                            <ResturantName>KFC</ResturantName>
                        </RestuarantDiv1>
                        <RestuarantDiv2>
                            <ResturantName>Krispy Kreme</ResturantName>
                            <ResturantName>WOW! Momo</ResturantName>
                            <ResturantName>Pizza Hut</ResturantName>
                            <ResturantName>Paradise Biryani</ResturantName>
                        </RestuarantDiv2>
                    </RestuarantDiv>
                </OptionDiv>


                {/* Footer div  */}

                <FooterDiv>
                    <FooterText>
                        By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2020 © Sethu Media Pvt Ltd. All rights reserved.
                    </FooterText>
                </FooterDiv>
            </BodyDiv>
        </React.Fragment>
    );
}

export default MainHomeHtml;


