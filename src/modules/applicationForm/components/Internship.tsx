import InputField from "../../../common/components/InputField";
import Apply_Form_Model from "../ApplyForm.model";


const Internship = ({errors,touched}:any) => {
    return(
        <>
            <div >
                    <InputField name="address" label="Address" />
                    <InputField name="city" label="city" />
            </div>
            <div >
                    <InputField name="state" label="state" />
                    <InputField name="zip" label="zip" />
            </div>
        </>
    )
}

export default Internship