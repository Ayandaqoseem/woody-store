import axios from 'axios';


const organization_id = process.env.REACT_APP_ORG_ID
const reverse_sort = process.env.REACT_APP_REVERSE_SORT
const page = process.env.REACT_APP_PAGE
const size = process.env.REACT_APP_SIZE
const app_ID = process.env.REACT_APP_API_ID
const app_key = process.env.REACT_APP_API_KEY

const API_url = process.env.REACT_APP_API_URL;
const API_url_single_product = process.env.REACT_APP_API_URL_SINGLE_PRODUCT



const API_URL = `${API_url}?organization_id=${organization_id}&reverse_sort=${reverse_sort}&page=${page}&size=${size}&Appid=${app_ID}&Apikey=${app_key}`;
const SINGLE_PRODUCT_API_URL = `?organization_id=${organization_id}&Appid=${app_ID}&Apikey=${app_key}`

 

// Fetch products
const getProducts = async () => {
    const response = await axios.get(API_URL)
    return response.data.items;

};

const getProduct = async (id) => {
  const response = await axios.get(API_url_single_product + id + SINGLE_PRODUCT_API_URL)
  return response.data; 

};

const productService = {
  getProducts,
  getProduct
};

export default productService;
