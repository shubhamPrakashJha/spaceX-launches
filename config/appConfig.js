const activeConfig = "dev"

const config = {
  dev: {
    url: {
      api: 'https://api.spaceXdata.com/v3/',
      origin: 'https://api.spaceXdata.com',
    },
  },
  prod: {
    url: {
      api: 'https://api.spaceXdata.com/v3/',
      origin: 'https://api.spaceXdata.com',
    },
  }
};

const appConfig = config[activeConfig];

export default appConfig;
