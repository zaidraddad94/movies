import env from '../environments/env.json';

let state = {
  count: 1,
};

let API_CAll = (client, endPoint, Params) => {
  Params.api_key = env.API_KEY;
  const searchParams = new URLSearchParams();
  Object.keys(Params).forEach(key => searchParams.append(key, Params[key]));
  let params = '?' + searchParams.toString();
  state[state.count] = Date.now();
  return client
    .get(endPoint + params)
    .then(result => {
      if (__DEV__) {
        console.log(
          `======================== API RESULT  succses ========================\n`,
          result,
          endPoint + params,
          `\n============ finshed in ${
            (Date.now() - state[state.count]) / 1000
          } secands =============`,
        );
      }
      return result;
    })
    .catch(e => {
      if (__DEV__) {
        console.log(
          `======================== API RESULT faild ========================\n`,
          e,
          endPoint + params,
          `\n============ finshed in ${
            (Date.now() - state[state.count]) / 1000
          } secands =============`,
        );
      }
      return e;
    });
};

export default API_CAll;