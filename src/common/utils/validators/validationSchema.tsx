import * as Yup from "yup";

export const APPLY_FORM_VALIDATIONS: Array<Object> = [
  Yup.object({
    firstname: Yup.string().required("First name required"),
    lastname: Yup.string().required("Last name required"),
    email: Yup.string().email("Invalid email").required("Email required"),
    phone: Yup.string().required("Phone number required"),
    dob: Yup.string().required("DOB required"),
  }),
  Yup.object({
    universityLocation: Yup.string().required("University Location required"),
    universityName: Yup.string().required("University Name required"),
    gpa: Yup.number().min(1,"GPA Need to be greater than 0").required("GPA required"),
  }),
  Yup.object({
    address: Yup.string().required("Address required"),
    city: Yup.string().required("City required"),
    state: Yup.string().required("State required"),
    zip: Yup.string().required("Zip required"),
  }),
];
