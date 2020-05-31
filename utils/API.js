import axios from "axios";

export default {
  pokesearch: function (query) {
    return axios.get(
        'https://pokeapi.co/api/v2/pokemon/ditto'
    );
  },
};
