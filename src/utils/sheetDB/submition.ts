import axios from "axios";

const VITE_REACT_APP_SHEET_DB_BASE_URL_KEY = import.meta.env
  .VITE_REACT_APP_SHEET_DB_BASE_URL_KEY;
const VITE_REACT_APP_SHEET_DB_KEY = import.meta.env.VITE_REACT_APP_SHEET_DB_KEY;

const getConnectionString = (): string => {
  return `${VITE_REACT_APP_SHEET_DB_BASE_URL_KEY}${VITE_REACT_APP_SHEET_DB_KEY}`;
};

const submitSheetDBData = async (formData: {
  [key: string]: string;
}): Promise<any | null> => {
  const connectionString = getConnectionString();

  try {
    const response = await axios.post(connectionString, formData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default submitSheetDBData;
