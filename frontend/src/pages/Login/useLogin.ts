import { useState } from 'react';

const useLogin = () => {
  const [credentials, setCredentials] = useState({
    name: '',
    password: '',
  });

  const changeName = (value: string) => {
    setCredentials({ ...credentials, name: value.trimStart() });
  };

  const changePassword = (value: string) => {
    setCredentials({ ...credentials, password: value.trimStart() });
  };

  return { credentials, changeName, changePassword };
};

export default useLogin;
