export default function Input({ type, name, title }) {
  return (
    <>
      <label htmlFor={name} className="text-start text-xl font-medium ms-4">
        {title}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="w-full border-b bg-ivor-50 border-ivor-200 pt-3 px-4 pb-1
                   focus:outline-none text-lg font-medium focus:border-ivor-500
                   mb-8 block"
      />
    </>
  );
}
