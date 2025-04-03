import Box from "../components/Box";

function VerifyEmail() {
  return (
    <Box name="Verificar Email" clasName="">
      <p className="text-justify">
        Um email foi enviado para
        <span className="text-ivor-400"> email@email.com </span>
        com um link de verificação. Por favor cheque sua caixa de entrada para
        realizar a verificação do email cadastrado. Clique no link para
        verificar seu endereço de email e finalizar seu cadastro. Se o link
        ainda não foi enviado,{" "}
        <span className="text-ivor-400 underline cursor-pointer">
          clique aqui
        </span>{" "}
        para enviar novamente.
      </p>
    </Box>
  );
}

export default VerifyEmail;
