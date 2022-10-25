import { useRouter } from "next/router";
import { useState } from "react";
import { ApplyFormDetails } from "../types/applicationForm";
import { APPLY_FORM_VALIDATIONS } from "../utils/validators/validationSchema";

const INITIAL_APPLY_FORM_VALUES: ApplyFormDetails = {
  email: "",
  firstName: "",
  address: "",
  city: "",
  dob: new Date(),
  phone: "",
  state: "",
  zip: "",
  lastName: "",
  cgpa: 0,
  universityLocation: "",
  universityName: "",
};

export default function useMultiForm(steps: string[]) {
  const { query } = useRouter();
  console.log(query);

  // we can add the conditional fetch for resume option. useSWR()
  const [details, setDetails] = useState<ApplyFormDetails>(
    INITIAL_APPLY_FORM_VALUES
  );

  // can set the initial value for resume feature. init with '0'
  const [activeStep, setActiveStep] = useState(0);
  const activeStepValidation = APPLY_FORM_VALIDATIONS[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function next() {
    setActiveStep((i) => {
      if (i < steps.length) return i + 1;
      return i;
    });
  }

  function back() {
    setActiveStep((i) => {
      if (i > 0) return i - 1;
      return i;
    });
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
