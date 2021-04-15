const ApiClient = async (url: string, init?: RequestInit) => {
  let doRequest = await fetch(url, init);
  let result = await doRequest.json();
  return result;
};

export default ApiClient;
