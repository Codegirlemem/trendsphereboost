import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

export function useFetchAccounts(url) {
  // const [data, setData] = useState([]);
  let data = useRef([]);
  let error = useRef(null);

  useEffect(() => {
    async function getAccounts(url) {
      try {
        const response = await axios.get(url);
        data.current = response.data;
        // setData(response.data);
      } catch (err) {
        error.current = `Error ${err.message}`;
        // setData(`Error ${err.message}`);
      }
    }
    getAccounts('http://localhost:9000/accounts');
  }, []);
  return [data.current, error.current];
}

// export async function appAccounts(url) {
//   try {
//     const response = await axios.get(url);
//     return response;
//   } catch (err) {
//     console.log(err);
//     return err;
//   }
// }
