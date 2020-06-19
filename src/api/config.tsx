import packageJson from "../../package.json";

const env: any = process.env;

export default {
  VERSION: packageJson.version,
  API_HOST: env.REACT_APP_API_HOST,
  AUTH_API_HOST: env.REACT_APP_AUTH_API_HOST,
};
