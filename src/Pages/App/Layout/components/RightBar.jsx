function RightBar() {
  return (
    <section className="ps-5 relative">
      <Input type={"text"} title={"Pesquise algo"} />
    </section>
  );
}

function Input({ title = "", type = "text", className = "", value }) {
  return (
    <input
      type={type}
      className={`bg-ivor-800 rounded-full p-3 px-5 text-lg focus:outline-0 focus:ring-0 border-ivor-50 placeholder-ivor-50 ${className}`}
      placeholder={title}
      value={value}
    />
  );
}

export default RightBar;
