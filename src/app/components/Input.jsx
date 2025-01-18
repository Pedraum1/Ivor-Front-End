export default function Input({ title, type }){
    return (
        <>
            <input type={type} className="bg-ivor-800 rounded-full p-3 px-5 text-lg focus:outline-0" placeholder={title} />
        </>
    );
}