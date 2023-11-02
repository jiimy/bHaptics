import apiInstance from "../util/useInterceptor";

export async function getDataApi(options) {
  if (options) {
    console.log('option 있음');
    const res = await apiInstance
      .get("/bhaptics", {
        params: { q: options },
      })
      .then((response) => response.data);
    return res;
  } else {
    const res = await apiInstance.get("/bhaptics").then((response) => response.data);
    return res;
  }
}

export async function getDataOptionsApi() {
  const res = await apiInstance.get("/bhaptics-options").then((response) => response.data);
  return res;
}
