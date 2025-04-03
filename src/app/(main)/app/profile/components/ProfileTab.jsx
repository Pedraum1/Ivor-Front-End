import EditProfileModal from "./EditProfileModal";
import ProfileLink from "@/app/components/ProfileLink";
import Return from "@/app/components/Return";

export default function ProfileTab() {
  return (
    <>
      <article className="border-b-2 border-ivor-800">
        <header className="flex flex-row p-4 gap-x-4">
          <Return />
          <p className="font-semibold text-xl">Fulano de Tal</p>
        </header>
        <section className="relative">
          <img
            src="/general/noProfile.webp"
            className="max-h-52 object-cover w-full"
          />
          <img
            src="/general/noProfile.webp"
            className="absolute h-40 -translate-y-1/2 left-8 rounded-full"
          />
          <div className="flex justify-end p-8 pt-4">
            <EditProfileModal>Editar Perfil</EditProfileModal>
          </div>
          <div className="w-full px-4 pb-4">
            <h1 className="text-xl font-semibold">Fulano de tal</h1>
            <ProfileLink />
            <p className="text-sm break-words py-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure,
              voluptate esse quisquam voluptatibus adipisci cupiditate nisi
              obcaecati mollitia vero animi commodi porro odit doloremque error?
              Cumque dolorum ducimus quaerat assumenda!
            </p>
            <div className="flex flex-row gap-x-4">
              <p className="text-ivor-400">
                <span className="text-ivor-50 font-semibold">10 </span>{" "}
                Seguidores
              </p>
              <p className="text-ivor-400">
                <span className="text-ivor-50 font-semibold">10</span> Seguindo
              </p>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
