const ApiError = require("../errors/ApiError");

const validateUF = (uf) => {
  // UF validation

  if (uf == null) {
    return false;
  }

  const isUpperCase = uf == uf.toUpperCase();

  if (!isUpperCase) {
    throw new ApiError("Invalid uf field, its value must be upper case", 400);
  }

  const hasTwoLetters = uf.length == 2;

  if (!hasTwoLetters) {
    throw new ApiError("The uf field must have only two letters", 400);
  }

  return true;
};

const validateName = (name) => {
  if (name == null || name.length == 0) {
    return false;
  } else {
    return true;
  }
};

const validateRegion = (region) => {
  if (region == null || region.length == 0) {
    return false;
  } else {
    return true;
  }
};

const validateState = (state) => {
  if (state == null || state.length == 0) {
    return false;
  } else {
    return true;
  }
};

module.exports = { validateUF, validateName, validateRegion, validateState };
