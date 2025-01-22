export const fetchData = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);

    // Throw an error if the response was not 2xx - let the catch statement handle it
    if (!response.ok) throw new Error(`Fetch failed. ${response.status} ${response.statusText}`)

    // Guard clause: make sure that the content type of the response is JSON before reading it
    const contentType = response.headers.get('content-type');
    if (contentType === null || !contentType.includes('application/json')) {
      // If the contentType of the response is not JSON, read the stream as plain text
      const textData = await response.text();
      return [textData, null]
    }

    // Return a "tuple", making error handling on the "receiving" end easier
    const jsonData = await response.json();
    return [jsonData, null]
  }
  catch (error) {
    // if there was an error, log it and return a tuple: [data, error]
    console.error(error.message);
    return [null, error];
  }
}