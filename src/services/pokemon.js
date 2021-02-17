import http from './http';

export const findAll = async (type) => {
  try {
    const response = await http.get(`/type/${type}`);
    return response.data.pokemon;
  } catch (error) {
    console.error({ error: error.message });
  }
};

export const find = async (url) => {
  try {
    const ruleRegex = /(\/pokemon\/[0-9])\w*/g;
    const path = url.match(ruleRegex);
    const response = await http.get(`${path[0]}`);
    return response.data;
  } catch (error) {
    console.error({ error: error.message });
  }
};

export const findByName = async (name) => {
  try {
    const response = await http.get(`/pokemon/${name}`);
    return response.data;
  } catch (error) {
    console.error({ error: error.message });
  }
};
