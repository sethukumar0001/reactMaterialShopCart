import React, { useState } from 'react';
import styled from "styled-components";
import AddIcon from '@material-ui/icons/Add';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MoreVertIcon from '@material-ui/icons/MoreVert';


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

const AddNewAdd = styled.div`
border-style: solid;
border-width: 1px;
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

const AddNewAddText = styled.h4`

`;

const AddIconDiv = styled(AddIcon)`
float:left;
// margin-top:3%;
margin-left:2%;
@media (max-width: 768px) {
    max-width:100%;
    margin:0px;
    margin-top:-1%;
    margin-left:2%;
   }
   @media (max-width: 458px) {
   }
`;

const ListAddDiv = styled.div`
positoin:relative;
border-style: solid;
border-width: 1px;
margin-left:30%;
margin-right:30%;
cursor:pointer;
margin-top:10px;
border-color:gray;
padding:10px;
@media (max-width: 768px) {
    max-width:100%;
    margin:0px;
    margin-top:2%;
    margin-left:2%;
    margin-right:2%;
   }
   @media (max-width: 458px) {
   }
`;

const TopText = styled.button`
    background-color:#E8E8E8;
    border:none;
    padding:5px;
    color:black;
    outline:none;
    @media (max-width: 768px) {
        max-width:100%;
        margin:0px;
       }
       @media (max-width: 458px) {
       }
`;

const SubText = styled.h4`

font-weight:500px;
`;

const Subtext1 = styled.h4`
float:right;
margin-top:-7%;
margin-right:50%;    
@media (max-width: 768px) {
    float:right;
    max-width:100%;
    margin:0px;
    margin-top:-12%;
   }
   @media (max-width: 458px) {
   }
`;

const Subtext2 = styled.p`
font-family:times;
`;
//address form
const FormDiv = styled.div`
padding:10px;
margin-left:15%;
margin-top:5%;
@media (max-width: 768px) {
    max-width:100%;
    margin:0px;
   }
   @media (max-width: 458px) {
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

const SubmitButton = styled.button`
  width:400px;
  color:white;
  background-color:	#212F3D;
  padding :10px; 
  border-radius:10px;
  cursor:pointer;
  outline:none;
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
`

const Break = styled.div`
margin-bottom:20px;

`

const RadioButtonDiv = styled.div`

`;

const LableTag = styled.label`
margin-left:2%;
@media (max-width: 768px) {
    max-width:100%;
    margin:0px;
   }
   @media (max-width: 458px) {
   }
`;

const MoreVertIconDiv = styled(MoreVertIcon)`
position:absolute;
margin-left:33%;
color:gray;
@media (max-width: 768px) {
    max-width:100%;
    margin:0px;
    margin-left:75%;
   }
   @media (max-width: 458px) {
   }

`;

function AddressHtml(props) {
    const [showFormDiv, setShowFormDiv] = useState(false)
    const [pincode, setPincode] = useState('');
    const [name, setName] = useState("");
    const [locality, setLocality] = useState("");
    const [number, setNumber] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [role,setRole] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        let data = {
            pincode,
            name,
            number,
            address
        }
       alert("Your data submitted")
    };
    const radioStatus = (e) =>{
        e.preventDefault();
        setRole(e.target.value);
      }
      const onClick = () => {
        setShowFormDiv(true)
    }
    const handleCancel = () => {
        setShowFormDiv(false)
    }
    return (
        <MainDiv>
            <HeaderText>My Addresses :</HeaderText>
            <AddNewAdd>
                {!showFormDiv ? (<div><AddIconDiv onClick={onClick}></AddIconDiv><AddNewAddText onClick={onClick}>Add New Address</AddNewAddText></div>) :
                    <FormDiv>
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
                                id="pincode"
                                name="pincode"
                                autoComplete="pincode"
                                value={pincode}
                                onChange={e => setPincode(e.target.value)}
                                variant="outlined"
                                id="outlined-basic" label="pincode"
                            />
                            <Break />

                            <InputStyle
                                id="locality"
                                name="locality"
                                autoComplete="locality"
                                value={locality}
                                onChange={e => setLocality(e.target.value)}
                                variant="outlined"
                                id="outlined-basic" label="locality"
                            />
                            <Break />

                            <InputStyle
                                id="address"
                                name="address"
                                autoComplete="address"
                                value={address}
                                onChange={e => setAddress(e.target.value)}
                                variant="outlined"
                                id="outlined-basic" label="address"
                                multiline
                                rows={4}
                            />
                            <Break />
                            <InputStyle
                                id="city"
                                name="city"
                                autoComplete="city"
                                value={city}
                                onChange={e => setCity(e.target.value)}
                                variant="outlined"
                                id="outlined-basic" label="City/Address/Town"
                                multiline
                            />
                            <Break />
                            <InputStyle
                                id="state"
                                name="state"
                                autoComplete="state"
                                value={state}
                                onChange={e => setState(e.target.value)}
                                variant="outlined"
                                id="outlined-basic" label="State"
                                multiline
                            />
                            <Break />

                            <RadioButtonDiv>
                              <LableTag >
                                <input type="radio" id="home" value="home"  onChange={radioStatus}/>Home
                              </LableTag>
                      
                              <LableTag >
                                <input type="radio" id="work" value="work" /> Work
                              </LableTag>
                          </RadioButtonDiv>
                          <Break />
                            <SubmitButton type="submit" onClick={handleCancel}>Cancel</SubmitButton>
                            <SubmitButton type="submit" onClick={handleSubmit}>Save</SubmitButton>
                        </Formcontrol>
                    </FormDiv>
                }
            </AddNewAdd>

            <ListAddDiv>
                <TopText>Home</TopText><MoreVertIconDiv />
                <SubText>Sethu Kumar</SubText>
                <Subtext1>8886257181</Subtext1>
                <Subtext2>No. 17, 10th Cross, Mayura Street, Papanna Layout, Nagashettyhalli (RMV II Stage), Bengaluru - 560094 Karnataka, India, 10th Cross, Mayura Street, Papanna Layout, Nagashettyhalli (RMV II Stage),, Bengaluru, Karnataka - 560094
            </Subtext2>
            </ListAddDiv>

        </MainDiv>
    );
}

export default AddressHtml;