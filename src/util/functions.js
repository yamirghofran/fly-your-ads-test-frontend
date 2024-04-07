import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const uploadFiles = async (files) => {
  const formData = new FormData();
  files.forEach(file => {
    formData.append('media', file);
  });

  try {
    const response = await axios.post(`${BASE_URL}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

const addNewAdvertisement = async (title, creatives, startDate, timePeriod, location, description) => {
    const advertisement = {title, creatives, startDate, timePeriod, location, description, status: 'ordered', metrics: []};
  try {
    const response = await axios.post(`${BASE_URL}/ads`, {
        data: {advertisement},
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export { uploadFiles, addNewAdvertisement };

