import InputField from "../../../common/components/InputField";

const Education = () => {
  return (
    <>
      <div>
        <InputField name="universityLocation" label="University Location" />
        <InputField name="universityName" label="University Name" />
      </div>
      <div>
        <InputField name="gpa" type="number" label="GPA" />
      </div>
    </>
  );
};

export default Education;
