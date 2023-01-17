import axios from 'axios';

export const useAxios = (accessToken: string | undefined) => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
