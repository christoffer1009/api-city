const {
  getAPI,
  filterCityFields,
  getCityByUf,
  getCityByName,
  getCityByRegion,
  getCityByState,
} = require("../services");
const {
  validateUF,
  validateName,
  validateRegion,
  validateState,
} = require("../validator");
const ApiError = require("../errors/ApiError");

const getCity = async (req, res) => {
  // // Return a array of city objects with the given params
  try {
    const params = {
      uf: req.query.uf,
      name: req.query.name,
      region: req.query.region,
      state: req.query.state,
    };

    let cityByUF = [];
    let cityByName = [];
    let cityByRegion = [];
    let cityByState = [];
    let cities = [];

    // Validate params
    ufIsValid = validateUF(params.uf);
    nameIsValid = validateName(params.name);
    regionIsValid = validateRegion(params.region);
    stateIsValid = validateState(params.state);

    // Call IBGE API
    const data = await getAPI();

    // Filter object fields
    const allCities = await filterCityFields(data);

    // Find cities with given uf
    if (ufIsValid) {
      cityByUF = await getCityByUf(allCities, params.uf);

      if (cityByUF.length > 0) {
        cities = cityByUF;
      } else {
        throw new ApiError("No city was found with the given parameters", 404);
      }
    } else {
      cities = allCities;
    }

    if (nameIsValid) {
      cityByName = await getCityByName(cities, params.name);
      if (cityByName.length > 0) {
        cities = await getCityByName(cities, params.name);
      } else {
        throw new ApiError("No city was found with the given parameters", 404);
      }
    }

    if (regionIsValid) {
      cityByRegion = await getCityByRegion(cities, params.region);

      if (cityByRegion.length > 0) {
        cities = await getCityByRegion(cities, params.region);
      } else {
        throw new ApiError("No city was found with the given parameters", 404);
      }
    }

    if (stateIsValid) {
      cityByState = await getCityByState(cities, params.state);

      if (cityByState.length > 0) {
        cities = await getCityByState(cities, params.state);
      } else {
        throw new ApiError("No city was found with the given parameters", 404);
      }
    }

    // No params passed
    if (!params) {
      throw new ApiError("No city was found with the given parameters", 404);
    }

    res.status(200).json(cities);
  } catch (error) {
    console.error(error);
    res.status(error.statusCode).json({ message: error.message });
  }
};

module.exports = { getCity };
