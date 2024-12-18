import { useState } from 'react';

export interface INewUser {
  name: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

const useRegister = () => {
  const [newUser, setNewUser] = useState({
    name: '',
    personNumber: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const login = () => {
    if (newUser.password !== newUser.confirmPassword) {
      console.log('senhas devem ser iguais');
    } else if (
      (newUser.name === '' || newUser.password === '' || newUser.personNumber === '',
      newUser.phoneNumber === '')
    ) {
      console.log('campos vazios');
    }

  };

  const handleNewName = (value: string) => {
    setNewUser({ ...newUser, name: value.trimStart() });
  };

  const handleNewPersonNumber = (value: string) => {
    setNewUser({ ...newUser, personNumber: value.trimStart() });
  };

  const handleNewPhoneNumber = (value: string) => {
    setNewUser({ ...newUser, phoneNumber: value });
  };

  const handleNewEmail = (value: string) => {
    setNewUser({ ...newUser, email: value.trimStart() });
  };

  const handleNewPassword = (value: string) => {
    setNewUser({ ...newUser, password: value.trimStart() });
  };

  const handleNewConfirmPassword = (value: string) => {
    setNewUser({ ...newUser, confirmPassword: value.trimStart() });
  };

  return {
    newUser,
    handleNewName,
    handleNewPersonNumber,
    handleNewPhoneNumber,
    handleNewEmail,
    handleNewPassword,
    handleNewConfirmPassword,
    login,
  };
};

export default useRegister;
