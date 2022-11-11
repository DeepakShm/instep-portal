export interface ApplyFormDetails {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  address: string;
  state: string;
  dob: Date | string;
  city: string;
  zip: string;
  gpa: number;
  universityLocation: string;
  universityName: string;
  nextStep:number | null;
  prevStep:number | null;
  currStep:number | null;
}
