const ValidationError = require("../errors/ApiError");

const filterCityFields = async (data) => {
  //Filter the objects fields
  try {
    const cities = [];

    data.forEach((city) => {
      cities.push({
        id: city.id,
        name: city.nome,
        state: city.microrregiao.mesorregiao.UF.nome,
        uf: city.microrregiao.mesorregiao.UF.sigla,
        region: city.microrregiao.mesorregiao.UF.regiao.nome,
      });
    });

    return cities;
  } catch (error) {
    console.error(error);
    res.json(error.message);
  }
};

const getCityByUf = async (data, query) => {
  // Return a array of city objects with the given uf
  try {
    const cities = [];

    // Find cities with given uf
    data.forEach((city) => {
      if (city.uf == query) {
        cities.push(city);
      }
    });

    return cities;
  } catch (error) {
    console.error(error);
    return { message: error.message };
  }
};

const getCityByName = async (data, query) => {
  // Return a array of city objects with the given name
  try {
    const cities = [];

    // Find cities with given name
    data.forEach((city) => {
      if (city.name.toUpperCase().includes(query.toUpperCase())) {
        cities.push(city);
      }
    });

    return cities;
  } catch (error) {
    console.error(error);
    return { message: error.message };
  }
};

const getCityByRegion = async (data, query) => {
  // Return a array of city objects with the given region
  try {
    const cities = [];

    // Find cities with given name
    data.forEach((city) => {
      if (city.region.toUpperCase().includes(query.toUpperCase())) {
        cities.push(city);
      }
    });

    return cities;
  } catch (error) {
    console.error(error);
    return { message: error.message };
  }
};

const getCityByState = async (data, query) => {
  // Return a array of city objects with the given state
  try {
    const cities = [];

    // Find cities with given name
    data.forEach((city) => {
      if (city.state.toUpperCase().includes(query.toUpperCase())) {
        cities.push(city);
      }
    });

    return cities;
  } catch (error) {
    console.error(error);
    return { message: error.message };
  }
};

module.exports = {
  getCityByUf,
  getCityByName,
  getCityByRegion,
  getCityByState,
  filterCityFields,
};
