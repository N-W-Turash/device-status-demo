import * as Yup from "yup";

const emailSchema = Yup.string()
    .required("Email is required");

const passwordSchema = Yup.string()
    .required("Password is required");

export const validationSchema = Yup.object({
    email: emailSchema,
    password: passwordSchema,
});

export const initialFormValues = {
    email: "",
    password: "",
};

