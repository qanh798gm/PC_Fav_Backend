const MESSAGE_CODES = require('../properties/message_code');

const getListSuccess = () => {
  return MESSAGE_CODES.SUCCESS_001;
};

const getOneSuccess = () => {
  return MESSAGE_CODES.SUCCESS_002;
};

const notFound = () => {
  return MESSAGE_CODES.ERROR_001;
};

const createSuccess = () => {
  return MESSAGE_CODES.SUCCESS_003;
};

const createFail = () => {
  return MESSAGE_CODES.ERROR_002;
};

const updateSuccess = () => {
  return MESSAGE_CODES.SUCCESS_004;
};

const updateFail = () => {
  return MESSAGE_CODES.ERROR_003;
};

const deleteSuccess = () => {
  return MESSAGE_CODES.SUCCESS_005;
};

const deleteFail = () => {
  return MESSAGE_CODES.ERROR_004;
};

const messageService = {
  getListSuccess,
  getOneSuccess,
  createSuccess,
  notFound,
  createFail,
  updateSuccess,
  updateFail,
  deleteSuccess,
  deleteFail,
};

module.exports = messageService;
