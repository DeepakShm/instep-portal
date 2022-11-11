import InputField from "../../../common/components/InputField";

const Personal = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-8">
          <InputField name="firstname" label="firstname" type="text" />
          <InputField name="lastname" label="lastname" />
        </div>
        <div className="flex flex-row gap-8">
          <InputField name="email" label="email" />
          <InputField
            name="code"
            label="code"
            onChange={() => console.log("Code")}
          />
          <InputField name="phone" label="phone" />
        </div>
        <div>
          <InputField name="dob" label="Date of birth" type="date" />
        </div>
      </div>
    </div>
  );
};

export default Personal;
