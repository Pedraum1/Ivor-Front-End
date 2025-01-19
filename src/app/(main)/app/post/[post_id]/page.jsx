import Post from "../../../../components/post";
import Return from "../../../../components/Return"

export default function PostPage() {
  return (
    <>
      <section className="flex flex-row items-center p-4 pb-0 gap-x-8">
        <Return/>
        <h1 className="font-semibold text-2xl">Post</h1>
      </section>
      <Post />
      <h1 className="text-lg border-b border-ivor-800 p-2 ps-4">Respostas:</h1>
      <Post />
      <Post />
      <Post />
    </>
  );
}
