import React from "react";
import { TextField, Button } from "@mui/material";

export default function SecondStep() {
  const style = {
    marginTop: "1rem",
  };
  return (
    <div className="formContainer">
      <h3>Address</h3>
      <div style={style}>
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          name="city"
          required
        />
      </div>
      <div style={style}>
        <TextField
          id="outlined-basic"
          label="State"
          name="state"
          variant="outlined"
          required
        />
      </div>
      <div style={style}>
        <TextField id="outlined-basic" label="Country" required  name="country"/>
      </div>
      <div className="btnContainer">
        <Button variant="contained" color="warning" sx={{marginRight:"1rem"}}>
          Back
        </Button>
        <Button variant="contained" color="success">
          Next
        </Button>
      </div>
    </div>
  );
}
