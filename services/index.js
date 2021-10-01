const { getAPI } = require("./apiCall");
const {
  getCityByUf,
  getCityByName,
  filterCityFields,
  getCityByRegion,
  getCityByState,
} = require("./city");

module.exports = {
  getAPI,
  getCityByUf,
  getCityByName,
  filterCityFields,
  getCityByRegion,
  getCityByState,
};
