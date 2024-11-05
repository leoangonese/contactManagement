import Input from '../../components/Input';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import DirectionalText from './DirectionalText';
import useLogin from './useLogin';
import { login } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { credentials, changeCpf, changePassword } = useLogin();
  const { cpf, password } = credentials;
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log("teste")
    console.log('teste>>>', cpf, password)
    try {
      const data = await login(cpf, password);
      console.log('Login bem-sucedido!');
      localStorage.setItem('token', data.token);
      navigate('/contacts');
    } catch (err: any) {
      console.log(err)
      alert('Erro ao fazer login:' + err.response.data);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-green-950">
      <main className="w-[580px] h-[540px] m-4 flex flex-col items-center bg-green-500 rounded-2xl p-10 shadow-md shadow-[#00000050]">
        <Logo size="lg" />

        <Input label="Nome" placeholder="Digite seu nome" value={cpf} onChange={changeCpf} />
        <Input
          label="Senha"
          placeholder="Digite sua senha"
          value={password}
          onChange={changePassword}
          type="password"
        />

        <DirectionalText text="Esqueci minha senha" href="/password-reset" />

        <Button onClick={handleLogin}>Login</Button>

        <DirectionalText text="Quero me cadastrar" href="/register" />
      </main>
    </div>
  );
};

export default Login;
