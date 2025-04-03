import Box from "../components/Box.jsx";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";
import { Link } from "react-router";

function Login() {
  return (
    <Box name="Login">
      <Input type="text" name="emailInput" title="Email" />
      <Input type="password" name="passwordInput" title="Senha" />
      <p className="text-end mb-4">
        <a href="" className="text-ivor-500 underline block">
          Esqueceu sua senha?
        </a>
        <Link to="/register" className="text-ivor-500 underline block">
          Crie sua conta
        </Link>
      </p>
      <Button>Entrar</Button>
    </Box>
  );
}

export default Login;
