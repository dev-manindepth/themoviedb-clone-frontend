const headers = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.JWT}`,
  },
};

export type ResponseType<T> = T extends Promise<infer R> ? R : any;
export type ApiResponse = ResponseType<typeof fetchDataFromApi>;
async function fetchDataFromApi(url: string): Promise<Response | any> {
  try {
    const response = await fetch(url, headers);
    return await response.json();
  } catch (err) {
    return err;
  }
}

export default fetchDataFromApi;