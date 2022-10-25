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

  const handleApplyForm = (
    values: ApplyFormDetails,
    action: FormikHelpers<ApplyFormDetails>
  ) => {
    console.log(values);
    if (isLastStep) {
      submitApplyForm(values, action);
    } else {
      next();
      action.setTouched({});
      action.setSubmitting(false);
    }
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
        <h1 className="text-xl font-bold my-4">Application Process</h1>
        <div>
          <Stepper activeStep={activeStep} steps={steps} />
        </div>
        <div className="m-4">
          {activeStep === getStepLength ? (
            <div>
              <h1>Done filling the form</h1>
              <code>{}</code>
            </div>
          ) : (
            <Formik
              initialValues={details}
              onSubmit={(values, action) => {
                handleApplyForm(values, action);
              }}
              validationSchema={activeStepValidation}
            >
              {({ errors, isValid, touched, isSubmitting, dirty }) => (
                <Form id="apply-form" className="form">
                  {renderStepContent(activeStep)}

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
      </div>
    </div>
  );
};

export default Apply;
