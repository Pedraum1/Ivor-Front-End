import ProfileImage from "./ProfileImage.jsx";
import Link from "next/link";

export default function Post() {
  return (
    <>
      <section className="min-h-24 border-y-ivor-700 p-4 border-b-2">
        <div>
          <Link href="" className="flex flex-row mb-3 items-center">
            <ProfileImage link="/general/noProfile.webp" />
            <h4 className="ms-3 hover:underline">Meu nome ser Fulano</h4>
            <span className="ms-2 text-sm text-ivor-400">@Fulano</span>
          </Link>
        </div>
        <div>
          <p className="break-words">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores mollitia, nostrum illum laborum eligendi error tempore, optio deserunt amet possimus quisquam minima tenetur laudantium inventore illo dignissimos magni veniam esse.
          </p>
        </div>
      </section>
    </>
  );
}
