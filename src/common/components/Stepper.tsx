type props = {
  activeStep: number;
  steps: Array<string | number>;
};
const Stepper = ({ activeStep, steps }: props) => {
  return (
    <div className="stepper p-4">
      <div className="flex flex-row justify-between steps">
        {steps.map((step, id) => {
          return (
            <div
              className={`step ${id < activeStep && "done-step"} ${
                id == activeStep && "active-step"
              }`}
              key={step}
            >
              <div className="flex flex-col text-center gap-1 items-center">
                <div className="step-number">{id + 1}</div>
                <p className="step-text">{step}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
