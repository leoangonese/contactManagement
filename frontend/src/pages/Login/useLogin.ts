import { useState } from 'react';

const useLogin = () => {
  const [credentials, setCredentials] = useState({
    cpf: '',
    password: '',
  });

  const changeCpf= (value: string) => {
    setCredentials({ ...credentials, cpf: value.trimStart() });
  };

  const changePassword = (value: string) => {
    setCredentials({ ...credentials, password: value.trimStart() });
  };

  return { credentials, changeCpf, changePassword };
};

export default useLogin;
