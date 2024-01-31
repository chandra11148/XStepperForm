import { Button, TextField } from "@mui/material";
import React from "react";

export default function FirstStep() {
  const style = {
    marginTop: "1rem",
  };
  return (
    <div className="formContainer">
      <h3>Personal Details</h3>
      <div style={style}>
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          required
          name="firstName"
        />
      </div>
      <div style={style}>
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          required
          name="lastName"
        />
      </div>
      <div style={style}>
        <TextField id="outlined-basic" label="Email" required name="email"/>
      </div>
      <div className="btnContainer">
        <Button variant="contained" color="success">
          Next
        </Button>
      </div>
    </div>
  );
}
