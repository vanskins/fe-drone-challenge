/* eslint-disable @typescript-eslint/no-unused-vars */
import axiosInstance from "./apiConfig";

export const postInstructions = async (instruction: string) => {
  try {
    const response = await axiosInstance.get(
      `/instruct-drone?instructions=${instruction}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
export const getBillboard = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/get-billboard?id=${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
