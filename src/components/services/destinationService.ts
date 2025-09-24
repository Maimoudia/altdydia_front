import api from "../api";

export const getDestinations = () => api.get("/destinations");
export const createDestination = (data: any) => api.post("/destinations", data);
export const updateDestination = (id: number, data: any) => api.put(`/destinations/${id}`, data);
export const deleteDestination = (id: number) => api.delete(`/destinations/${id}`);
