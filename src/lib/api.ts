const API = "http://localhost:5000";

const endpoint = (path: string): string => API + path;

const get = async (path: string): Promise<any> => {
  return fetch(endpoint(path)).then((res) => res.json());
};


export const getVehicles = async () => {
  return get("/veiculos");
};
