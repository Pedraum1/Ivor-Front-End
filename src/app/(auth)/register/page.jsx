import Link from "next/link";
import Box from "../auth_components/box";
import Input from "../auth_components/input";
import Button from "../auth_components/button";

export default function Register() {
  return (
    <>
      <Box name="Register">
        <Input type="text" name="emailInput" title="Email" />
        <Input type="password" name="passwordInput" title="Senha" />
        <Input
          type="password"
          name="confirmPasswordInput"
          title="Confirme sua senha"
        />
        <p className="text-end">
          <Link href="/login" className="text-ivor-500 underline block">
            Já possui conta? Clique aqui
          </Link>
        </p>
        <Button title="Criar conta" />
      </Box>
    </>
  );
}
