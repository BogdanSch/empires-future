const VITE_REACT_APP_SHEET_DB_BASE_URL_KEY = import.meta.env
  .VITE_REACT_APP_SHEET_DB_BASE_URL_KEY;
const VITE_REACT_APP_SHEET_DB_KEY = import.meta.env.VITE_REACT_APP_SHEET_DB_KEY;

const submitSheetDBData = async (formData: {
  [key: string]: string;
}): Promise<Response> => {
  const response = await fetch(
    `${VITE_REACT_APP_SHEET_DB_BASE_URL_KEY}${VITE_REACT_APP_SHEET_DB_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: formData }),
    }
  );

  if (response.ok) {
    return response;
  } else {
    throw new Error("Failed to submit application.");
  }
};

export default submitSheetDBData;
