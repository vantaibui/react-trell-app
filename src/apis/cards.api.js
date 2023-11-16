import axois from "axios";
import { API_ROOT, API_VERSION } from "~/utils/constants";

export const createNewCardAPI = async (newCard) => {
  const response = await axois.post(`${API_ROOT}/${API_VERSION.v1}/cards`, newCard);
  return response.data;
};
