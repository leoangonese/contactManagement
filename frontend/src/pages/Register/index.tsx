import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import DirectionalText from '../Login/DirectionalText';
import useRegister from './userRegister';
import { registerUser } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const {
    newUser,
    handleNewName,
    handleNewPersonNumber,
    handleNewPhoneNumber,
    handleNewEmail,
    handleNewPassword,
    handleNewConfirmPassword,
    login,
  } = useRegister();
  const navigate = useNavigate();
  const { name, personNumber, phoneNumber, email, password, confirmPassword } = newUser;


  const handleRegister = async () => {
    try {
      const response = await registerUser(name, personNumber, phoneNumber, email, password, confirmPassword);
      console.log('Registro bem-sucedido:', response.message);
      navigate('/login');
    } catch (error) {
      console.log("erro>>", error)
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-green-950">
      <main className="w-[600px] h-[600px] m-4 flex flex-col items-center justify-around bg-green-600 rounded-2xl px-10 py-4 shadow-md shadow-[#00000050] mt-24">
        <Input label="Nome" placeholder="Digite seu nome" value={name} onChange={handleNewName} />

        <div className="flex justify-between w-full gap-3">
          <Input
            label="CPNJ/CPF"
            placeholder="Digite seu CNPJ/CPF"
            value={personNumber}
            onChange={handleNewPersonNumber}
          />
          <Input
            label="Telefone"
            placeholder="Digite seu telefone"
            value={phoneNumber}
            onChange={handleNewPhoneNumber}
          />
        </div>
        <Input
          label="E-mail"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={handleNewEmail}
          type="email"
        />

        <Input
          label="Senha"
          placeholder="Digite sua senha"
          value={password}
          onChange={handleNewPassword}
          type="password"
        />
        <Input
          label="Confirme a senha"
          placeholder="Digite novamente a senha"
          value={confirmPassword}
          onChange={handleNewConfirmPassword}
          type="password"
        />

        <Button className="mt-10" onClick={() => handleRegister()}>
          Cadastrar
        </Button>

        <DirectionalText text="Já possuo conta" href="/" />
      </main>
    </div>
  );
};

export default Register;
