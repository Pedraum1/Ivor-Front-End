export default function Textarea({
  name,
  className,
  rows = 6,
  placeholder = "Digite algo...",
  defaultValue = "",
}) {
  return (
    <>
      <textarea
        name={name}
        className={`w-full bg-transparent focus:outline-none focus:ring-0 text-xl
                          resize-none border-b border-ivor-50 placeholder-ivor-50 ${className}`}
        rows={rows}
        placeholder={placeholder}
        defaultValue={defaultValue}
      ></textarea>
    </>
  );
}
