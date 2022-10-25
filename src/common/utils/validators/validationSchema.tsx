import * as Yup from "yup";

export const APPLY_FORM_VALIDATIONS: Array<Object> = [
  Yup.object({
    firstName: Yup.string().required("First name required"),
    lastName: Yup.string().required("Last name required"),
    email: Yup.string().email("Invalid email").required("Email required"),
    phone: Yup.string().required("Phone number required"),
    dob: Yup.string().required("DOB required"),
  }),
  Yup.object({
    universityLocation: Yup.string().required("University Location required"),
    universityName: Yup.string().required("University Name required"),
    cgpa: Yup.string().required("CGPA required"),
  }),
  Yup.object({
    address: Yup.string().required("Address required"),
    city: Yup.string().required("City required"),
    state: Yup.string().required("State required"),
    zip: Yup.string().required("Zip required"),
  }),
];
