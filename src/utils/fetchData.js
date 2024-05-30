import axios from 'axios';

export async function fetchData(url, controller) {
  if (controller.current) {
    controller.current.abort();
  }
  controller.current = new AbortController();
  const signal = controller.current.signal;

  try {
    const response = await axios.get(url, { signal });

    if (response.status === 200) return response.data.results;
    throw new Error('error getting data');
  } catch (error) {
    return error.message;
  } finally {
    controller.current = null;
  }
}
