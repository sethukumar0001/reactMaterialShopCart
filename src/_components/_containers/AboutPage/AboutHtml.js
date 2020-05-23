import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import BgImage from '../../../_assets/bg0.jpg';




const MainDiv = styled.main`
// background-color:gray;
margin-top:75px;
@media (max-width: 768px) {
  // background-color:red;
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


//card 1

const MainCard = styled(Card)`
margin-bottom:30px;
margin-left:220px;
width:500px;
float:left;


@media (max-width: 768px) {
    width:90%;
    margin:16px;
    // margin-right:50px;

  }
  @media (max-width: 458px) {
   
  }
  @media (width: 375px) {

  }
  @media (width: 425px) {
   
  }

`;

const ContentDiv = styled.div`
margin-top:120px;
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

const CardContentDiv = styled(CardContent)`
    background-color:#f1f1f1;
    background-image: url(${BgImage});
    height:550px;
    @media (max-width: 768px) {
        width:100%;
        margin:0px;
        height:300px;
        
    
      }
      @media (max-width: 458px) {
       
      }
      @media (width: 375px) {
    
      }
      @media (width: 425px) {
       
      }
    
`;

const TypographyDiv = styled(Typography)`
`;

const TextDiv = styled.h4`
color:white;

`;

const LocationOnIconDiv = styled(LocationOnIcon)`
color:white;
float:left;
margin-top:2px;
margin-left:4px;
margin-right: 40px;

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
const PhoneIconDiv = styled(PhoneIcon)`
color:white;
float:left;
margin-top:2px;
margin-left:4px;
margin-right: 40px;

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
const MailIconDiv = styled(MailIcon)`
color:white;
float:left;
margin-top:2px;
margin-left:4px;
margin-right: 40px;

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
const Ptag = styled(Typography)`
 color:#E5E4E2;
 margin-left: 67px!important;

  @media (max-width: 768px) {
    width:0%;
    margin:0px !important;
  }
  @media (max-width: 458px) {
   
  }
  @media (width: 375px) {

  }
  @media (width: 425px) {
   
  }
 `;

const Ptag2 = styled(Typography)`
 color:#00FF00;
 margin-left: 67px!important;

  @media (max-width: 768px) {
    width:100%;
    margin:0px !important;
  }
  @media (max-width: 458px) {
   
  }
  @media (width: 375px) {

  }
  @media (width: 425px) {
   
  }
 `;


//card 2

const MainCard2 = styled(Card)`
width:500px;

@media (max-width: 768px) {
    width:90%;
    margin:16px;
    margin-top:15px;
    // margin-right:50px;

  }
  @media (max-width: 458px) {
   
  }
  @media (width: 375px) {

  }
  @media (width: 425px) {
   
  }

`;

const ContentDiv1 = styled.div`
margin-top:60px;
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

const CardContentDiv1 = styled(CardContent)`
    background-color:#F8F9F9;
    height:550px;
    @media (max-width: 768px) {
        width:100%;
        margin:0px;
        height:450px;
    
      }
      @media (max-width: 458px) {
       
      }
      @media (width: 375px) {
    
      }
      @media (width: 425px) {
       
      }
    
`;
const TextDiv1 = styled.h4`
color:#212F3D;
`;



//user form

const Main = styled.main`
  max-width: 350px;
  margin-left: 40px ;
  width: 100%;
  @media (max-width: 768px) {
    max-width: 300px;
  }
  @media (max-width: 768px) {
    width:90%;
    margin:0px;

  }
  @media (max-width: 458px) {
   
  }
  @media (width: 375px) {

  }
  @media (width: 425px) {
   
  }
`;
const Formcontrol = styled(FormControl)`
min-width:280px;
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
const Form = styled.div`
  color: red;
  align-items: center;
  


`;
const SubmitButton = styled.button`
  width:400px;
  color:white;
  background-color:	#212F3D;
  padding :10px; 
  border-radius:10px;
  cursor:pointer;
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
const InputStyle = styled(TextField)`
background:white;
width:400px;
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
`
const Break = styled.div`
margin-bottom:20px;

`

function AboutHtml(props) {

    const [email, setEmail] = useState('');
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        let data = {
            email,
            name,
            number,
            message
        }
        console.log(data)
    };


    return (
        <MainDiv>
            <MainCard >
                <CardContentDiv>
                    <ContentDiv> </ContentDiv>
                    <TypographyDiv>
                        <LocationOnIconDiv /><TextDiv>Address</TextDiv>
                    </TypographyDiv>
                    <Ptag>
                        Veerannapalya,Bangalore,India.
                    </Ptag>
                    <TypographyDiv>
                        <PhoneIconDiv /><TextDiv>Lets Talk</TextDiv>
                    </TypographyDiv>
                    <Ptag2>
                        +91 8886257181
                    </Ptag2>
                    <TypographyDiv>
                        <MailIconDiv /><TextDiv>Contat Me?</TextDiv>
                    </TypographyDiv>
                    <Ptag2>
                        sethukumartirumanyam@gmail.com
                    </Ptag2>

                </CardContentDiv>
            </MainCard>





            <MainCard2 >
                <CardContentDiv1>
                    <ContentDiv1> </ContentDiv1>
                    <TypographyDiv>
                        <center><TextDiv1>Send Me A Message ?</TextDiv1></center>
                    </TypographyDiv>
                    <Main>
                        {/* <Form> */}
                            <form onSubmit={handleSubmit}>
                                <Formcontrol>
                                    {/* <InputLabel htmlFor="email">Email Address</InputLabel> */}
                                    <InputStyle
                                        id="name"
                                        name="name"
                                        autoComplete="name"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        variant="outlined"
                                        id="outlined-basic" label="Full Name"
                                    />
                                    <Break />
                                    <InputStyle
                                        id="email"
                                        name="email"
                                        autoComplete="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        variant="outlined"
                                        id="outlined-basic" label="Email"
                                    />
                                    <Break />
                                    <InputStyle
                                        id="number"
                                        name="number"
                                        autoComplete="number"
                                        value={number}
                                        onChange={e => setNumber(e.target.value)}
                                        variant="outlined"
                                        id="outlined-basic" label="Phone Number"
                                    />
                                    <Break />
                                    <InputStyle
                                        id="message"
                                        name="message"
                                        autoComplete="message"
                                        value={message}
                                        onChange={e => setMessage(e.target.value)}
                                        variant="outlined"
                                        id="outlined-basic" label="Message"
                                        multiline
                                        rows={4}
                                    />
                                    <Break />
                                    <center><SubmitButton type="submit">Submit</SubmitButton></center>
                                </Formcontrol>
                            </form>
                        {/* </Form> */}
                    </Main>
                </CardContentDiv1>
            </MainCard2>
        </MainDiv>
    );
}

export default AboutHtml;