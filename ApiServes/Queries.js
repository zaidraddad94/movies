import API_CAll from './apiCall';
import CLIENT from './Client';

function Queries() {
  let client = CLIENT();
  return {
    upcoming: Params => API_CAll(client, '/movie/upcoming', Params),
    top_rated: Params => API_CAll(client, '/movie/top_rated', Params),
    popular: Params => API_CAll(client, '/movie/popular', Params),
    movieById: (id, Params) => API_CAll(client, `/movie/${id}`, Params),
    credits: (id, Params) => API_CAll(client, `movie/${id}/credits`, Params),
  };
}

export default Queries;
