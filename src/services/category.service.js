const MESSAGE_CODES = require('../properties/message_code');
const HTTP_CODES = require('../properties/http_code')

const getSuccess = (data) => {
  return {
    body: {
      data: data
    },
    status: HTTP_CODES[200],
    message: {
      messageCode: MESSAGE_CODES.SUCCESS_001,
      mesageContent: 'Category list.'
    }
  }
}

const getFail = (mesageContent) => {
  return {
    body: [],
    status: HTTP_CODES[500],
    message: {
      messageCode: MESSAGE_CODES.ERROR_001,
      mesageContent: mesageContent
    }
  }
}

const createSuccess = (categoryName) => {
  return {
    body: [],
    status: HTTP_CODES[201],
    message: {
      messageCode: MESSAGE_CODES.SUCCESS_002,
      mesageContent: `Create category ${categoryName} successfully.`
    }
  }
}

const createFail = (messageContent) => {
  return {
    body: [],
    status: HTTP_CODES[400],
    message: {
      messageCode: MESSAGE_CODES.ERROR_002,
      mesageContent: messageContent
    }
  }
}

const notFound = () => {
  return {
    body: [],
    status: HTTP_CODES[400],
    message: {
      messageCode: MESSAGE_CODES.ERROR_002,
      mesageContent: messageContent
    }
  }
}

module.exports = { getSuccess, getFail, createSuccess, createFail }
