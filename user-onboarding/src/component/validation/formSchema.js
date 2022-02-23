import * as yup from "yup";

const formSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .required("A first name is required!")
    .min(2, "First Name requires at least 2 letters"),
  lastName: yup
    .string()
    .trim()
    .required("A last name is required!")
    .min(2, "Last Name requires at least 2 letters"),
  email: yup
    .string()
    .email("Not a real email address, man!")
    .required("You need an email, bro!"),
  password: yup
    .string()
    .trim()
    .required("No password?! You're insane; add one!")
    .min(8, "What kind of a password's that?! 8+ digits, please!"),
  acceptTOS: yup
    .boolean()
    .oneOf([true], "You must accept our terms of service"),
});

export default formSchema;