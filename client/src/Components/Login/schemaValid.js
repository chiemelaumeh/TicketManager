import * as yup from "yup"

export const dataSchema = yup.object().shape({
    email: yup.string().email("Please enter valid email").required("Required"),
    password: yup.string().min(5, "To short").required("Required")
});