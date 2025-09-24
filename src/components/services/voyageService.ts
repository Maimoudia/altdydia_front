import api from "../api";

export const getVoyages = () => api.get("/voyages");
export const createVoyage = (data: any) => api.post("/voyages", data);
export const updateVoyage = (id: number, data: any) => api.put(`/voyages/${id}`, data);
export const deleteVoyage = (id: number) => api.delete(`/voyages/${id}`);
