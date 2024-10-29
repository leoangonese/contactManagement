import Input from '../../components/Input';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import DirectionalText from './DirectionalText';
import useLogin from './useLogin';

const Login = () => {
  const { credentials, changeName, changePassword } = useLogin();
  const { name, password } = credentials;

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-green-950">
      <main className="w-[580px] h-[540px] m-4 flex flex-col items-center bg-green-500 rounded-2xl p-10 shadow-md shadow-[#00000050]">
        <Logo size="lg" />

        <Input label="Nome" placeholder="Digite seu nome" value={name} onChange={changeName} />
        <Input
          label="Senha"
          placeholder="Digite sua senha"
          value={password}
          onChange={changePassword}
          type="password"
        />

        <DirectionalText text="Esqueci minha senha" href="/password-reset" />

        <Button onClick={() => console.log('login')}>Login</Button>

        <DirectionalText text="Quero me cadastrar" href="/register" />
      </main>
    </div>
  );
};

export default Login;
