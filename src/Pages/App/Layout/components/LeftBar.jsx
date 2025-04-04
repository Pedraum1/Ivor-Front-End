import { useState } from "react";
import { Link } from "react-router";
import Logo from "../../../../components/Logo.jsx";
import Modal from "../../../../components/Modal.jsx";
import Button from "../../../../components/Button.jsx";

function LeftBar() {
  return (
    <div>
      <Logo />
      <ul className="mt-5">
        <BarLink route="/feed">Página Inicial</BarLink>
        <BarLink>Explorar</BarLink>
        <BarLink>Mensagens</BarLink>
        <BarLink route="/profile/profile">Perfil</BarLink>
        {/* TODO: Inserting user profile tag dynamically */}
        <BarLink>Configurações</BarLink>
        <MakePost />
      </ul>
    </div>
  );
}

function BarLink({ route = "", children }) {
  return (
    <li
      className="hover:bg-ivor-800 mt-2 p-4 font-bold
                   text-xl me-16 cursor-pointer rounded-md transition-all
                   duration-150 ease-out"
    >
      <Link to={route}>{children}</Link>
    </li>
  );
}

function MakePost() {
  const [isVisible, setIsVisible] = useState(false);

  const showModal = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <li
        className="mt-2 py-4 font-bold text-xl transition-all
                   duration-150 ease-out"
      >
        <Button onClick={showModal}>Postar</Button>
      </li>
      <Modal
        showModal={isVisible}
        title="Criar post"
        onClick={showModal}
        onSubmit={showModal}
      >
        <textarea
          name=""
          className="w-full bg-transparent focus:outline-none text-xl
                          resize-none border-b"
          rows={6}
          placeholder="Digite algo..."
        ></textarea>
      </Modal>
    </>
  );
}

export default LeftBar;
