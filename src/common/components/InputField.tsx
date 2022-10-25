import { useField } from "formik";
type inputProp = {
  label: string;
  id?: string;
  name: string;
  type?: string;
  onChange?: () => void;
};

const InputField = ({ label, ...props }: inputProp) => {
  const [field, meta] = useField(props);
  return (
    <div className="input-group">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className={`${meta.touched && meta.error && "!border-red-600"}`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <span className="error-msg text-red-600">{meta.error}</span>
      ) : null}
    </div>
  );
};

export default InputField;
