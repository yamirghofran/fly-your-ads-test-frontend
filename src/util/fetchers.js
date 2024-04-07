import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // Your server's base URL

//Functions to fetch data from the server.

// Fetch users
export const fetchUsers = async () => {
  const { data } = await axios.get(`${BASE_URL}/users`);
  return data;
};

// You can add more fetchers below for other data types
// Fetch ads
export const fetchAds = async () => {
  const { data } = await axios.get(`${BASE_URL}/ads`);
  return data;
};

// Fetch creatives
export const fetchCreatives = async () => {
  const { data } = await axios.get(`${BASE_URL}/creatives`);
  console.log(data)
  return data;
};

// Fetch a specific user by ID
export const fetchUserById = async (userId) => {
  const { data } = await axios.get(`${BASE_URL}/users/${userId}`);
  return data;
};

// Fetch a specific ad by ID
export const fetchAdById = async (adId) => {
  const { data } = await axios.get(`${BASE_URL}/ads/${adId}`);
  return data;
};

// Fetch a specific creative by ID
export const fetchCreativeById = async (creativeId) => {
  const { data } = await axios.get(`${BASE_URL}/creatives/${creativeId}`);
  return data;
};

