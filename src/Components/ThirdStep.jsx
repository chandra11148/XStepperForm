import React,{useContext} from "react";
import { TextField, Button } from "@mui/material";
import { multiStepContext } from "../Context/StepContext";

export default function ThirdStep() {
  const {setCurrentStep,userDetails,setUserDetails,finalData,setFinalData} = useContext(multiStepContext);
  const handleInputChange = (e) => {
    setUserDetails((prevDetails) => {
      return { ...prevDetails, [e.target.name]: e.target.value };
    });
  };
  const style = {
    marginTop: "1rem",
  };
  const validateForm=()=>{
    if(!userDetails.cardNumber){
      alert("Card Number is required.");
      return;
    }else if(!(/^[0-9]+$/.test(userDetails.cardNumber))){
      alert("Card Number should contain only digit.");
      return;
    }else if(userDetails.cardNumber.length!=16){
      alert("Card Number should have 16 digits.");
      return;
    }else if(!userDetails.cardHolder){
      alert("Card holder's name is required.");
      return;
    }else if(!userDetails.expirationDate){
      alert("Expiry Date is required.");
      return;
    }else if(!(/^(0[1-9]|1[0-2])\/\d{4}$/.test(userDetails.expirationDate))){
      alert("Expiry Date should be in MM/YYYY.");
      return;
    }else if(!userDetails.cvv){
      alert("CVV is required.");
      return;
    }else if(!(/^[0-9]+$/.test(userDetails.cvv))){
      alert("CVV should be a number.");
      return;
    }else if(userDetails.cvv.length!=3){
      alert("Invalid CVV.");
      return;
    }
    
    setCurrentStep(1);
    setFinalData((prevData)=>[...prevData,userDetails]);
    setUserDetails({});
  }
  return (
    <div className="formContainer">
      <h3>Payment Details</h3>
      <div style={style}>
        <TextField
          required
          label="Card Number"
          variant="outlined"
          name="cardNumber"
          value={userDetails.cardNumber}
          onChange={handleInputChange}
        />
      </div>
      <div style={style}>
        <TextField
          required
          label="Card Holder"
          variant="outlined"
          name="cardHolder"
          value={userDetails.cardHolder}
          onChange={handleInputChange}

        />
      </div>
      <div style={style}>
        <TextField
          required
          label="Expiration Date (MM/YYYY)"
          variant="outlined"
          name="expirationDate"
          value={userDetails.expirationDate}
          onChange={handleInputChange}
        />
      </div>
      <div style={style}>
        <TextField
          required
          label="CVV"
          variant="outlined"
          type="password"
          name="cvv"
          value={userDetails.cvv}
          onChange={handleInputChange}
          
        />
      </div>
      <div className="btnContainer">
        <Button
          variant="contained"
          color="warning"
          sx={{ marginRight: "1rem" }}
          onClick={()=>setCurrentStep(2)}
        >
          Back
        </Button>
        <Button variant="contained" color="success" onClick={validateForm}>
          Submit
        </Button>
      </div>
    </div>
  );
}
