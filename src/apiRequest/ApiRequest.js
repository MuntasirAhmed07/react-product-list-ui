import axios from 'axios';

const BaseURL = 'https://dummyjson.com';

export async function getAllProducts() {
  try {
    const res = await axios.get(`${BaseURL}/products`);
    return res.status === 200 ? res.data.products : [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}
