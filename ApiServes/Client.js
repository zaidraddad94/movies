import env from '../environments/env.json';
import axios from 'axios';
let _state = {
  CLIENT: false,
};

let CLIENT = () => {
  if (!_state.CLIENT) {
    //creat client save it then return it //HAPPEND FOR THE FIRST TIME
    const client = axios.create({
      baseURL: env.API_BASE_URL,
    });

    _state.CLIENT = client;
    return _state.CLIENT;
  } else {
    //if there is alredy client just return it
    return _state.CLIENT;
  }
};

export default CLIENT;