import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import DirectionalText from '../Login/DirectionalText';
import useRegister from './userRegister';

const Register = () => {
  const {
    newUser,
    handleNewName,
    handleNewPersonNumber,
    handleNewPhoneNumber,
    handleNewPassword,
    handleNewConfirmPassword,
    login,
  } = useRegister();
  const { name, personNumber, phoneNumber, password, confirmPassword } = newUser;

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

        <Button className="mt-10" onClick={() => login()}>
          Cadastrar
        </Button>

        <DirectionalText text="Já possuo conta" href="/" />
      </main>
    </div>
  );
};

export default Register;
