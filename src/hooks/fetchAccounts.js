import axios from 'axios';

export async function fetchAccounts(url) {
  try {
    const response = await axios.get(url);
    return response.data;
    // setData(response.data);
  } catch (error) {
    console.error(
      `There was a problem fetching accounts data: ${error.message}`,
    );
  }
}
