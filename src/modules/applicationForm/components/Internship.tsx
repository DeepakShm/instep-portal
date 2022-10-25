import InputField from "../../../common/components/InputField";

const Internship = ({}: any) => {
  return (
    <>
      <div>
        <InputField name="address" label="Address" />
        <InputField name="city" label="city" />
      </div>
      <div>
        <InputField name="state" label="state" />
        <InputField name="zip" label="zip" />
      </div>
    </>
  );
};

export default Internship;
