export default function ProfileImage({ link }) {
  return (
    <>
      {link != null ? (
        <img src={link} className="h-12 w-12 rounded-full" />
      ) : (
        <img src="/general/noProfile.webp" className="h-12 w-12 rounded-full" />
      )}
    </>
  );
}
