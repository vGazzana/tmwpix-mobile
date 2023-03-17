/* Hook Personalizado para Requisições ao Servidor */
/* Usage: 

import useFetch from 'hooks/useFetch'

const {isLoading, error, data, Request} = useFetch()
const { json } = await Request(url, options)

*/
import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const Request = React.useCallback(async (url, options) => {
    var response, json;

    try {
      setError(null);
      setIsLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (json.status === 1) throw new Error(json?.erro);
    } catch (error) {
      json = null;
      setError(error.message);
    } finally {
      setData(json);
      setIsLoading(false);
      return {json};
    }
  }, []);

  return {data, error, isLoading, Request};
};

export default useFetch;
