import Link from "next/link";
import Box from "../components/box";
import Input from "../components/input";
import Button from "../components/button";

export default function Register() {
  return (
    <>
      <Box name="Register">
        <Input type="text" name="emailInput" title="Email" />
        <Input type="text" name="tagInput" title="Tag (@)"/>
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
