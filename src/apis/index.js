import axois from "axios";
import { API_ROOT, API_VERSION } from "~/utils/constants";

export const fetchBoardDetailsAPI = async (boardId) => {
  const response = await axois.get(
    `${API_ROOT}/${API_VERSION.v1}/boards/${boardId}`
  );

  return response.data;
};
