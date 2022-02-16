import axios from "axios";

const http = axios.create({ baseURL: "http://localhost:3000/" });

export async function fetchAll(collection) {
  const { data } = await http.get(collection);
  return data;
}

export async function create(collection, body) {
  const { data } = await http.post(collection, body);
  return data;
}

export async function update(collection, id, body) {
  const { data } = await http.patch(`${collection}/${id}`, body);
  return data;
}

export async function remove(collection, id) {
  const { data } = await http.delete(`${collection}/${id}`);
  return data;
}
