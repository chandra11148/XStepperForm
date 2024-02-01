import { Button, TextField } from "@mui/material";
import React, { useContext } from "react";
import { multiStepContext } from "../Context/StepContext";

export default function FirstStep() {
  const {setCurrentStep,userDetails,setUserDetails} = useContext(multiStepContext);
  const validateForm=()=>{
    if(!userDetails.firstName){
      alert("First Name is required.");
      return;
    }else if(!userDetails.lastName){
      alert("Last Name is required.");
      return;
    }else if(!userDetails.email){
      alert("Email is required.");
      return;
    }else if(!userDetails.email.includes('@gmail.com')){
      alert("Invalid Email.");
      return;
    }
    setCurrentStep(2);
  }
  const handleInputChange=(e)=>{
    setUserDetails((prevDetails)=>{return {...prevDetails,[e.target.name]:e.target.value}});
  }
  const style = {
    marginTop: "1rem",
  };
  return (
    <div className="formContainer">
      <h3>Personal Details</h3>
      <div style={style}>
        <TextField
          id="firstName"
          label="First Name"
          variant="outlined"
          required
          name="firstName"
          value={userDetails.firstName}
          onChange={handleInputChange}
        />
      </div>
      <div style={style}>
        <TextField
          id="lastName"
          label="Last Name"
          variant="outlined"
          required
          name="lastName"
          value={userDetails.lastName}
          onChange={handleInputChange}
        />
      </div>
      <div style={style}>
        <TextField id="email" label="Email" type="email" onChange={handleInputChange} required name="email" value={userDetails.email}/>
      </div>
      <div className="btnContainer">
        <Button variant="contained" color="success" onClick={validateForm}>
          Next
        </Button>
      </div>
    </div>
  );
}
