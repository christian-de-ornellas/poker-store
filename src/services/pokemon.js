import http from './http';

export const findAll = async () => {
  try {
    const response = await http.get('/type/11');
    return response.data.pokemon;
  } catch (error) {
    console.error(error);
  }
};
