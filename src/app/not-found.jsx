import Link from "next/link";

export default function NotFound() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-9xl font-extrabold text-darkOrange tracking-widest">
        404
      </h1>
      <span className="bg-orange text-white px-2 text-xl mb-20 rounded rotate-12 absolute">
        Página no encontrada
      </span>
      <span className="text-2xl text-darkOrange my-5 ">La página a la que estás accediendo no existe</span>
      <button className="mt-5">
        <div className="relative inline-block text-sm font-medium text-white group active:text-orange-500 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-darkOrange group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-orange border border-current">
            <Link href="/home">Ir al inicio</Link>
          </span>
        </div>
      </button>
    </main>
  );
}
