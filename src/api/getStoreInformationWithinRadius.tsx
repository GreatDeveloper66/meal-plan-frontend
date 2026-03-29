//make an API call to the grocery service to get the grocery stores within a certain radius of the user's location
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const getStoreInformationWithinRadius = async (latitude: number, longitude: number, radius: number) => {
  try {
    const response = await axios.get(process.env.GROCERY_SERVICES_URL!, {
        params: {
            latitude,
            longitude,
            radius
        }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching store information:', error);
    throw error;
  }
};

export default getStoreInformationWithinRadius;