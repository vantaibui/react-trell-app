import axois from "axios";
import { API_ROOT, API_VERSION } from "~/utils/constants";

export const createNewColumnAPI = async (newColumn) => {
    const response = await axois.post(`${API_ROOT}/${API_VERSION.v1}/columns`, newColumn);
    return response.data;
  };