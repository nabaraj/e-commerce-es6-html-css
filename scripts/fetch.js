// fetch.js
export const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return await error;
  }
};
