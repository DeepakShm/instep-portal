import { useRouter } from "next/router";
import { useState } from "react";
import { ApplyFormDetails } from "../types/applicationForm";
import { APPLY_FORM_VALIDATIONS } from "../utils/validators/validationSchema";

const INITIAL_APPLY_FORM_VALUES: ApplyFormDetails = {
  email: "",
  firstname: "Deepak",
  address: "",
  city: "",
  // dob: new Date().toISOString().slice(0,10),
  dob:"",
  phone: "",
  state: "",
  zip: "",
  lastname: "",
  gpa: 0,
  universityLocation: "",
  universityName: "",
  currStep:1,
  nextStep:2,
  prevStep:0
};

export default function useMultiForm(steps: string[]) {
  const { query } = useRouter();
  // console.log(query);

  // we can add the conditional fetch for resume option. useSWR()
  const [details,setDetailes] = useState<ApplyFormDetails>({...INITIAL_APPLY_FORM_VALUES,prevStep:0,currStep:1,nextStep:2});

  // can set the initial value for resume feature. init with '0'
  const [activeStep, setActiveStep] = useState(0);
  const activeStepValidation = APPLY_FORM_VALIDATIONS[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function next() {
    setActiveStep((i) => {
      if (i < steps.length) return i + 1;
      return i;
    });
    setDetailes(prev=>{
      return {...prev,currStep:activeStep+1,prevStep:activeStep,nextStep:activeStep+2}
    })
  }

  function back() {
    setActiveStep((i) => {
      if (i > 0) return i - 1;
      return i;
    });
    setDetailes(prev=>{
      return {...prev,currStep:activeStep+1,prevStep:activeStep,nextStep:activeStep+2}
    })
  }

  return {
    activeStep,
    next,
    back,
    isLastStep,
    getStepLength: steps.length,
    details,
    activeStepValidation,
  } as const;
}
