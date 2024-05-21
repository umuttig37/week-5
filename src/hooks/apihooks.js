import {useEffect, useState} from 'react';

const fetchData = async (url, options = {}) => {
  const response = await fetch(url, options);
  const json = await response.json();
  if (!response.ok) {
    if (json.message) {
      throw new Error(json.message);
    }
    throw new Error(`Error ${response.status} occured`);
  }
  return json;
};
const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const getMedia = async () => {
    try {
      const json = await fetchData(import.meta.env.VITE_MEDIA_API + '/media');

      const jsonUser = await Promise.all(
        json.map(async (item) => {
          const result = await fetchData(
            import.meta.env.VITE_AUTH_API + '/users/' + item.user_id,
          );
          return {...item, username: result.username};
        }),
      );
      setMediaArray(jsonUser);
    } catch (e) {
      console.error(e.message);
    }
  };
  useEffect(() => {
    getMedia();
  }, []);
  return {mediaArray};
};

const useAuthentication = () => {
  const login = async (inputs) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };

    const loginResult = await fetchData(
      import.meta.env.VITE_AUTH_API + '/auth/login',
      options,
    );
    return loginResult;
  };

  return {login};
};

const useUser = () => {
  const getUserById = async (id) => {
    const userResult = await fetchData(
      import.meta.env.VITE_AUTH_API + '/users/' + id,
    );
    return userResult;
  };

  const getUserByToken = async (token) => {
    const options = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    const tokenResult = await fetchData(
      import.meta.env.VITE_AUTH_API + '/users/token',
      options,
    );
    return tokenResult;
  };

  const register = async (inputs) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };

    return await fetchData(import.meta.env.VITE_AUTH_API + '/users', options);
  };

  return {getUserById, getUserByToken, register};
};

export {useMedia, useAuthentication, useUser};
