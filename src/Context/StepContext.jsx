import React,{useState} from 'react'
import App from '../App';

export const multiStepContext = React.createContext();
const StepContext = ()=>{
    const [currentStep,setCurrentStep] = useState(1);
    const [userDetails,setUserDetails] = useState([]);
    const [finalData,setFinalData] = useState([]);
    return (
        <div>
        <multiStepContext.Provider value={{currentStep,setCurrentStep,userDetails,setUserDetails,finalData,setFinalData}}>
            <App/>
        </multiStepContext.Provider>
        </div>
    )
}

export default StepContext;