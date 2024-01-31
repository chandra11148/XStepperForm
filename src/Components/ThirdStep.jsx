import React from "react";
import { TextField, Button, InputAdornment, Typography } from "@mui/material";

export default function ThirdStep() {
  const style = {
    marginTop: "1rem",
  };
  return (
    <div className="formContainer">
      <h3>Payment Details</h3>
      <div style={style}>
        <TextField
          required
          label="Card Number"
          variant="outlined"
          name="cardNumber"
        />
      </div>
      <div style={style}>
        <TextField
          required
          label="Card Holder"
          variant="outlined"
          name="cardHolder"
        />
      </div>
      <div style={style}>
        <TextField
          required
          label="Expiration Date (MM/YYYY)"
          variant="outlined"
          name="expirationDate"
        
        />
      </div>
      <div style={style}>
        <TextField
          required
          label="CVV"
          variant="outlined"
          type="password"
          name="cvv"
        />
      </div>
      <div className="btnContainer">
        <Button
          variant="contained"
          color="warning"
          sx={{ marginRight: "1rem" }}
        >
          Back
        </Button>
        <Button variant="contained" color="success">
          Submit
        </Button>
      </div>
    </div>
  );
}
