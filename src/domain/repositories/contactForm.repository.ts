import { ContactFormEntity } from "../entities";
import { handleResponse } from "../shared";
export interface contactFormInput extends handleResponse {
  contactFormData: ContactFormEntity;
}

export interface ContactFormRepository {
  send({ contactFormData, success, error }: contactFormInput): void;
}
