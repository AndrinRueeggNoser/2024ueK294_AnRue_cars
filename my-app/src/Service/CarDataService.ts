import { AxiosInstance } from "axios";
import { defaultInstance } from "./Api";

const CarDataService = (api: AxiosInstance = defaultInstance) => ({
  getCarData: async () => {
    try {
      const response = await api.get("cars?_limit=30");
      return response["data"];
    } catch (error) {
      console.error("Error occurred");
    }
  },

  
  getCarById: async (carId) => {
    try {
      const response = await api.get(`cars/${carId}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error occured");
    }
  },


  deleteCar: async (carId) => {
    try {
      const response = await api.delete(`cars/${carId}`);
      return response.data;
    } catch (error) {
      console.error("Error occured");
    }
  },

  createCar: async (carId) => {
    try {
      const data = {  };

      const response = await api.post("cars", data);
      return response.data;
    } catch (error) {
      console.error("Error accured");
    }
  },


  updateCar: async (carId, updatedCarData) => {
    try {
      const response = await api.put(`cars/${carId}`, updatedCarData);
      return response.data;
    } catch (error) {
      console.error("Error occurred while updating car details", error);
    }
  },
  
});  
export default CarDataService();
