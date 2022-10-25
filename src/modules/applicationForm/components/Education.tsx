import InputField from "../../../common/components/InputField";
import Apply_Form_Model from "../ApplyForm.model";

const Education = () => {
    return(
        <>
            <div >
                    <InputField name="universityLocation" label="University Location" />
                    <InputField name="universityName" label="University Name" />
            </div>
            <div >
                    <InputField name="cgpa" label="CGPA" />
            </div>
        </>
    )
}

export default Education