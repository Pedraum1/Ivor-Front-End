import Box from "../components/Box";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";
import { Link } from "react-router";

function Register() {
  return (
    <>
      <Box name="Cadastro">
        <Input type="text" name="email" title="Email" />
        <Input type="password" name="password" title="Senha" />
        <Input
          type="password"
          name="password_confirm"
          title="Confirme sua senha"
        />
        <p className="text-end mb-4">
          <Link to="/login" className="text-ivor-500 underline block">
            Já possui conta? Clique aqui
          </Link>
        </p>
        <Button>Criar conta</Button>
      </Box>
    </>
  );
}

export default Register;
