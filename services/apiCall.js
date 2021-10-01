const axios = require("axios");

const getAPI = async () => {
  // Call IBGE API and return an array of city objects
  try {
    const response = await axios.get(
      "https://servicodados.ibge.gov.br/api/v1/localidades/municipios"
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getAPI };
