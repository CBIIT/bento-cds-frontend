import { useEffect, useState } from 'react';
import client from '../../../../../utils/graphqlClient';

export const getDataTest = '';

export const getManifestData = (query, filesId) => {
  async function getData() {
    const result = await client.query({
      query,
      variables: {
        file_ids: filesId,
      },
    })
      .then((response) => response.data);
    return result;
  }

  const [data, setData] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    getData().then((result) => {
      if (result) {
        setData(result);
      }
    });
    return () => {
      // cancel the request before component unmounts
      controller.abort();
    };
  }, [filesId]);

  return { data };
};
