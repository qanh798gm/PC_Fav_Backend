const HTTP_CODES = require('../properties/http_code');
const messageService = require('../services/message.service');

const getListSuccess = (data) => {
  return {
    body: {
      data: data,
    },
    status: HTTP_CODES[200],
    message: messageService.getListSuccess(),
  };
};

const getOneSuccess = (data) => {
  return {
    body: {
      data: data,
    },
    status: HTTP_CODES[200],
    message: messageService.getOneSuccess(),
  };
};

const notFound = () => {
  return {
    body: [],
    status: HTTP_CODES[400],
    message: messageService.notFound(),
  };
};

const createSuccess = () => {
  return {
    body: [],
    status: HTTP_CODES[201],
    message: messageService.createSuccess(),
  };
};

const createFail = () => {
  return {
    body: [],
    status: HTTP_CODES[400],
    message: messageService.createFail(),
  };
};

const updateSuccess = (newCategory) => {
  return {
    body: newCategory,
    status: HTTP_CODES[200],
    message: messageService.updateSuccess(),
  };
};

const updateFail = (newCategory) => {
  return {
    body: [],
    status: HTTP_CODES[400],
    message: messageService.updateFail(),
  };
};

const deleteSuccess = () => {
  return {
    body: [],
    status: HTTP_CODES[200],
    message: messageService.deleteSuccess(),
  };
};

const deleteFail = () => {
  return {
    body: [],
    status: HTTP_CODES[400],
    message: messageService.deleteFail(),
  };
};

const categoryService = {
  getListSuccess,
  getOneSuccess,
  notFound,
  createSuccess,
  createFail,
  updateSuccess,
  updateFail,
  deleteSuccess,
  deleteFail,
};

module.exports = categoryService;
