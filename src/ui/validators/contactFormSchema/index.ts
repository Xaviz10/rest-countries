import * as yup from "yup";
import { emailSchema } from "../commonSchemas";

export const contactFormSchema = yup.object({
  email: emailSchema.required("Required field."),
  name: yup.string().required("Required field."),
  message: yup.string().required("Required field."),
});
