import Logo from "../../components/Logo.jsx";
import NavLink from "./NavLink.jsx";
import PostModal from "../../components/CreatePostModal.jsx";

export default function LeftBar() {
  return (
    <>
      <div>
        <Logo />
        <ul className="mt-5">
          <NavLink route="/app">Página Inicial</NavLink>
          <NavLink route="/app/explore">Explorar</NavLink>
          <NavLink route="/app/messages">Mensagens</NavLink>
          <NavLink route="/app/profile">Perfil</NavLink>
          <NavLink route="/app/settings">Configurações</NavLink>
          <PostModal />
        </ul>
      </div>
    </>
  );
}
