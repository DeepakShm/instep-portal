const PERSONAL_INFO_MODEL = {
    firstName: {
        name: "firstName",
        label: "First name*",
        requiredErrorMsg: "First name is required",
        placeholder:"firstname",
        type:"text"
    },
    lastName: {
        name: "lastName",
        label: "Last name*",
        requiredErrorMsg: "Last name is required",
        type:"text"
    },
    email: {
        name: "email",
        label: "Email*",
        requiredErrorMsg: "Email is required",
        invalidErrorMsg: "Email is invalid",
        placeholder:"example@mail.co",
        type:"email"
      },
      phone: {
          name: "phone",
          label: "Phone*",
          requiredErrorMsg: "Phone is required",
          type:"phone"
      },
      dob: {
          name: "dob",
          label: "Date of Birth*",
          requiredErrorMsg: "Date of Birth is required",
          type:"date"
      },
}

const EDUCATION_MODEL = {
    universityLocation:{
        name:"universityLocation",
        label:"university location",
        type:"text",
        requiredErrorMsg: "University Location is required",
      },
      universityName:{
        name:"universityName",
        label:"university name",
        type:"text",
        requiredErrorMsg: "University Name is required",
      },
      cgpa:{
        name:"cgpa",
        label:"CGPA",
        type:"number",
        requiredErrorMsg:"CGPA is required"
      },
}

const INTEREST_MODEL = {
    interest:{
        name:"interest",
        label:"interest",
        type:"checkbox",
        requiredErrorMsg:"Interest are required",
    },
    skills:{
        name:"skills",
        label:"skills",
        requiredErrorMsg:"Skills are required"
    }
}
const Apply_Form_Model = {
    formId: "formId",
    formFileds:{
      address: {
          name: "address",
          label: "Address*",
          requiredErrorMsg: "Address is required",
      },
      city: {
          name: "city",
          label: "City*",
          requiredErrorMsg: "City is required",
      },
      state: {
          name: "state",
          label: "State*",
          requiredErrorMsg: "State is required",
      },
      zip: {
          name: "zip",
          label: "Zip*",
          requiredErrorMsg: "Zip is required",
      },
    },
  };
  
export default Apply_Form_Model;
  