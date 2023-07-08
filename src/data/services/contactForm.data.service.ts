import {
  ContactFormRepository,
  contactFormInput,
} from "../../domain/repositories";
import { httpService } from "../http/services/http";
import { Endpoints } from "./endpoints";

export function contactFormDataService(): ContactFormRepository {
  const { post } = httpService();
  return {
    async send({ contactFormData, success, error }: contactFormInput) {
      try {
        // const data = await post(Endpoints.send, {
        //   service_id: import.meta.env.VITE_APP_API_SERVICE_ID,
        //   template_id: import.meta.env.VITE_APP_API_TEMPLATE_ID,
        //   user_id: import.meta.env.VITE_APP_API_USER_ID,
        //   template_params: {
        //     ...contactFormData,
        //   },
        // });
        if (success) {
          success();
        }
      } catch (e) {
        if (error) {
          error(e);
        }
      }
    },
  };
}
