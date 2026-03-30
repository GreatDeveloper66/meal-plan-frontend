//make an API call to the grocery service to get the grocery stores within a certain radius of the user's location
import axios from 'axios';
import dotenv from 'dotenv';
import { places } from '../data_types/data_types';

dotenv.config();

const getStoreInformationWithinRadius = async (latitude: number, longitude: number, radius: number): Promise<places[]> => {
  try {
    const places = await axios.get<places[]>(process.env.GROCERY_SERVICES_URL!, {
        params: {
            latitude,
            longitude,
            radius
        }
    });
    return places.data;
  } catch (error) {
    console.error('Error fetching store information:', error);
    throw error;
  };
};
export default getStoreInformationWithinRadius;
