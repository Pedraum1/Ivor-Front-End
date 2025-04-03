export default function Box({ children, name }){
    return (
    <>
    <main
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   p-8 bg-ivor-50 xl:w-[30%] lg:w-[40%] md:w-[70%] w-full h-fit shadow-xl
                   shadow-ivor-900"
    >
        <div className="w-fit mx-auto">
            <h1 className="font-semibold md:text-7xl text-5xl text-center px-4">{name}</h1>
            <hr className="bg-ivor-500 my-3 text-center" />
        </div>
        <form className="pt-12 px-3">
            {children}
        </form>
    </main>
    </>
    );
}