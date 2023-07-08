import { ContactFormRepository, contactFormInput } from "../../repositories";

export function useCaseContactForm(repository: ContactFormRepository) {
  return {
    sendEmail({ contactFormData, success, error }: contactFormInput) {
      return repository.send({ contactFormData, success, error });
    },
  };
}
