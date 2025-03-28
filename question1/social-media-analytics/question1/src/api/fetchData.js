import apiClient from "./apiClient";

export const fetchUsers = async () => {
  const response = await apiClient.get("/users");
  return response.data;
};

export const fetchTrendingPosts = async () => {
  const response = await apiClient.get("/posts?_sort=comments&_order=desc");
  return response.data;
};

export const fetchLiveFeed = async () => {
  const response = await apiClient.get("/posts?_sort=date&_order=desc");
  return response.data;
};
