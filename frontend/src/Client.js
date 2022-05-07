const axios = require("axios")

let API_SERVER_VAL = '';

switch (process.env.NODE_ENV) {
    case 'development':
        API_SERVER_VAL = 'http://localhost:8000';
        break;
}

const client = axios.create({
    baseURL: `${API_SERVER_VAL}`,
    responseType: "json",
})

export default client