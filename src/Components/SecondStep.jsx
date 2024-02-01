import React, { useContext } from "react";
import { TextField, Button } from "@mui/material";
import { multiStepContext } from "../Context/StepContext";

export default function SecondStep() {
  const { setCurrentStep, userDetails, setUserDetails } =
    useContext(multiStepContext);
  const validateForm = () => {
    if (!userDetails.city) {
      alert("city is required.");
      return;
    } else if (!userDetails.state) {
      alert("state is required.");
      return;
    } else if (!userDetails.country) {
      alert("Country is required.");
      return;
    }
    setCurrentStep(3);
  };
  const handleInputChange = (e) => {
    setUserDetails((prevDetails) => {
      return { ...prevDetails, [e.target.name]: e.target.value };
    });
  };
  const style = {
    marginTop: "1rem",
  };
  return (
    <div className="formContainer">
      <h3>Address</h3>
      <div style={style}>
        <TextField
          id="city"
          label="City"
          variant="outlined"
          name="city"
          value={userDetails.city}
          required
          onChange={handleInputChange}
        />
      </div>
      <div style={style}>
        <TextField
          id="state"
          label="State"
          name="state"
          variant="outlined"
          value={userDetails.state}
          required
          onChange={handleInputChange}
        />
      </div>
      <div style={style}>
        <TextField
          onChange={handleInputChange}
          id="country"
          label="Country"
          required
          name="country"
          value={userDetails.country}
        />
      </div>
      <div className="btnContainer">
        <Button
          variant="contained"
          color="warning"
          sx={{ marginRight: "1rem" }}
          onClick={() => setCurrentStep(1)}
        >
          Back
        </Button>
        <Button variant="contained" color="success" onClick={validateForm}>
          Next
        </Button>
      </div>
    </div>
  );
}
