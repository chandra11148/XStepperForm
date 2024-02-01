import { useState, useContext } from "react";
import "./App.css";
import FirstStep from "./Components/FirstStep";
import SecondStep from "./Components/SecondStep";
import ThirdStep from "./Components/ThirdStep";
import { Step, StepLabel, Stepper } from "@mui/material";
import { multiStepContext } from "./Context/StepContext";
import DisplayData from "./Components/DisplayData"

function App() {
  const { currentStep,  finalData } = useContext(multiStepContext);
  const stepper = (step) => {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
    }
  };
  const stepperStyle={
    width:"100%",
    display:"flex",
    justifyContent:"center"
  }
  return (
    <>
      <div className="mainContainer">
        <div style={stepperStyle}>
          <Stepper activeStep={currentStep-1} sx={{ minWidth: "40%" }}>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>
        {stepper(currentStep)}
        {finalData && <DisplayData datas={finalData}/>}
      </div>
    </>
  );
}

export default App;
