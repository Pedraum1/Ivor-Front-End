import Box from "../auth_components/box";
import Input from "../auth_components/input";
import Button from "../auth_components/button";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <Box name="Login">
        <Input type="text" name="emailInput" title="Email" />
        <Input type="password" name="passwordInput" title="Senha" />
        <p className="text-end">
          <a href="" className="text-ivor-500 underline block">
            Esqueceu sua senha?
          </a>
          <Link href="/register" className="text-ivor-500 underline block">
            Crie sua conta
          </Link>
        </p>
        <Button title="Entrar" />
      </Box>
    </>
  );
}
