import baseEndpoint from "./baseEndpoint";

const authorizationToken = async () => {
  const token = await fetch(`${baseEndpoint}/`).then((response) => response.json());
  return token;
};

export default authorizationToken;
