function parseJSON(response) {
    return response;
  }
  
  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    }
  
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
  
  export default function request(url, options) {
    return fetch(url, options)
      .then(checkStatus)
      .then(parseJSON)
      .then(data => ({ data }))
      .catch((error) => {
        if (error) {
          alert('网络出错啦！');
        }
        return { error };
      });
  }