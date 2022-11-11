import Head from "next/head";
import { NextPage } from "next";
import { ApplyFormDetails } from "../../common/types/applicationForm";
import { Form, Formik, FormikHelpers } from "formik";
import styles from "../../../styles/Home.module.scss";

import Education from "../../modules/applicationForm/components/Education";
import Interest from "../../modules/applicationForm/components/Interest";
import Internship from "../../modules/applicationForm/components/Internship";
import Personal from "../../modules/applicationForm/components/Personal";
import useMultiForm from "../../common/hooks/useMultiForm";
import Stepper from "../../common/components/Stepper";
import useSubmitForm, { saveDetails, swrArgs } from "../../common/hooks/useSubmitForm";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";

const steps = ["Personal Info", "Education", "Internship"];

// move it to apply-now page

// eslint-disable-next-line require-jsdoc
function renderStepContent(step: number) {
  switch (step) {
    case 0:
      return <Personal />;
    case 1:
      return <Education />;
    case 2:
      return <Interest />;
    case 3:
      return <Internship />;
    default:
      return <div>Not Found</div>;
  }
}

const Apply: NextPage = () => {

  const [dataError, setDataError] = useState<{ data: any, error: any }>({ data: undefined, error: undefined });
  const [doneSteps, setDoneSteps] = useState(0);

  const {
    activeStep,
    isLastStep,
    next,
    back,
    details,
    activeStepValidation,
    getStepLength,
  } = useMultiForm(steps);

  const submitApplyForm = (
    values: ApplyFormDetails,
    action: FormikHelpers<ApplyFormDetails>
  ) => {
    action.setSubmitting(false);
    next();
  };

  const handleApplyForm = async (
    values: ApplyFormDetails,
    action: FormikHelpers<ApplyFormDetails>
  ) => {

    if (doneSteps > activeStep) {
      if (isLastStep) {
        submitApplyForm(values, action);
      } else {
        next();
        action.setTouched({});
        action.setSubmitting(false);
      }
      return;
    }

    const args: swrArgs = {
      url: `http://localhost:3010/applyform/step/${activeStep + 1}`,
      method: "post",
      body: { ...values, dob: new Date(values.dob) }
    }
    // setDataError(prev=>{return {...prev,data:res}})

    try {
      // api call here.
      const res = await axios({
        method: args.method,
        url: args.url,
        data: args?.body,
        responseType: "json",
      });

      setDataError(prev => { return { error: undefined, data: res } })

      if (isLastStep) {
        submitApplyForm(values, action);
      } else {
        next();
        action.setTouched({});
        action.setSubmitting(false);
      }
      setDoneSteps(activeStep + 1);

    } catch (error) {
      setDataError(prev => { return { data: undefined, error: error } })
    }

    setTimeout(() => {
      action.setTouched({});
      action.setSubmitting(false);
    }, 2000);



  };

  const handleBack = () => {
    back();
  };

  return (
    <div>
      <Head>
        <title>Apply</title>
      </Head>
      <div className={styles["application-process"]}>
        <Link href="/" >
          <button>Home</button>
        </Link>
        <h1 className="text-xl font-bold my-4">Application Process</h1>
        <div>
          <Stepper activeStep={activeStep} steps={steps} />
        </div>
        <div className="m-4">
          {activeStep === getStepLength ? (
            <div>
              <h1>Done filling the form</h1>
            </div>
          ) : (
            <Formik
              initialValues={details}
              onSubmit={(values, action) => {
                handleApplyForm(values, action);
              }}
              validationSchema={activeStepValidation}
            >
              {({ isSubmitting }) => (
                <Form id="apply-form" className="form">
                  <div className="my-3">{renderStepContent(activeStep)}</div>

                  {activeStep !== 0 && (
                    <button onClick={handleBack} type="button">
                      Back
                    </button>
                  )}
                  <button disabled={isSubmitting} type="submit">
                    {isLastStep ? "Submit" : "Next"}
                  </button>
                </Form>
              )}
            </Formik>
          )}
        </div>
        <div>
          <h1>Data</h1>
          <div>
            {<pre>
              <code className="text-green-600">{dataError.data && JSON.stringify({ "data": dataError.data.data }, null, 4)}</code>
              <br />
              <code className="text-red-600">{dataError.error && JSON.stringify({ "error": dataError.error?.response?.data }, null, 4)}</code></pre>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
